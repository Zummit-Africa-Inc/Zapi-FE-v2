import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import {Typography, Theme, Box, Tooltip, Button, Paper, InputBase, IconButton, Accordion, Avatar, AccordionSummary, AccordionDetails, Tabs, Tab, Stack} from "@mui/material";
import { Search, ExpandMore, ChatRounded, AddCommentOutlined } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { discussionQuote } from "../../assets/svg";


import Cookies from "universal-cookie";
import { APIType, DiscussionType } from "../../types";


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
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");
  const [tab, setTab] = useState<number>(0);
  const handleTabChange = (e: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

// Discussion function
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  return (
    <Box className={classes.root}>
      <Accordion className={classes.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Avatar sx={{ marginLeft: "1rem", marginRight: "1rem"}} src="/broken-image.jpg" />
          <Typography sx={{ width: '33%', flexShrink: 0, marginTop: "0.45rem" }}>
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
              }}>
              <Typography component="p">
              {discussions.length} Comments
              </Typography>
            </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex",  backgroundColor: "white"}}>
        {/* Join Discussion Button */}
        {/* <Box>
            <Button
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
              <img src={discussionQuote} alt=""/>
                Join  Discussion
            </Button>
        </Box> */}
          {/* <Avatar sx={{ marginLeft: "2rem", marginRight: "1rem"}} src="/broken-image.jpg" />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            User2 
            <Typography>
              Lorem ipsum dolor sit amet consectetur. Vel
            </Typography> 
          </Typography> */}

          <Stack direction="column" spacing={1} className={classes.user_review}>
          <>
            {discussions.map((discussions, index) => (
              <Box className={classes.user_review}>
                <Avatar sx={{ marginLeft: "2rem", marginRight: "1rem"}} src="/broken-image.jpg" />
                <Box sx={{ width: "100%" }}>
                  <Typography component="p" sx={{ marginBottom: "8px" }}>
                    {"User"}
                  </Typography>
                  <Typography  sx={{ width: "100%", height: "100%"}}  component="p">
                    {/* {discussions.review ||
                      "s vitae erat diam arcu molestie mattis vestibulum lorem. Nulla dictum id aenean molestie aliquam volutpat enim tortor. Metus pretium magnis diam sit arcu nisl. Eget at a dolor ultricies et sit ut. Hendrerit viverra tincidunt ut ultricies nec enim aenean. Amet senectus pellentesque gravida iaculis urna diam orci. Fringilla sed auctor elementum mus non volutpat nullam. Purus aliquam sit tincidunt sit eu massa mauris nullam."} */}
                      Lorem ipsum dolor sit amet consectetur. Vel
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

  user_review: {
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
  },
}));
