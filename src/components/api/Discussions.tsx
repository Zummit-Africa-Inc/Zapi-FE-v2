import React, { SyntheticEvent, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import {Typography, Theme, Box, Accordion, Avatar, 	IconButton, TextareaAutosize, AccordionSummary, AccordionDetails, Tabs, Tab, Stack} from "@mui/material";
import { Button, Spinner } from "../../components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RiAddFill } from "react-icons/ri";
// import { discussionQuote } from "../../assets/svg";

import Cookies from "universal-cookie";
import { useAppContext } from "../../contexts/AppProvider";
import { APIType, DiscussionType } from "../../types";
import {  useHttpRequest } from "../../hooks";

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
  const { currentMode } = useAppContext();
  const [body, setBody] = useState<string>("");
  const { loading, sendRequest } = useHttpRequest();
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");

  //Discussion function
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  return (
    <Box className={classes.root}>
      <Box
				sx={{
					display: "column",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",

					"@media screen and (max-width: 428px)": {
						flexDirection: "column",
					},
				}}>

				<Box component="form" className={classes.add_button}>
					<Box
          sx={{
            background: "unset",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "2px",
            margin: "2px 20px 2px 3px",
            fontSize: "16px",
            fontFamily: "Lato",
            color: "#929AA3",
          }}>
							<IconButton type="button" aria-label="search">
								<RiAddFill style={{ color: "#929AA3", width: "20px" }} />
							</IconButton>
              <Typography>Add  Discussion</Typography>
          </Box>
				</Box>

        <Box className={classes.form}>
          <TextareaAutosize
                aria-label="minimum height"
                maxRows={6}
                minRows={6}
                placeholder="Start a Discussion here..."
                style={{
                    width: "99%",
                    height: "30%",
                    marginTop: "5%",
                    padding: "2%",
                    fontSize: "1em",
                }}
                value={body}
                required
                onChange={(e) => setBody(e.target.value)}
            />
        </Box>
         <Box sx={{
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
                }}
                >
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
                 {loading ? <Spinner/> : 'Submit'}
              </button>
            </Box>
			</Box>
      <Accordion className={classes.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <Avatar sx={{ marginLeft: "1rem", marginRight: "1rem",   
              "@media screen and (max-width: 900px)": {
                marginLeft: "0", 
                marginRight: "0"
                },}} src="/broken-image.jpg" />
            <Typography sx={{ width: '33%', flexShrink: 0, marginTop: "0.45rem",

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
                      new Date(api.createdOn).toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true })) ||
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
              <Typography component="p">
              {discussions.length} Comments
              </Typography>
            </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex",  backgroundColor: "white", 
        background: currentMode === "dark" ? "#121212" : "#F5F5F5"
        }}>
        <Stack sx={{
          background: currentMode === "dark" ? "#121212" : "#F5F5F5"
          }} direction="column" spacing={1} className={classes.discussion_comment}>
            <>
              {discussions.map((discussions, index) => (
                <Box sx={{background: currentMode === "dark" ? "#121212" : "#F5F5F5", color: currentMode === "dark" ? "#F5F5F5" : "#121212"}} className={classes.discussion_comment}>
                  <Avatar sx={{ marginLeft: "2rem", marginRight: "1rem"}} src="/broken-image.jpg" />
                  <Box sx={{ width: "100%" }}>
                    <Typography component="p" sx={{ marginBottom: "8px" }}>
                      {"User"}
                    </Typography>
                    <Typography  sx={{ width: "100%", height: "100%"}}  component="p">
                      {discussions.body ||
                        "Lorem ipsum dolor sit amet consectetur. Vel"}   
                    </Typography>
                  </Box>
                </Box>
              ))}
            </>
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

  form: {
    width: "100%", 
    marginTop: "-10px",
    "@media screen and (max-width: 870px)": {
        marginTop: "-40px",
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
    marginBottom: "3rem"          
  },
}));
