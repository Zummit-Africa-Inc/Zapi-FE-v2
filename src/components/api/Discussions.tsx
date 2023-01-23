import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import {Typography, Theme, Box, Tooltip, Button, Paper, InputBase, IconButton, Accordion, AccordionSummary,         AccordionDetails, Tabs, Tab, Stack} from "@mui/material";
import { Search, ExpandMore, ChatRounded } from "@mui/icons-material";
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

  return (
    <Box className={classes.root}>
      {discussions && discussions.length !== 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "64px",
          }}>
          {discussions?.map((discussions, index) => (
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "28px",
                backgroundColor: "#D3D7DA",
                padding: "12px 24px",
              }}>
              <Box
                sx={{
                  backgroundColor: "#081F4A",
                  borderRadius: "3px",
                  padding: "4px 10px",
                  fontSize: "13px",
                  color: "#fff",
                  textTransform: "uppercase",
                }}>
                <Typography component="p">
                  {discussions.title || "POST"}
                </Typography>
              </Box>

              <Box
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#060607",
                }}>
                <Typography component="p">
                  {discussions.body ||
                    "ipsum dolor sit amet consectetur. Feugiat amet aliquam rutrum in"}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "80px",
              width: "100%",
            }}>
            <ChatRounded sx={{ fontSize: "28px", color: "#264276" }} />
            <Typography sx={{ fontSize: "15px", color: "#060607" }}>
              There are no endpoints in this API.
            </Typography>
          </Box>
        </Box>
      )}


{/* export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div> */}

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
}));
