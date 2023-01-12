import { Box, Stack, Theme } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "..";
import { ButtonArrow } from "../../assets/icons";
import { NavLink } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";


const GettingStarted: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Stack pb={4} className={classes.heading}>
        <h1>Get started with ZAPI’s powerful AI API models to scale your business and project </h1>
      </Stack>
      <div style={{ paddingTop: "4rem", color: "#FFF" }}>
        <NavLink to="/api-hub">
            <Button
            label="Get Started"
            variant="primary"
            type="button"
            size="large"
            icon={<ButtonArrow color="#FFF" />}
            />
        </NavLink>
      </div>
    </Box>
  );
};

export default GettingStarted;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "4rem 6.7rem",
    marginBottom: "67px",
    background: '#E9EBED',
    [theme.breakpoints.down("tablet")]: {
      padding: "2.5rem 1rem",
    },
  },
  heading: {
    "& h1": {
      fontSize: "39px",
      fontWeight: 600,
      color: theme.palette.grey[100],
      letterSpacing: "-0.04em",
      paddingBottom: "1rem",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "34px",
      },
    },
    "& p": {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: theme.palette.grey[400],
      [theme.breakpoints.down("tablet")]: {
        fontSize: "18px",
      },
    },
  },
}));
