import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Box, Theme } from "@mui/material";

import { zapi } from "../../assets/svg";

const AuthNavbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link to="/" className={classes.logo}>
        <img src={zapi} alt="zapi logo" />
        <p>Z-API</p>
      </Link>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "31px 108px",
    margin: "0 0 64px 0",
    zIndex: "10 !important",
    [theme.breakpoints.down("laptop")]: {
      padding: "31px 32px",
    },
    [theme.breakpoints.down("tablet")]: {
      padding: "31px 16px",
    },
  },
  logo: {
    width: "130px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    "& p": {
      fontWeight: 700,
      fontSize: "23px",
      lineHeight: "28px",
      color: "#FFF",
    },
  },
  icon: {
    width: "48px",
    height: "48px",
  },
}));

export default AuthNavbar;
