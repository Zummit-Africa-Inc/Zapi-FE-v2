import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Stack, Theme, Box, Card, CardContent, IconButton } from "@mui/material";
import { pricingBullet1, pricingBullet2 } from "../../assets/svg";

const Pricing: React.FC = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <Box>
      <Typography
        component={"span"}
        variant={"body2"}
        className={classes.pricing}>
        <h1>Flexible plans to get you started.</h1>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 2,
          mt: 5,
          '@media screen and (max-width: 800px)': {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          },
        }}

      >
        <Box sx={{ width: '40%' }}>
          <Card sx={{ display: 'flex', p: 2, width: '100%', justifyContent: "space-between", boxShadow: "none" }}>
            <Box sx={{ display: 'flex', justifyContent: "space-between", width: '100%', }}>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <img src={pricingBullet1} alt="" width="32px" height="32px" />
                </IconButton>
              </Box>
              <CardContent sx={{ flex: '1 0 auto', pl: 5 }}>
                <Typography component="div" variant="h5">
                  Free
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "14px",
                      fontWeight: "400",
                    },
                  }}>
                  500 Requests
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Typography
                  variant="h1"
                  sx={{
                    pr: 1,
                    fontWeight: 700,
                    fontSize: "36px",
                    lineHeight: "46px",
                    color: "#071B85",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "20px",
                      fontWeight: "600",
                    },
                  }}>
                  $0
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: "column", width: "40%", gap: 2 }}>
          <Card sx={{ display: 'flex', p: 2, width: '100%', justifyContent: "space-between", boxShadow: "none" }}>
            <Box sx={{ display: 'flex', justifyContent: "space-between", width: '100%', }}>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <img
                    className={classes.bullets}
                    src={pricingBullet2}
                    alt=""
                    width="32px"
                    height="32px"
                  />
                </IconButton>
              </Box>
              <CardContent sx={{ flex: '1 0 auto', pl: 5 }}>
                <Typography component="div" variant="h5">
                  Basic
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "14px",
                      fontWeight: "400",
                    },
                  }}>
                  10,000 Requests
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Typography
                  variant="h1"
                  sx={{
                    pr: 1,
                    fontWeight: 700,
                    fontSize: "36px",
                    lineHeight: "46px",
                    color: "#071B85",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "20px",
                      fontWeight: "600",
                    },
                  }}>
                  $10
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#5A5F65",
                    alignSelf: "center",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "14px",
                      fontWeight: "400",
                    },
                  }}>
                  &nbsp; /month
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', p: 2, width: '100%', justifyContent: "space-between", boxShadow: "none" }}>
            <Box sx={{ display: 'flex', justifyContent: "space-between", width: '100%', }}>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <img
                    className={classes.bullets}
                    src={pricingBullet2}
                    alt=""
                    width="32px"
                    height="32px"
                  />
                </IconButton>
              </Box>
              <CardContent sx={{ flex: '1 0 auto', pl: 5 }}>
                <Typography component="div" variant="h5">
                  Premium
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "14px",
                      fontWeight: "400",
                    },
                  }}>
                  20,000 Requests
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Typography
                  variant="h1"
                  sx={{
                    pr: 1,
                    fontWeight: 700,
                    fontSize: "36px",
                    lineHeight: "46px",
                    color: "#071B85",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "20px",
                      fontWeight: "600",
                    },
                  }}>
                  $20
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#5A5F65",
                    alignSelf: "center",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "14px",
                      fontWeight: "400",
                    },
                  }}>
                  &nbsp; /month
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card sx={{ display: 'flex', p: 2, width: '100%', justifyContent: "space-between", boxShadow: "none" }}>
            <Box sx={{ display: 'flex', justifyContent: "space-between", width: '100%', }}>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <img
                    className={classes.bullets}
                    src={pricingBullet2}
                    alt=""
                    width="32px"
                    height="32px"
                  />
                </IconButton>
              </Box>
              <CardContent sx={{ flex: '1 0 auto', pl: 5 }}>
                <Typography component="div" variant="h5">
                  Mega
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "14px",
                      fontWeight: "400",
                    },
                  }}>
                  100,000 Requests
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Typography
                  variant="h1"
                  sx={{
                    pr: 1,
                    fontWeight: 700,
                    fontSize: "36px",
                    lineHeight: "46px",
                    color: "#071B85",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "20px",
                      fontWeight: "600",
                    },
                  }}>
                  $50
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#5A5F65",
                    alignSelf: "center",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "14px",
                      fontWeight: "400",
                    },
                  }}>
                  &nbsp; /month
                </Typography>
              </Box>
            </Box>
          </Card>
          <Card sx={{ display: 'flex', p: 2, width: '100%', justifyContent: "space-between", boxShadow: "none" }}>
            <Box sx={{ display: 'flex', justifyContent: "space-between", width: '100%', }}>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <img
                    className={classes.bullets}
                    src={pricingBullet2}
                    alt=""
                    width="32px"
                    height="32px"
                  />
                </IconButton>
              </Box>
              <CardContent sx={{ flex: '1 0 auto', pl: 5 }}>
                <Typography component="div" variant="h5">
                  Enterprise
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "14px",
                      fontWeight: "400",
                    },
                  }}>
                  500,000 Requests
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Typography
                  variant="h1"
                  sx={{
                    pr: 1,
                    fontWeight: 700,
                    fontSize: "36px",
                    lineHeight: "46px",
                    color: "#071B85",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "20px",
                      fontWeight: "600",
                    },
                  }}>
                  $100
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#5A5F65",
                    alignSelf: "center",
                    "@media screen and (max-width: 800px)": {
                      fontSize: "14px",
                      fontWeight: "400",
                    },
                  }}>
                  &nbsp; /month
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box >
  );
};

