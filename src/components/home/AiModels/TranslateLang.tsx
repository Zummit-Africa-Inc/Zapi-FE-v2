import { Box, Stack, Tabs, Tab, Theme } from "@mui/material";
import { Button, Paper, TabPanel } from "../..";
import { ButtonArrow } from "../../../assets/icons";
import React, { useState } from "react";
import { makeStyles, styled } from "@mui/styles";

const TranslateLang: React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  return (
    <Box className={classes.container}>
      <Stack className={classes.content}>
        <h1>
          Translate natural <br /> language to code.
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
      <Stack className={classes.left} style={{ width: "669px" }}>
        <Stack>
          <CustomTabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
            <CustomTab label="Text to SQL Translation" />
            <CustomTab label="Calling an API via Language" />
            <CustomTab label="Code Continuation" />
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
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  paper: {
    background: "#1E1E1E",
    display: "flex",
    flexDirection: "column",
    gap: "64px",
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
