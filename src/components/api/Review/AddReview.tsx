import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { useAppContext } from "../../../contexts/AppProvider";
import ReviewTextField from "./ReviewTextField";
import Cookies from "universal-cookie";


interface Props {
  api: any;
}

const AddReview: React.FC<Props> = ({ api }) => {
const classes = useStyles();
const [showForm, setShowForm] = useState(false); 
const cookies = new Cookies();
const accessToken = cookies.get("accessToken");
const { handleClicked, currentMode } = useAppContext();


  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          marginRight: "0.5rem",
        }}>
        <Button  
         onClick={
           accessToken ? () => setShowForm(!showForm) : () => handleClicked("login")
         }
          variant="outlined"
          sx={{
            background: currentMode === "dark" ? "#121212" : "#FFFFFF",
            color: "#BEC2C8",
            width: "200px",
            height: "2.5rem",
            borderColor: "#BEC2C8",
          }}
          className={classes.newDiscussion}>
          <Add /> <Typography sx={{ fontSize: "14px" }}>Add Review</Typography>
        </Button>
      </Box>
      {showForm && (<ReviewTextField apiId={api.id} onClose={() => setShowForm(false)}/>) }
    </>
  );
};

export default AddReview;

const useStyles = makeStyles((theme: Theme) => ({
  newDiscussion: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 16px",
    gap: "16px",
    width: "170px",
    lineHeight: "46px",
    // borderColor: "#071B85",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#FFFFFF",
    border: " solid #071B85",
    fontWeight: "500",
    fontSize: "16px",
    "@media screen and (max-width: 1024px)": {
      marginBottom: "1rem",
      width: "385px",
    },
    "@media screen and (max-width: 500px)": {},
  },
}));
