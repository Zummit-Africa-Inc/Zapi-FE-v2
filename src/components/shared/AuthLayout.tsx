import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AuthNavbar } from "..";
import {
  LooperGroup,
  LooperGroupMobile,
  LooperGroupTab,
  shine,
  shineTab,
  shineMobile,
} from "../../assets/svg";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <AuthNavbar />
        <div className={classes.children}>{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: theme.palette.primary.main,
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${LooperGroup}), url(${shine})`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "left bottom, right top",
    backgroundSize: "auto 700px, auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("tablet")]: {
      backgroundImage: `url(${LooperGroupTab}), url(${shineTab})`,
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: "center top, right top",
      backgroundSize: "auto, auto",
    },
    [theme.breakpoints.down("mobile")]: {
      backgroundImage: `url(${LooperGroupMobile}), url(${shineMobile})`,
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: "right bottom, right top",
      backgroundSize: "auto 700px, auto",
    },
  },
  children: {
    width: "100%",
    height: "100%",
    padding: "0 380px",
    [theme.breakpoints.down("laptop")]: {
      padding: "0 77px",
    },
    [theme.breakpoints.down("mobile")]: {
      padding: "0 16px",
    },
  },
}));
