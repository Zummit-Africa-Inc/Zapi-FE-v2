import React, { SyntheticEvent, useState } from "react";
import { Box, Divider, Tab, Tabs, Theme, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { FiX, FiHeart } from "react-icons/fi";

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
    alignItems: "start",
    color: "#A8AEB5",
    fontWeight: 600,
    fontSize: "19px",
    lineHeight: "23px",
    textTransform: "capitalize",
    textAlign: "left",
    padding: "0",
    "@media screen and (max-width: 1260px)": {
      fontSize: "14px",
      lineHeight: "20px",
    }
  },
  "&.Mui-selected": {
    color: "primary.contrastText",
  },
});

const Auth = () => {
  const { handleUnclicked, currentMode } = useAppContext();
  const [tab, setTab] = useState<number>(0);
  const classes = useStyles();

  const handleTabSwitch = (e: SyntheticEvent, value: number) => setTab(value);

  return (
    <Backdrop
      className={classes.backdrop}
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
          <CustomTabs value={tab} onChange={handleTabSwitch} sx={{margin: "0 0 16px 0"}}>
            <CustomTab
              label="Log In"
              sx={{minWidth: "76px"}}
            />
            <CustomTab
              icon={<Divider orientation="vertical" sx={{
                borderColor: currentMode === "dark" ? "#FFF" : "#000",
                height: "32px",
                position: "relative",
                top: "12px"
              }}/>}
              sx={{minWidth: "1px",marginRight: "16px"}}
              disabled
            />
            <CustomTab
              label="Sign Up"
            />
          </CustomTabs>
        </Box>
        <Box>
          <TabPanel value={tab} index={0}>
            <Signin />
          </TabPanel>
          {/* DO NOT REMOVE THIS TABPANEL */}
          <TabPanel value={tab} index={1} children={<></>} />
          <TabPanel value={tab} index={2}>
            <Signup />
          </TabPanel>
        </Box>
        <Box mt="16px">
          {tab === 0 ? (
            <Typography className={classes.p} onClick={() => setTab(2)}>
              Don't have an account?
              <span>Sign Up</span>
            </Typography>
            ): (
            <Typography className={classes.p} onClick={() => setTab(0)}>
              Already have an account?
              <span>Sign In</span>
            </Typography>
          )}
        </Box>
      </Box>
    </Backdrop>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "580px",
    minHeight: "694px",
    display: "flex",
    flexDirection: "column",
    border: "2px solid #3E4245",
    borderRadius: "10px",
    boxShadow: "0 9px 18px rgba(0, 0, 0, 0.15)",
    padding: "40px 32px 32px 32px",
    [theme.breakpoints.down("tablet")]: {
      width: "446px",
      height: "679px",
    },
    [theme.breakpoints.down("mobile")]: {
      width: "100%",
      height: "fit-content",
      padding: "20px 16px",
    },
  },
  close: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  p: {
    color: theme.palette.primary.contrastText,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    "& span": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
      cursor: "pointer",
      margin: "0 0 0 8px",
    }
  },
  backdrop: {
    background: "rgba(0, 0, 0, 0.5)",
    height: "938px",
    top: "88px",
    [theme.breakpoints.down("mobile")]: {
      alignItems: "flex-start",
      top: 0,
    }
  }
}));

export default Auth;
