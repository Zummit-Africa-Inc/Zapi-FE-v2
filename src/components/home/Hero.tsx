import React from "react";
import { makeStyles } from "@mui/styles";
import { FiArrowRight } from "react-icons/fi";
import { Box, Stack, Theme, Typography } from "@mui/material";

import { Button } from "../";
import { useAppContext } from "../../contexts/AppProvider";
import {
  heroBig,
  heroIllustration,
  heroMedium,
  heroSmall,
} from "../../assets/svg";

const Hero: React.FC = () => {
  const { currentMode } = useAppContext();
  const classes = useStyles();

  return (
    <Stack direction="column" className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.heroText}>
          <Typography variant="h1">
            We provide AI models that literally changes your life
          </Typography>
          <Typography>
            Z-API allows you to harness the power of AI on your applications
            without stress. Use powerful AI APIs developed by machine learning
            engineers all over the world
          </Typography>
          <Button
            label="Get Started"
            size="large"
            //variant="secondary"
            variant={currentMode === "dark" ? "secondaryDark" : "secondary"}
            to="/documentation"
            icon={<FiArrowRight />}
          />
        </Box>
        <Box className={classes.heroImage}>
          <img src={heroIllustration} alt="" width="100%" height="100%" />
        </Box>
      </Box>
    </Stack>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "693px",
    background: "#081F4A",
    backgroundImage: `url(${heroBig})`,
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    padding: "24px 3em",
    [theme.breakpoints.down("laptop")]: {
      height: "475px",
      padding: "24px 32px",
      backgroundImage: `url(${heroMedium})`,
    },
    [theme.breakpoints.down("tablet")]: {
      height: "fit-content",
      padding: "24px 16px",
      backgroundImage: `url(${heroSmall})`,
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
}));

export default Hero;
