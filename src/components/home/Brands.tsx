import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Theme } from "@mui/material";

import { facebook, figma, google, ibm, microsoft } from "../../assets/svg";

const Brands: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h1 className={classes.title}>Trusted and supported by</h1>
      <Box className={classes.brands}>
        {BRANDS.map((_, index) => (
          <img key={index} src={_.image} alt={_.name} />
        ))}
      </Box>
    </Box>
  );
};

const BRANDS = [
  { image: facebook, name: "facebook" },
  { image: microsoft, name: "microsoft" },
  { image: ibm, name: "ibm" },
  { image: google, name: "google" },
  { image: figma, name: "figma" },
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: theme.palette.grey[200],
  },
  title: {
    fontWeight: 0,
    fontSize: "",
    color: theme.palette.primary.contrastText,
    margin: "70px 0 64px",
    textAlign: "center",
  },
  brands: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "0 0 64px",
    "& img": {
      display: "block",
      [theme.breakpoints.down("tablet")]: {
        width: "8%",
        height: "auto",
        objectFit: "contain",
        aspectRatio: "16 / 9",
      },
    },
  },
}));

export default Brands;
