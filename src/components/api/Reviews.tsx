import React, { useEffect, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import { Typography, Theme, Box } from "@mui/material";
import AddReview from "./Review/AddReview";
import { ReviewType } from "../../types";
import UsersReview from "./Review/UsersReview";
interface Props {
  reviews: Array<ReviewType>;
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrap}>
        <Typography component="h2">Reviews</Typography>
        <Box className={classes.textWrapper}>
          <AddReview />
        </Box>
      </Box>
      <UsersReview reviews={reviews} />
    </Box>
  );
};

export default Reviews;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    padding: "0 120px 80px 120px",
    lineHeight: "41px",
    width: "100%",
    "& h2": {
      margin: "64px 0 32px 0",
      fontWeight: "bold",
      fontSize: "19px",
      color: theme.palette.grey[100],
    },

    "@media screen and (max-width: 900px)": {
      padding: "44px 32px 24px 32px",

      "& h2": {
        fontSize: "23px",
      },
    },

    "@media screen and (max-width: 428px)": {
      padding: "20px 16px 24px 16px",
      fontSize: "14px",
    },
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "@media screen and (max-width: 428px)": {
      flexDirection: "column",
    },
  },
  textWrapper: {
    "@media screen and (max-width: 428px)": {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
    },
  },

  review_button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    border: `1px solid ${theme.shadows[9]}`,
    color: theme.shadows[9],
    borderRadius: "5px",
    fontSize: "12px !important",
    fontWeight: "bold !important",
    width: "150px !important",
    height: "2.4rem",

    "@media screen and (max-width: 900px)": {
      fontSize: "10px",
      width: "120px",
      height: "2.2rem",

      "& svg": {
        width: "17px",
      },
    },

    "@media screen and (max-width: 428px)": {
      fontSize: "10px",
      width: "120px",
      height: "2.2rem",

      "& svg": {
        width: "17px",
      },
    },
  },
}));
