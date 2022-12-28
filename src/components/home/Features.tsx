import { Box, Stack, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import {
  chevron,
  dollars,
  pencil,
  secure,
  stacks,
  zoom,
} from "../../assets/svg";

const features = [
  {
    icons: secure,
    title: "Secure",
    text: "All data processed are secure via two-factor authentication of API checkouts, fraud detection, and threat protection.",
  },
  {
    icons: stacks,
    title: "Easy Integration",
    text: "Connect to Rest, GraphQL or Asynchronous APIs using any type of client, from mobile application to IoT and embedded devices.",
  },
  {
    icons: dollars,
    title: "Monietization",
    text: "All data processed are secure via two-factor authentication of API checkouts, fraud detection, and threat protection.",
  },
  {
    icons: pencil,
    title: "Documentation",
    text: "All data processed are secure via two-factor authentication of API checkouts, fraud detection, and threat protection.",
  },
  {
    icons: zoom,
    title: "Scalable",
    text: "All data processed are secure via two-factor authentication of API checkouts, fraud detection, and threat protection.",
  },
  {
    icons: chevron,
    title: "Flexible",
    text: "All data processed are secure via two-factor authentication of API checkouts, fraud detection, and threat protection.",
  },
];

const Features: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <h1>Robust set of features to power your business and project.</h1>
      <Box className={classes.features}>
        {features.map((feat, i) => (
          <Stack
            key={i}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <img
                style={{ width: "24px", height: "24px" }}
                src={feat.icons}
                alt={feat.title}
              />
              <h5>{feat.title}</h5>
            </Stack>
            <p>{feat.text}</p>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default Features;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "0 6.7rem",
    background: theme.palette.background.default,
    [theme.breakpoints.down("tablet")]: {
      padding: "2.5rem 1rem",
    },
    "& h1": {
      fontWeight: 700,
      fontSize: "39px",
      color: theme.palette.grey[100],
      letterSpacing: "-0.04em",
      paddingBottom: "4rem",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "34px",
      },
    },
  },
  features: {
    display: "grid",
    gridTemplateColumns: "365px 365px 365px",
    gap: "64px 80px",
    paddingBottom: "4rem",
    [theme.breakpoints.down("laptop")]: {
      gridTemplateColumns: "369px 369px",
      gap: "32px",
    },
    [theme.breakpoints.down("mobile")]: {
      gridTemplateColumns: "182.5px 182.5px",
      gap: "32px",
    },
    "& h5": {
      fontWeight: 600,
      fontSize: "23px",
      color: theme.palette.grey[100],
      [theme.breakpoints.down("tablet")]: {
        fontSize: "19px",
      },
    },
    "& p": {
      fontWeight: 400,
      fontSize: "18px",
      textAlign: "left",
      color: theme.palette.grey[700],
      [theme.breakpoints.down("tablet")]: {
        fontSize: "16px",
      },
    },
  },
}));
