import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Stack, Theme, Box, Tooltip, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  StarBorderOutlined,
  AlarmOutlined,
  GroupOutlined,
} from "@mui/icons-material";
import Cookies from "universal-cookie";
import { useAppDispatch, useAppSelector, useHttpRequest } from "../../hooks";
import { toast } from "react-toastify";
import { getSubscribedApis } from "../../redux/slices/userSlice";
import { getApis } from "../../redux/slices/apiSlice";
import { useAppContext } from "../../contexts/AppProvider";
import { APIType } from "../../types";

const core_url = "VITE_CORE_URL";

interface Props {
  api: APIType;
}

const APIMoreInfo: React.FC<Props> = ({ api }) => {
	const { error, loading, sendRequest } = useHttpRequest();
    const { categories } = useAppSelector(store => store.apis);
    const [isRatingOpen, setIsRatingOpen] = useState<boolean>(false)
    // const { subscribedApis } = useAppSelector((store) => store.user);
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const cookies = new Cookies();
    const profileId = cookies.get("profileId");
    const accessToken = cookies.get("accessToken");
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { handleClicked, currentMode } = useAppContext();

  const category = categories.find(
    (category) => category.id === api.categoryId
  );

  // useEffect(() => {
  //     subscribedApis.forEach((api: any) => {
  //         if (api.apiId === api.id) return setIsSubscribed(true);
  //     });
  // }, []);

  const handleSubscription = async () => {
    const headers = {
      "Content-Type": "application/json",
      "X-Zapi-Auth-Token": `Bearer ${accessToken}`,
    };

    if (!isSubscribed) {
      try {
        const data = await sendRequest(
          `/subscription/subscribe/${api.id}`,
          "post",
          core_url,
          undefined,
          headers,
          { profileId }
        );
        if (!data || data === undefined) return;
        const { message } = data;
        toast.success(`${message}`);
        setIsSubscribed(true);
      } catch (error) {}
    } else {
      try {
        const data = await sendRequest(
          `/subscription/unsubscribe/${api.id}`,
          "post",
          core_url,
          undefined,
          headers,
          { profileId }
        );
        if (!data || data == undefined) return;
        const { message } = data;
        setIsSubscribed(false);
        toast.success(`${message}`);
      } catch (error) {}
    }
    dispatch(getApis());
    dispatch(getSubscribedApis(profileId));
  };

  const saveCategory = (category: any) => {
    localStorage.setItem("category", category);
  };

  useEffect(() => {
    error && toast.error(`${error}`);
  }, [error]);

  return (
    <>
      {/* {isRatingOpen && <Rating apiId={api.id} onClose={() => setIsRatingOpen(false)} />} */}
      <Box className={classes.root}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px",
            textTransform: "capitalize",

            "@media screen and (max-width: 630px)": {
              display: "flex",
              flexDirection: "column",
              marginBottom: "26px",
            },
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Box>
              <Typography component="h2">
                {api.name || "Name of API"}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                }}>
                <Typography component="p">
                  <>By: {api.createdBy || "Unknown"}</>
                </Typography>
                <Typography component="p">|</Typography>
                <Typography component="p">
                  <>
                    Created On:{" "}
                    {(api.createdOn &&
                      new Date(api.createdOn).toDateString()) ||
                      "Today"}
                  </>
                </Typography>
                <Typography component="p">|</Typography>
                <Tooltip title="Category" placement="right" arrow>
                  <Link to={"/api-hub"}>
                    <Typography component="p">
                      {category?.name || "Category"}
                    </Typography>
                  </Link>
                </Tooltip>
              </Box>
            </Box>
          </Box>

          <Stack
            direction="row"
            spacing={3}
            justifyContent={"end"}
            alignItems={"center"}>
            <Box>
              <Button
                endIcon={<StarBorderOutlined />}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  border: "1px solid #081F4A",
                  color: "#081F4A",
                  borderRadius: "5px",
                  fontSize: "13px",
                  minWidth: "130px",
                  height: "2.4rem",

                  "@media screen and (max-width: 900px)": {
                    fontSize: "11px",
                    minWidth: "100px",
                    height: "2.2rem",

                    "& svg": {
                      width: "17px",
                    },
                  },

                  "@media screen and (max-width: 428px)": {
                    fontSize: "11px",
                    minWidth: "100px",
                    height: "2.2rem",

                    "& svg": {
                      width: "17px",
                    },
                  },
                }}>
                Rate
              </Button>
            </Box>
            <Box>
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#081F4A",
                  border: "1px solid #081F4A",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                  fontSize: "13px",
                  minWidth: "130px",
                  height: "2.4rem",

                  "@media screen and (max-width: 900px)": {
                    fontSize: "11px",
                    minWidth: "100px",
                    height: "2.2rem",
                  },

                  "@media screen and (max-width: 428px)": {
                    fontSize: "11px",
                    minWidth: "100px",
                    height: "2.2rem",
                  },
                }}
                variant={"contained"}
                onClick={
                  accessToken
                    ? handleSubscription
                    : () => handleClicked("login")
                }>
                {"Subscribe"}
              </Button>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}>
            <Box>
              <Typography component="h3">Website</Typography>
              <Typography component="p">
                Website:{" "}
                {api.api_website ? (
                  <a
                    href={`${api.api_website}`}
                    target="_blank"
                    rel="noreferrer">
                    {api.api_website}
                  </a>
                ) : (
                  "Website not specified"
                )}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",

                "& div": {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#B8CEF7",
                  borderRadius: "5px",
                  padding: "2px 8px",
                  width: "auto",
                  height: "auto",
                },

                "& h5": {
                  lineHeight: 0,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#081F4A",
                },

                "& svg": {
                  width: "17px",
                },

                "@media screen and (max-width: 900px)": {
                  "& div": {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "3px",
                    padding: "0 7px",
                  },
                  "& h5": {
                    fontSize: "10px",
                  },

                  "& svg": {
                    width: "14px",
                  },
                },

                "@media screen and (max-width: 428px)": {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "8px",
                },
              }}>
              <Box component="div">
                <GroupOutlined />
                <Typography component="h5">270</Typography>
              </Box>

              <Box component="div">
                <AlarmOutlined />
                <Typography component="h5">{api.latency || 0} ms</Typography>
              </Box>

              <Box component="div">
                <StarBorderOutlined />
                <Typography component="h5">
                  {api.popularity || 10}/10
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography component="h3">Documentation</Typography>
          <Typography component="p">
            {api.read_me ? api.read_me : "ReadMe file not attached"}
          </Typography>

          <Typography component="h3">About API</Typography>
          <Typography component="p">
            {api.description ||
              "Lorem ipsum dolor sit amet consectetur. Feugiat amet aliquam rutrum in nam bibendum. Orci velit senectus urna mauris augue et habitant sem. Sit facilisis donec in nisl pulvinar faucibus integer pharetra a. In blandit morbi varius malesuada. Massa urna dignissim varius erat nunc lacus facilisis pharetra. Amet justo mauris velit rutrum sed risus lectus. Turpis vitae erat diam arcu molestie mattis vestibulum lorem. Nulla dictum id aenean molestie aliquam volutpat enim tortor. Metus pretium magnis diam sit arcu nisl. Eget at a dolor ultricies et sit ut. Hendrerit viverra tincidunt ut ultricies nec enim aenean. Amet senectus pellentesque gravida iaculis urna diam orci. Fringilla sed auctor elementum mus non volutpat nullam. Purus aliquam sit tincidunt sit eu massa mauris nullam."}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default APIMoreInfo;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    padding: "86px 108px 24px 108px",
    lineHeight: "41px",
    width: "100%",
    "& h2": {
      marginBottom: 16,
      fontWeight: "bold",
      fontSize: "28px",
      color: "#060607",
    },
    "& h3": {
      marginBottom: 16,
      fontWeight: 700,
      fontSize: "19px",
      color: "#060607",
    },
    "& p": {
      marginBottom: 32,
      fontWeight: 400,
      fontSize: "16px",
      color: "#3E4245",
    },

    "@media screen and (max-width: 900px)": {
      padding: "44px 32px 24px 32px",

      "& h2": {
        fontSize: "23px",
      },
      "& h3": {
        fontSize: "14px",
      },
      "& p": {
        fontSize: "14px",
      },
    },

    "@media screen and (max-width: 428px)": {
      padding: "20px 16px 24px 16px",
      fontSize: "14px",
    },
  },
}));
