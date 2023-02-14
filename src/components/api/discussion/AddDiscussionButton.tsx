import { Typography, Theme, Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { makeStyles } from "@mui/styles";
import DiscussionTextField from "./DiscussionTextField";

const AddDiscussionButton: React.FC = () => {
  const classes = useStyles();
  const [showTextField, setShowTextField] = useState(false);

  return (
    <>
      <Box component="form" className={classes.add_discussion_button}>
        <Box
          sx={{
            background: "unset",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "2px",
            margin: "2px 20px 2px 3px",
            fontSize: "16px",
            fontFamily: "Lato",
            color: "#929AA3",
          }}>
          <IconButton
            type="button"
            aria-label="search"
            onClick={() => setShowTextField(!showTextField)}>
            <RiAddFill style={{ color: "#929AA3", width: "20px" }} />
          </IconButton>
          <Typography>Add Discussion</Typography>
        </Box>
      </Box>
      {showTextField && <DiscussionTextField />}
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  add_discussion_button: {
    boxShadow: "unset",
    display: "flex",
    width: "20%",
    marginTop: "2.5rem",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.grey[500],
    border: `1px solid ${theme.shadows[1]}`,
    borderRadius: "4px",
    "@media screen and (max-width: 978px)": {
      marginBottom: "50px",
      width: "25%",
    },
    "@media screen and (max-width: 428px)": {
      marginBottom: "64px",
      width: "50%",
    },
    "@media screen and (max-width: 360px)": {
      marginBottom: "64px",
      width: "55%",
    },
  },
}));

export default AddDiscussionButton;
