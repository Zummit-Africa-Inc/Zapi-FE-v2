import React from "react";
import { makeStyles } from "@mui/styles";
import { FiArrowRight } from "react-icons/fi";
import { Box, Stack, Theme, Typography, Tab, Tabs } from "@mui/material";

import { Button } from "../";
import {
  heroBig,
  heroIllustration,
  heroMedium,
  heroSmall,
  clouds
} from "../../assets/svg";

const Hero: React.FC = () => {
  const classes = useStyles();

  return (
    <Stack direction="column" className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography component="h1">ZAPI Documentation</Typography>
          <Typography component="p">Welcome to the ZAPI docs. You'll find comprehensive guides and documentation to help you start working with ZAPI as quickly as possible, as well as support if you get stuck.</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    // height: "693px",
    background: theme.palette.primary.main,
    backgroundImage: `url(${clouds})`,
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    padding: "24px 3em",
    [theme.breakpoints.down("laptop")]: {
      height: "475px",
      padding: "24px 32px",
      backgroundImage: `url(${clouds})`,
    },
    [theme.breakpoints.down("tablet")]: {
      height: "fit-content",
      padding: "24px 16px",
      backgroundImage: `url(${clouds})`,
    },
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "80px",
    [theme.breakpoints.down("laptop")]: {
      marginTop: "54px",
    },
    [theme.breakpoints.down("tablet")]: {
      marginTop: "64px",
    },
  },
  heroText: {
    width: "656px",
    maxWidth: "",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("laptop")]: {
      width: "100%",
      alignItems: "center",
      textAlign: "center",
    },
    "& h1": {
      fontWeight: 600,
      fontSize: "72px",
      lineHeight: "80px",
      letterSpacing: "-0.04em",
      color: "#FFF",
      marginBottom: "24px",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "48px",
        lineHeight: "56px",
      },
    },
    "& p": {
      fontWeight: 400,
      fontSize: "28px",
      lineHeight: "28px",
      color: "var(--grey-100)",
      marginBottom: "40px",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "18px",
        lineHeight: "22px",
      },
    },
  },
  heroImage: {
    width: "432.64px",
    display: "block",
    [theme.breakpoints.down("laptop")]: {
      display: "none",
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 1rem 6rem 1rem",
    // backgroundColor: "#d1d1d1",
    // backgroundImage: `url(${clouds})`,
    width: "100%",
    opacity: .98,
    "& h1": {
      fontSize: "42px",
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff",
      lineHeight: "60px",

      "@media screen and (max-width: 1024px)": {
        fontSize: "36px",
        lineHeight: "50px",

      },
      "@media screen and (max-width: 375px)": {

      },
    },
    "& p": {
      textAlign: "center",
      fontSize: "18px",
      color: "#fff",
      lineHeight: "20px",
      width: "55%",

      "@media screen and (max-width: 1024px)": {
        fontSize: "12px",

      },
      "@media screen and (max-width: 375px)": {

      },
    },

    "@media screen and (max-width: 1024px)": {
      padding: "150px 1rem 70px 1rem",

    },
    "@media screen and (max-width: 375px)": {

    },
  }
}));

export default Hero;
