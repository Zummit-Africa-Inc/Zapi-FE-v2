import React from "react";
import { styled, makeStyles } from "@mui/styles";
import { Typography, Box, Theme } from "@mui/material";

const UserReview = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
            
        <Box
            component="span"
        />

        <Box sx={{ width: "100%" }}>
            <Typography component="p" sx={{ marginBottom: "8px" }}>User</Typography>
            <Typography component="p">
                s vitae erat diam arcu molestie mattis vestibulum lorem. Nulla dictum id aenean molestie aliquam volutpat enim tortor.
                Metus pretium magnis diam sit arcu nisl. Eget at a dolor ultricies et sit ut. Hendrerit viverra tincidunt ut ultricies nec enim aenean. Amet senectus pellentesque gravida iaculis urna diam orci. Fringilla sed auctor elementum mus non volutpat nullam. Purus aliquam sit tincidunt sit eu massa mauris nullam.
            </Typography>

        </Box>

    </Box>			
  );
};

export default UserReview;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "24px",
    marginBottom: "12px",
    borderBottom: "1px solid #d1d1d1",
    padding: "0 0 21px 25px",
    width: "100%",
    
    "& span": {
        backgroundColor: "#d1d1d1",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
    },
    
    "& p": {
        fontWeight: "normal",
        fontSize: "16px",
        color: "#3E4245",
    },

    
  },
}));
