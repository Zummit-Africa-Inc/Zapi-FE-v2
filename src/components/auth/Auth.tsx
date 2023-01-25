import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs, Theme } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { FiX } from "react-icons/fi";

import { useAppContext } from "../../contexts/AppProvider";
import { Backdrop, TabPanel } from "../";
import Signin from "./Signin";
import Signup from "./Signup";

const CustomTabs = styled(Tabs)({
  "&.MuiTabs-root": {},
  "& .MuiTabs-indicator": {
    maxWidth: "34px",
    height: "2px",
    background: "primary.main",
  },
});

const CustomTab = styled(Tab)({
  "&.MuiTab-root": {
    color: "#A8AEB5",
    fontWeight: 600,
    fontSize: "19px",
    lineHeight: "23px",
    textTransform: "capitalize",
    "@media screen and (max-width: 1260px)": {
      fontSize: "14px",
      lineHeight: "20px",
    }
  },
  "&.Mui-selected": {
    color: "#060607",
  },
});

const Auth = () => {
  const { handleUnclicked, currentMode } = useAppContext();
  const [tab, setTab] = useState<number>(0);
  const classes = useStyles();

  const handleTabSwitch = (e: SyntheticEvent, value: number) => setTab(value);

  return (
    <Backdrop
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
      onClose={() => handleUnclicked("login")}>
      <Box
        className={classes.container}
        sx={{ background: currentMode === "dark" ? "#1E1E1E" : "#FFF" }}
        onClick={(e) => e.stopPropagation()}>
        <Box className={classes.close}>
          <FiX
            style={{
              color: currentMode === "dark" ? "#F5F5F5" : "#060607",
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={() => handleUnclicked("login")}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <CustomTabs value={tab} onChange={handleTabSwitch}>
            <CustomTab
              label="Sign In"
              sx={{ color: currentMode === "dark" ? "#F5F5F5" : "#060607" }}
            />
            <CustomTab
              label="Sign Up"
              sx={{ color: currentMode === "dark" ? "#F5F5F5" : "#060607" }}
            />
          </CustomTabs>
        </Box>
        <Box>
          <TabPanel value={tab} index={0}>
            <Signin />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Signup />
          </TabPanel>
        </Box>
      </Box>
    </Backdrop>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "580px",
    maxWidth: "95%",
    height: "694px",
    display: "flex",
    flexDirection: "column",
    border: "2px solid #3E4245",
    borderRadius: "10px",
    boxShadow: "0 9px 18px rgba(0, 0, 0, 0.15)",
    padding: "40px 32px 0 32px",
    [theme.breakpoints.down("mobile")]: {
      height: "fit-content",
      padding: "20px 16px",
    },
  },
  close: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default Auth;
