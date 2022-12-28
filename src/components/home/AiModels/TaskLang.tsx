import { Box, Stack, Tabs, Tab, Theme } from "@mui/material";
import { Button, TabPanel, Paper } from "../..";
import { ButtonArrow } from "../../../assets/icons";
import React, { useState } from "react";
import { makeStyles, styled } from "@mui/styles";

const TaskLang: React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  return (
    <Box className={classes.container}>
      <Stack className={classes.left} style={{ width: "593px" }}>
        <Stack>
          <CustomTabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
            <CustomTab label="Summarization" />
            <CustomTab label="Keyword extraction" />
            <CustomTab label="Question and answer bot" />
          </CustomTabs>
        </Stack>
        <Stack>
          <TabPanel value={tab} index={0}>
            <Paper className={classes.paper}>
              <p>
                Rise to power of Genghis Khan With powerful allies and a force
                of his own, Temujin routed the Merkit, with the help of a
                strategy by which Temujin was regularly to scotch the seeds of
                future rebellion. He tried never to leave an enemy in his rear;
                years later, before attacking China, he would first make sure
                that no nomad leader survived to stab him in the back. Not long
                after the destruction of the Merkit, he treated the nobility of
                the Jürkin clan in the same way.{" "}
              </p>
              <span>
                With powerful allies and a force of his own, Temujin routed the
                Merkit. He exterminated the clan nobility and took the common
                people as his own soldiery and servants.
              </span>
            </Paper>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            Keyword extraction
          </TabPanel>
          <TabPanel value={tab} index={2}>
            Question and answer bot
          </TabPanel>
        </Stack>
      </Stack>
      <Stack className={classes.content}>
        <h1>
          Perform a wide variety of natural language
          <br /> tasks.
        </h1>
        <Stack direction="row">
          <Button
            label="Get Started"
            background="primary"
            type="button"
            size="large"
            icon={<ButtonArrow color="#FFF" />}
          />
          <Button
            to="#"
            label="See More Examples"
            size="large"
            background="inherit"
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
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  paper: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
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
    "& h1": {
      fontSize: "48px",
      fontWeight: 600,
      letterSpacing: "-0.04em",
    },
  },
}));

const CustomTab = styled(Tab)({
  "&.MuiTab-root": {
    textTransform: "none",
    fontWeight: 400,
    fontSize: "18px",
  },
  "&.Mui-selected": {
    backgroundColor: "#E9EBED",
    color: "#3E4245",
    borderBottom: "none",
  },
});

const CustomTabs = styled(Tabs)({
  "&.MuiTabs-root": {
    height: "54px",
    borderTop: "2px solid #E9EBED",
    borderBottom: "2px solid #E9EBED",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
});
