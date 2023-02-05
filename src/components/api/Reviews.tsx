import React, { useEffect, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import { ChatRounded, AccountCircle, Add } from "@mui/icons-material";
import Cookies from "universal-cookie";
import {
  Typography,
  Theme,
  Box,
  Stack,
  Button,
  TextareaAutosize,
} from "@mui/material";

import { ReviewType } from "../../types";
import { useAppContext } from "../../contexts/AppProvider";
import { useHttpRequest } from "../../hooks";
import { Spinner } from "../../components";
interface Props {
  reviews: Array<ReviewType>;
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  const classes = useStyles();
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");
  const [body, setBody] = useState<string>("");
  const { currentMode } = useAppContext();
  const { loading, sendRequest } = useHttpRequest();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrap}>
        <Typography component="h2">Reviews</Typography>
        <Box className={classes.textWrapper}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginRight: "0.5rem",
            }}>
            <Button
              variant="outlined"
              sx={{
                background: currentMode === "dark" ? "#121212" : "#FFFFFF",
                color: "#BEC2C8",
                width: "200px",
                height: "2.5rem",
                borderColor: "#BEC2C8",
              }}
              className={classes.newDiscussion}>
              <Add />{" "}
              <Typography sx={{ fontSize: "14px" }}>Add Review</Typography>
            </Button>
          </Box>
          <Box className={classes.form}>
            <TextareaAutosize
              aria-label="minimum height"
              maxRows={6}
              minRows={6}
              placeholder="Leave a Review"
              style={{
                width: "99%",
                height: "30%",
                marginTop: "5%",
                padding: "2%",
                fontSize: "1em",
                borderRadius: "1em",
                borderColor: "#BEC2C8",
                color: "#BEC2C8",
                background: currentMode === "dark" ? "#121212" : "#FFFFFF",
              }}
              value={body}
              required
              onChange={(e) => setBody(e.target.value)}
            />
          </Box>
        </Box>

        <Box
          sx={{
            gap: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}>
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "6px",
              padding: "12px 24px",
              gap: "16px",
              fontFamily: "inherit",
              height: "46px",
              cursor: "pointer",
              background: currentMode === "dark" ? "#121212" : "#FFFFFF",
              color: "#929AA3",
              border: "1px solid #929AA3",
              borderRadius: "4px",
              borderColor: "#BEC2C8",
            }}>
            Cancel
          </button>
          <button
            style={{
              outline: "none",
              border: "none",
              display: "flex",
              marginRight: "6px",
              alignItems: "center",
              padding: "12px 24px",
              gap: "16px",
              height: "46px",
              fontFamily: "inherit",
              color: currentMode === "dark" ? "#060607" : "#F5F5F5",
              background: currentMode === "dark" ? "#FFEA00" : "#081F4A",
              borderRadius: "4px",
              textAlign: "center",
              cursor: "pointer",
            }}
            type="submit">
            {loading ? <Spinner /> : "Submit"}
          </button>
        </Box>
      </Box>

      <Stack direction="column" spacing={1} sx={{ marginTop: "3rem" }}>
        {reviews.length !== 0 ? (
          <>
            {reviews.map((review, index) => (
              <Box className={classes.user_review} key={index}>
                <AccountCircle />

                <Box sx={{ width: "100%" }}>
                  <Typography component="p" sx={{ marginBottom: "8px" }}>
                    {/* {review.by.fullName || "User"} */}
                    {"User"}
                  </Typography>
                  <Typography component="p">
                    {review.review ||
                      "s vitae erat diam arcu molestie mattis vestibulum lorem. Nulla dictum id aenean molestie aliquam volutpat enim tortor. Metus pretium magnis diam sit arcu nisl. Eget at a dolor ultricies et sit ut. Hendrerit viverra tincidunt ut ultricies nec enim aenean. Amet senectus pellentesque gravida iaculis urna diam orci. Fringilla sed auctor elementum mus non volutpat nullam. Purus aliquam sit tincidunt sit eu massa mauris nullam."}
                  </Typography>
                </Box>
              </Box>
            ))}
          </>
        ) : (
          <Box
            sx={{
              border: "unset",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "110px 0",
              alignItems: "center",
              width: "100%",
            }}>
            <ChatRounded
              sx={{
                fontSize: "32px",
                color: currentMode === "dark" ? "#FFEA00" : "#264276",
              }}
            />
            <Typography
              sx={{
                fontSize: "18px",
                color: currentMode === "dark" ? "#FFFFFF" : "#060607",
              }}>
              No reviews on the API yet.
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Reviews;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    padding: "0 120px 80px 120px",
    lineHeight: "41px",
    width: "100%",
    "& h2": {
        margin: "64px 0 32px 0",
        fontWeight: "bold",
        fontSize: "19px",
        color: theme.palette.grey[100],
    },

    "@media screen and (max-width: 900px)": {
      padding: "44px 32px 24px 32px",

      "& h2": {
        fontSize: "23px",
      },
    },

    "@media screen and (max-width: 428px)": {
      padding: "20px 16px 24px 16px",
      fontSize: "14px",
    },
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "@media screen and (max-width: 428px)": {
      flexDirection: "column",
    },
  },
  textWrapper: {
    "@media screen and (max-width: 428px)": {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
    },
  },
  newDiscussion: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 16px",
    gap: "16px",
    width: "170px",
    lineHeight: "46px",
    // borderColor: "#071B85",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#FFFFFF",
    border: " solid #071B85",
    fontWeight: "500",
    fontSize: "16px",
    "@media screen and (max-width: 1024px)": {
      marginBottom: "1rem",
      width: "385px",
    },
    "@media screen and (max-width: 500px)": {},
  },
  form: {
    width: "100%",
    marginTop: "-10px",
    "@media screen and (max-width: 870px)": {
      marginTop: "-40px",
      width: "100%",
    },
  },

  review_button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    border: `1px solid ${theme.shadows[9]}`,
    color: theme.shadows[9],
    borderRadius: "5px",
    fontSize: "12px !important",
    fontWeight: "bold !important",
    width: "150px !important",
    height: "2.4rem",
  

    "@media screen and (max-width: 900px)": {
      fontSize: "10px",
      width: "120px",
      height: "2.2rem",
  
      "& svg": {
      width: "17px",
      },
    },
  
    "@media screen and (max-width: 428px)": {
      fontSize: "10px",
      width: "120px",
      height: "2.2rem",
  
      "& svg": {
      width: "17px",
      },
    },
  },

  user_review: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "22px",
    marginBottom: "12px",
    borderBottom: "1px solid #d1d1d1",
    padding: "0 0 25px",
    width: "100%",

    "& img": {
      backgroundColor: theme.palette.grey[100],
      width: "48px",
      height: "48px",
    },
    
    "& svg": {
      color: theme.palette.grey[100],
      width: "48px",
      height: "48px",
    },

    "& p": {
      fontWeight: "normal",
      fontSize: "16px",
      color: theme.palette.grey[100],
    },
  },
}));
