import React, { SyntheticEvent, FormEvent, useState, useEffect} from "react";
import { styled, makeStyles } from "@mui/styles";
import {
  Typography,
  Theme,
  Box,
  Accordion,
  Avatar,
  Button,
  IconButton,
  TextareaAutosize,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";
import { AddDiscussion, Spinner } from "../../components";
import { quote } from "../../assets/svg";
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { toast } from "react-toastify";
import { useQuery } from 'react-query'

import Cookies from "universal-cookie";
import { useAppContext } from "../../contexts/AppProvider";
import { APIType, DiscussionType } from "../../types";
import {  
  useAppDispatch, 
  useFormInputs, 
  useHttpRequest
 } from "../../hooks";
//import { Fallback } from "../Fallback";
import { addDiscussion } from "../../redux/slices/apiSlice";


const core_url = "VITE_CORE_URL";
const initialState = {
  body: "",
};

const CustomTabs = styled(Tabs)({
  "&.MuiTabs-root": {
    width: "auto",
    borderRight: "1px solid #D1D1D1",
    height: "100vh",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const CustomTab = styled(Tab)({
  "&.MuiTab-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontWeight: "normal",
    fontSize: "14px",
    maxWidth: "100%",
    borderBottom: "1px solid #D1D1D1",
  },
  "&.Mui-selected": {
    backgroundColor: "#f1f1f1",
  },
});

const CustomAccordion = styled(Accordion)({
  "&.MuiAccordion-root": {
    boxShadow: "unset",
    border: "unset",
    backgroundColor: "#fff",
  },
});

interface Props {
  discussions: Array<DiscussionType>;
  api: APIType;
}

const Discussions: React.FC<Props> = ({ api, discussions }) => {
  const classes = useStyles();
  const { inputs, bind, toggle } = useFormInputs(initialState);
  const { currentMode, triggerRefresh } = useAppContext();
  const { body } = inputs;
  const [discussionBody, setDiscussionBody] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const {error, loading, sendRequest, clearError } = useHttpRequest();
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");
  const profile_id = cookies.get("profileId");
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = React.useState<string | false>(false);


  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const api_id = JSON.parse(localStorage.getItem("api_id") || '');
    if(!body) return toast.error('Please add a comment in the field')
    const headers = {
      'Content-Type': "application/json",
      'X-Zapi-Auth-Token': `Bearer ${cookies.get("accessToken")}`
    }
    const payload = { body, profile_id, api_id }
    try {
      // const data = await sendRequest(`/discussion/comment/${discussionId}/${cookies.get("profileId")}`, "post", core_url, payload, headers)
      const data = await sendRequest(
        `/discussion`,
        "post",
        core_url,
        payload,
        headers
      );
      console.log(data);
      if (!data || data === null) return;
      dispatch(addDiscussion(payload));
      triggerRefresh();
      const { message } = data;
      toast.success(`${message}`);
    } catch (err: any) {
      console.log(err);
    }
  };
    
    useEffect(() => {
    error && toast.error(`${error}`)
    },[error])

  const toggleAdding = () => {
    setIsAdding((prev) => !prev);
  };


  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className={classes.root}>
      <AddDiscussion />
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Avatar
            sx={{
              marginLeft: "1rem",
              marginRight: "1rem",
              "@media screen and (max-width: 900px)": {
                marginLeft: "0",
                marginRight: "0",
              },
            }}
            src="/broken-image.jpg"
          />
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              marginTop: "0.45rem",

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
            Username
          </Typography>
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#060607",
              marginLeft: "-10rem",
              marginRight: "2rem",
              marginTop: "0.45rem",
              "@media screen and (max-width: 900px)": {
                display: "none",
              },
            }}>
            <Typography component="p">
              A comment or discussion about {api.name}
            </Typography>
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#060607",
              marginLeft: "3rem",
              marginTop: "0.45rem",
              "@media screen and (max-width: 900px)": {
                display: "none",
              },
            }}>
            <Typography component="p">
              {(api.createdOn &&
                new Date(api.createdOn).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })) ||
                "Today"}
            </Typography>
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#060607",
              marginLeft: "11rem",
              marginTop: "0.45rem",
              "@media screen and (max-width: 900px)": {
                marginLeft: "3.1rem",
              },
            }}>
            <Typography component="p">{discussions.length} Comments</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            backgroundColor: "white",
            background: currentMode === "dark" ? "#121212" : "#F5F5F5",
          }}>
          <Stack
            sx={{
              background: currentMode === "dark" ? "#121212" : "#F5F5F5",
            }}
            direction="column"
            spacing={1}
            className={classes.discussion_comment}>
            <Box>

              {/* Join Discussion */}
              <Box>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent:"flex-end" }}>
                    <Box>
                      <Button
                        sx={{
                          background: currentMode === "dark" ? "#121212" : "#FFFFFF",
                          color: "#BEC2C8",
                          width: "200px",
                          height: "2.5rem",
                          border: "1px solid #BEC2C8"
                        }}
                        onClick={toggleAdding}
                        startIcon={isAdding ? <CloseIcon /> : <img src={quote} alt="zapi logo" />}
                        style={{ background: isAdding ? "#fff" : "#fff", color: isAdding ? "#BEC2C8" : "#BEC2C8", borderColor: isAdding ? "#BEC2C8" : "#BEC2C8" }}
                        >
                        {isAdding ? "Cancel" : "Join Discussion"}
                      </Button>
                    </Box>
                  </Box>
                  {isAdding && (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Box className={classes.form}>
                      <TextareaAutosize
                      aria-label="minimum height"
                      maxRows={6}
                      minRows={6}
                      placeholder="Leave a Comment.."
                      style={{
                        width: "99%",
                        height: "30%",
                        marginTop: "5%",
                        padding: "2%",
                        fontSize: "1em",
                        borderRadius: "10px",
                        borderColor: "#BEC2C8",
                        color: "#BEC2C8",
                        background: currentMode === "dark" ? "#121212" : "#FFFFFF",
                        }}
                        name="body"
                        {...bind}
                        required
                        // value={body}
                        // onChange={(e) => setDiscussionBody(e.target.value)}
                      />
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
                      <button onClick={toggleAdding}
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
                        }}>
                        Cancel
                      </button>
                      <button  
                        // onClick={toggleAdding} 
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
                )}
              </Box>

              {discussions.map((discussions, index) => (
                <Box
                  key={index}
                  sx={{
                    background: currentMode === "dark" ? "#121212" : "#F5F5F5",
                    color: currentMode === "dark" ? "#F5F5F5" : "#121212",
                  }}
                  className={classes.discussion_comment}>
                  <Avatar
                    sx={{ marginLeft: "2rem", marginRight: "1rem" }}
                    src="/broken-image.jpg"
                  />
                  <Box sx={{ width: "100%" }}>
                    <Typography component="p" sx={{ marginBottom: "8px" }}>
                      {"User"}
                    </Typography>
                    <Typography
                      sx={{ width: "100%", height: "100%" }}
                      component="p">
                      {discussions.body ||
                        "Lorem ipsum dolor sit amet consectetur. Vel"}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Discussions;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    padding: "0 108px",
    lineHeight: "41px",
    width: "100%",
    "& h2": {
      margin: "64px 0 32px 0",
      fontWeight: "bold",
      fontSize: "19px",
      color: "#060607",
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

  add_button: {
    boxShadow: "unset",
    display: "flex",
    width: "20%",
    marginTop: "2.5rem",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.grey[500],
    border: `1px solid ${theme.shadows[1]}`,
    borderRadius: "4px",
    "@media screen and (max-width: 428px)": {
      marginBottom: "64px",
      width: "50%",
    },
  },

  joinDiscussion: {
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
      marginTop: "20px",
      width: "100%",
    },
  },

  discussion_comment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "24px",
    marginBottom: "12px",
    marginTop: "40px",
    borderBottom: "1px solid #d1d1d1",
    padding: "0 0 21px 25px",
    width: "100%",
    backgroundColor: "white",
    "& p": {
      fontWeight: "normal",
      fontSize: "16px",
      color: "#3E4245",
    },
  },

  accordion: {
    marginTop: "60px",
    marginBottom: "3rem",
  },
}));



// Caching with react query
// import { useQuery } from 'react-query'

// const headers = { 'X-Zapi-Auth-Token': `Bearer ${cookies.get('accessToken')}` }

// const fetchData = async (endpoint: string) => {
//     try {
//         const response = await fetch(endpoint, { headers })
//         const data = await response.json()
//         return data
//     } catch (error) {
//         throw error
//     }
// }

// const MyComponent = () => {
//     const { data, status } = useQuery(
//         `data-${apiId}`,
//         () => fetchData(`${core_url}/analytics/api/${apiId}`),
//         {
//             // cache time in milliseconds
//             staleTime: 60 * 1000, 
//             retry: false
//         }
//     )

//     if (status === 'loading') return <div>Loading...</div>
//     if (status === 'error') return <div>Error: {error.message}</div>

//     return (
//         <div>
//             <p>Data: {JSON.stringify(data)}</p>
//         </div>
//     )
// }