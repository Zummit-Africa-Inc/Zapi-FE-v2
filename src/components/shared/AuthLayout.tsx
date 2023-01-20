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
  children: JSX.Element
};

const AuthLayout= ({children}:Props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AuthNavbar />
      {children}
    </div>
  );
};

export default AuthLayout;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: theme.palette.primary.main,
    width: "100vw",
    height: "fit-content",
    minHeight: "100vh",
    backgroundImage: `url(${LooperGroup}), url(${shine})`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "left bottom, right top",
    backgroundSize: "auto 700px, auto",
    display: "flex",
    flexDirection: "column",
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
      backgroundSize: "contain, auto",
      height: "fit-content",
    },
  },
}));
