import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { makeStyles, styled } from "@mui/styles";
import { Box, Stack, Tabs, Tab, Theme } from "@mui/material";

import { Button, Paper, TabPanel } from "../..";
import { useAppContext } from "../../../contexts/AppProvider";

const TabLabel = [
  {
    label: "Text to SQL Translation",
  },
  {
    label: "Calling an API via Language",
  },
  {
    label: "Code Continuation",
  },
];

const TranslateLang: React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  const { currentMode } = useAppContext();
  return (
    <Box className={classes.container}>
      <Stack className={classes.content}>
        <h1>
          Translate natural <br /> language to code.
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
            label="Try it Out"
            size="medium"
            variant={currentMode === "dark" ? "tertiary" : "text"}
          />
        </Stack>
      </Stack>
      <Stack className={classes.left}>
        <Stack>
          <CustomTabs
            value={tab}
            variant="scrollable"
            scrollButtons="auto"
            onChange={(e, newValue) => setTab(newValue)}>
            {TabLabel.map((label, i) => (
              <Tab
                key={i}
                className={
                  currentMode === "dark"
                    ? classes.darkCustomTab
                    : classes.customTab
                }
                label={label.label}
              />
            ))}
          </CustomTabs>
        </Stack>
        <Stack>
          <TabPanel value={tab} index={0}>
            <Paper className={classes.paper}>
              <p>
                """ <br />
                Table customers, columns = [CustomerId, FirstName, LastName,
                Company, Address, City, State, Country, PostalCode, Phone, Fax,
                Email, SupportRepId, TotalSpend]
                <br />
                <br />
                Create a MySQL query for all customers in Texas who have spent
                over five thousand dollars. <br />
                """
              </p>
              <div>
                query ={" "}
                <span>
                  "SELECT * FROM customers WHERE State = 'TX' AND TotalSpend &gt
                  5000"
                </span>
              </div>
            </Paper>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            Calling an API via Language
          </TabPanel>
          <TabPanel value={tab} index={2}>
            Code Continuation
          </TabPanel>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TranslateLang;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "64px",
    padding: "4rem 6.7rem",
    background: theme.palette.background.default,
    [theme.breakpoints.down("laptop")]: {
      flexDirection: "column",
      padding: "4rem 1rem",
    },
  },
  left: {
    width: "669px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    [theme.breakpoints.down("laptop")]: {
      width: "100%",
    },
  },
  paper: {
    background: "#1E1E1E",
    display: "flex",
    flexDirection: "column",
    gap: "64px",
    padding: "40px",
    "& p": {
      fontFamily: "var(--code-font)",
      fontSize: "16px",
      fontWeight: 400,
      color: "#D3D7DA",
      lineHeight: "24px",
    },
    "& div": {
      color: "#D3D7DA",
    },
    "& span": {
      fontFamily: "var(--code-font)",
      fontSize: "16px",
      fontWeight: 300,
      color: "#009262",
      lineHeight: "24px",
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
        textAlign: "end",
        fontSize: "34px",
        "& br": {
          display: "none",
        },
      },
      [theme.breakpoints.down("mobile")]: {
        textAlign: "start",
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

// const CustomTab = styled(Tab)({
//   "&.MuiTab-root": {
//     textTransform: "none",
//     fontWeight: 400,
//     fontSize: "18px",
//   },
//   "&.Mui-selected": {
//     backgroundColor: "#E9EBED",
//     color: "#3E4245",
//     borderBottom: "none",
//   },
// });

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
