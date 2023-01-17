import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { makeStyles, styled } from "@mui/styles";
import { Box, Stack, Tabs, Tab, Theme } from "@mui/material";

import { Button, TabPanel, Paper } from "../..";
import { useAppContext } from "../../../contexts/AppProvider";

const TabContent = [
  {
    context:
      " Rise to power of Genghis Khan With powerful allies and a force of his own, Temujin routed the Merkit, with the help of a strategy by which Temujin was regularly to scotch the seeds of future rebellion. He tried never to leave an enemy in his rear; years later, before attacking China, he would first make sure that no nomad leader survived to stab him in the back. Not long after the destruction of the Merkit, he treated the nobility of the Jürkin clan in the same way.",
    ans: "With powerful allies and a force of his own, Temujin routed the Merkit. He exterminated the clan nobility and took the common people as his own soldiery and servants.",
  },
  {
    context: "Keyword extraction",
    ans: "",
  },
  {
    context: "Question and answer bot",
    ans: "",
  },
];

const TabLabel = [
  {
    label: "Summarization",
  },
  {
    label: "Keyword extraction",
  },
  {
    label: "Question and answer bot",
  },
];

const TaskLang: React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  const { currentMode } = useAppContext();
  return (
    <Box className={classes.container}>
      <Stack className={classes.left}>
        <Stack>
          <CustomTabs
            value={tab}
            variant="scrollable"
            scrollButtons="auto"
            onChange={(e, newValue) => setTab(newValue)}>
            {TabLabel.map((label, i) => (
              <Tab
                className={
                  currentMode === "dark"
                    ? classes.darkCustomTab
                    : classes.customTab
                }
                key={i}
                label={label.label}
              />
            ))}
          </CustomTabs>
        </Stack>
        <Stack>
          {TabContent.map((item, i) => (
            <TabPanel key={i} value={tab} index={i}>
              <Paper className={classes.paper}>
                <p>{item.context}</p>
                <span>{item.ans}</span>
              </Paper>
            </TabPanel>
          ))}
        </Stack>
      </Stack>
      <Stack className={classes.content}>
        <h1>
          Perform a wide variety <br /> of natural language
          <br /> tasks.
        </h1>
        <Stack direction="row" spacing={2}>
          <Button
            label="Get Started"
            variant={currentMode === "dark" ? "secondary" : "primary"}
            type="button"
            size="medium"
            icon={
              <FiArrowRight />
            }
          />
          <Button
            to="#"
            style={{
              color: '#081F4A'
            }}
            label="Try it out"
            size="medium"
            variant={currentMode === "dark" ? "tertiary" : "outline"}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default TaskLang;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "64px",
    padding: "4rem 6.7rem",
    background: theme.palette.background.default,
    [theme.breakpoints.down("laptop")]: {
      flexDirection: "column-reverse",
      padding: "4rem 1rem",
    },
    [theme.breakpoints.down("mobile")]: {
      flexDirection: "column-reverse",
      padding: "4rem 1rem",
    },
  },
  left: {
    width: "593px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    [theme.breakpoints.down("laptop")]: {
      width: "100%",
    },
    [theme.breakpoints.down("mobile")]: {
      width: "100%",
    },
  },
  paper: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "64px",
    "& p": {
      fontSize: "16px",
      fontWeight: 400,
      color: "#5A5F65",
    },
    "& span": {
      fontFamily: "var(--paper-font)",
      fontSize: "16px",
      fontWeight: 600,
      color: "#060607",
    },
  },
  content: {
    width: "565px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    [theme.breakpoints.down("laptop")]: {
      width: "100%",
    },
    "& h1": {
      fontSize: "48px",
      fontWeight: 600,
      letterSpacing: "-0.04em",
      color: theme.palette.grey[100],
      [theme.breakpoints.down("laptop")]: {
        width: "100%",
        fontSize: "34px",
        "& br": {
          display: "none",
        },
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "34px",
      },
    },
  },
  customTab: {
    "&.MuiTab-root": {
      textTransform: "none",
      fontWeight: 400,
      fontSize: "18px",
      color: "#929AA3",
    },
    "&.Mui-selected": {
      backgroundColor: "#E9EBED",
      color: "#3E4245",
      borderBottom: "none",
    },
  },
  darkCustomTab: {
    "&.MuiTab-root": {
      textTransform: "none",
      fontWeight: 400,
      fontSize: "18px",
      color: "#A8AEB5 !important",
    },
    "&.Mui-selected": {
      backgroundColor: "#333333",
      color: "#E9EBED !important",
      borderBottom: "none",
    },
  },
}));

const CustomTabs = styled(Tabs)({
  "&.MuiTabs-root": {
    width: "100%",
    height: "54px",
    borderTop: "2px solid #E9EBED",
    borderBottom: "2px solid #E9EBED",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
});
