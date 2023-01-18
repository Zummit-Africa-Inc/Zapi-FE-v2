import React from "react";
import { styled, makeStyles } from "@mui/styles";
import { Typography, Theme, Box } from "@mui/material";

import { UserReview } from "../../components";

const Reviews = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <Typography component="h2">Reviews</Typography>
		
        <UserReview />

    </Box>			
  );
};

export default Reviews;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: "15px",
    padding: "0 120px 80px 120px",
    lineHeight: "41px",
    width: '100%',
    "& h2": {
        margin: "63px 0",
        fontWeight: "bold",
        fontSize: "19px",
        color: "#060607",
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
}));
