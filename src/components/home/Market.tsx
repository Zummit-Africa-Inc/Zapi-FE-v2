import { Box, Stack, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Button } from "..";
import { ButtonArrow } from "../../assets/icons";
import { marketIllustration } from "../../assets/svg";

const marketSteps = [
  {
    title: "Prepare your Documentation",
    subText: "Make sure you use a standard format",
  },
  {
    title: "Submit your API",
    subText: "You can reach hundreds of thousands of developers through us.",
  },
  {
    title: "Earn Money",
    subText:
      "Your API will be reviewed by our team, and if it is a good fit: sit back and relax!",
  },
];

const Market: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Stack className={classes.left}>
        <h1>Market your API</h1>
        <p>
          Zapi is an API marketplace where your API can reach broader audiences.
          We handle customer acquisition, memberships, key management, rate
          limits and payment collection processes so you can focus on building
          fantastic APIs.
        </p>
        <Button
          type="button"
          label="List Your API"
          background="secondary"
          size="large"
          icon={<ButtonArrow color="#000" />}
        />
      </Stack>
      <Stack className={classes.right}>
        <h1>List your API in just three steps</h1>
        <Stack className={classes.steps}>
          {marketSteps.map((step, i) => (
            <React.Fragment key={i}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={2.4}>
                <div style={{ width: "48px", height: "48px" }}>
                  <Stack className={classes.step}>{i + 1}</Stack>
                </div>
                <Stack>
                  <h5>{step.title}</h5>
                  <p>{step.subText}</p>
                </Stack>
              </Stack>
              <Stack className={classes.border}></Stack>
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Market;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "507px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#081F4A",
    padding: "4rem 6.7rem",
    gap: "159px",
    backgroundImage: `url(${marketIllustration})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
    [theme.breakpoints.down("laptop")]: {
      height: "fit-content",
      padding: "4rem 2rem",
      alignItems: "start",
      gap: "64px",
    },
    [theme.breakpoints.down("mobile")]: {
      gap: "2rem",
      flexDirection: "column",
      height: "auto",
      padding: "2.5rem 1rem",
      backgroundPositionX: "none",
      backgroundPositionY: "bottom",
    },
  },
  left: {
    width: "513px",
    [theme.breakpoints.down("tablet")]: {
      width: "353px",
    },
    [theme.breakpoints.down("mobile")]: {
      width: "auto",
    },
    "& h1": {
      fontWeight: 600,
      fontSize: "48px",
      color: "#FFFFFF",
      letterSpacing: "-0.04em",
      paddingBottom: "1rem",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "34px",
      },
      // [theme.breakpoints.down("mobile")]: {
      //   fontSize: "34px",
      // },
    },
    "& p": {
      fontWeight: 400,
      fontSize: "20px",
      color: "#F5F5F5",
      lineHeight: "28px",
      paddingBottom: "40px",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "18px",
      },
      // [theme.breakpoints.down("mobile")]: {
      //   fontSize: "18px",
      // },
    },
  },
  right: {
    "& h1": {
      fontSize: "33px",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      paddingBottom: "3rem",
      color: "#FFFFFF",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "28px",
        fontWeight: 700,
      },
      // [theme.breakpoints.down("mobile")]: {
      //   fontSize: "28px",
      //   fontWeight: 700,
      // },
    },
  },
  steps: {
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    "& h5": {
      fontSize: "20px",
      fontWeight: 400,
      color: "#FFFFFF",
      lineHeight: "28px",
    },
    "& p": {
      fontSize: "14px",
      fontWeight: 400,
      color: "#F5F5F5",
      lineHeight: "14px",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "12px",
      },
    },
  },
  step: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    borderRadius: "200px",
    background: "#CFDEFA",
    fontSize: "18px",
    fontWeight: 600,
    color: "#081F4A",
  },
  border: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-5px",
    width: "64px",
    borderBottom: "2px solid #BEC2C8",
    transform: "rotate(90deg)",
    "&:last-child": {
      display: "none",
    },
  },
}));