export default Pricing;

const useStyles = makeStyles((theme: Theme) => ({
  pricing: {
    textAlign: "center",
    alignItem: "center",
    color: "#071B85",
    fontWeight: 700,
    fontSize: "39px",
    paddingTop: "64px",
    "& h1": {
      fontWeight: 700,
      fontSize: "39px",
      marginTop: "64px",
      color: theme.palette.grey[100],
      [theme.breakpoints.down("tablet")]: {
        fontSize: "34px",
      },
    },
  },
  bullets: {
    marginRight: "62px",
    [theme.breakpoints.down("tablet")]: {
      marginRight: "0px",
      width: "24px",
      height: "24px",
    },
  },
  wrapper: {
    padding: "32px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    width: "calc(50% - 30px)",
    backgroundColor: "#CFDEFA",
    color: "#5A5F65",
    margin: "0 15px 30px",
    padding: "20px",
    borderRadius: "4px",
    boxSizing: "border-box",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
      margin: "0 3px 30px",
      fontSize: "23px",
    },
  },
  subColomn: {
    justifyContent: "space-around",
    marginLeft: "auto",
    width: "calc(50% - 30px)",
    background: "#E9EBED",
    color: "#5A5F65",
    margin: "0 15px 30px",
    padding: "20px",
    borderRadius: "4px",
    boxSizing: "border-box",
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },
  },
  col: {
    marginLeft: "auto !important",
    width: "calc(50% - 30px)",
    backgroundColor: "#E9EBED",
    color: "#5A5F65",
    margin: "0 15px 30px",
    padding: "20px",
    border: "1px solid #1331CA",
    borderRadius: "4px",
    boxSizing: "border-box",
    "@media screen and (max-width: 800px)": {
      width: "100%",
      margin: "0 3px 30px",
      fontSize: "23px",
    },
  },
  columns: {
    display: "flex",
    flexWrap: "wrap",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "1.5rem",
    textAlign: "center",
    position: "relative",
  },
  discount: {
    borderRadius: "4px",
    backgroundColor: "#AFF0B6",
    height: "26px",
    width: "81px",
    top: "-30px",
    left: "0",
    position: "absolute",
    padding: "2px 4px",
    border: "1px solid #0A9A18",
  },
}));
