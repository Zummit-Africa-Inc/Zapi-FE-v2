import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Stack, Theme, Box, Tooltip, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { BookmarkAddedOutlined, BookmarkRemove, BookmarkAddOutlined, StarBorderOutlined, AlarmOutlined, GroupOutlined } from "@mui/icons-material";


const Endpoints: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
    	

    </Box>			
  );
};

export default Endpoints;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: "15px",
    padding: "86px 108px 24px 108px",
    lineHeight: "41px",
    width: '100%',
    "& h2": {
        marginBottom: 16,
        fontWeight: "bold",
        fontSize: "28px",
        color: "#060607",
    },
    "& h3": {
        marginBottom: 16,
        fontWeight: 700,
        fontSize: "19px",
        color: "#060607",
    },
    "& p": {
        marginBottom: 32,
        fontWeight: 400,
        fontSize: "16px",
        color: "#3E4245",
    },

    "@media screen and (max-width: 900px)": {
		padding: "44px 32px 24px 32px",
	     
	    "& h2": {
	        fontSize: "23px",
	    },
	    "& h3": {
	        fontSize: "14px",
	    },
	    "& p": {
	        fontSize: "14px",
	    },
    },

    "@media screen and (max-width: 428px)": {
		padding: "20px 16px 24px 16px",fontSize: "14px",
	},
    
  },
}));
