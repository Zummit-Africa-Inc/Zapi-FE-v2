import React, { useEffect, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import { Typography, Theme, Box } from "@mui/material";
import AddReview from "./Review/AddReview";
import { APIType, ReviewType } from "../../types";
import UsersReview from "./Review/UsersReview";
import { useHttpRequest } from "../../hooks";
import Cookies from "universal-cookie";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../shared/Spinner";
interface Props {
  reviews: Array<ReviewType>;
  api: APIType;
}
const url = import.meta.env.VITE_CORE_URL;

const Reviews_dup: React.FC<Props> = ({ api, reviews }) => {
  const cookies = new Cookies();
  const classes = useStyles();
  const { error: lop, loading, sendRequest } = useHttpRequest();
  const headers = {
    "Content-Type": "application/json",
    "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
  };

  const fetchAPIReviews = async () => {
    try {
      const response = await fetch(`${url}/api/reviews/${api.id}`, { headers });
      const data = await response.json();
      return data.data;
    } catch (e) {
      console.log(e);
    }
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchAPIReviews,
  });

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.wrap}>
        <Typography component="h2">Reviews</Typography>
        <Box className={classes.textWrapper}>
          <AddReview api={api} />
        </Box>
      </Box>
      <UsersReview reviews={data} />
    </Box>
  );
};

export default Reviews_dup;

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
