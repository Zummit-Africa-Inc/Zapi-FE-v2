import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography, 
  Theme, 
  Box,
  IconButton,
  TextareaAutosize,
  Stack,
} from "@mui/material";
import { Spinner } from "../../components";
import { RiAddFill } from "react-icons/ri";

import { useAppContext } from "../../contexts/AppProvider";
import { useHttpRequest } from "../../hooks";

const AddDiscussion: React.FC = () => {
  const classes = useStyles();
  const { currentMode } = useAppContext();
  const [body, setBody] = useState<string>("");
  const { loading, sendRequest } = useHttpRequest();


  return (
   <Box className={classes.root}>
        <Box
            sx={{
            display: "column",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            "@media screen and (max-width: 428px)": {
                flexDirection: "column",
            },
        }}>
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
            <IconButton type="button" aria-label="search">
              <RiAddFill style={{ color: "#929AA3", width: "20px" }} />
            </IconButton>
            <Typography>Add Discussion</Typography>
          </Box>
        </Box>

        <Box className={classes.form}>
          <TextareaAutosize
           aria-label="minimum height"
           maxRows={6}
           minRows={6}
           placeholder="Start a Discussion here.."
           style={{
             width: "99%",
             height: "30%",
             marginTop: "5%",
             padding: "2%",
             fontSize: "1em",
             borderRadius: "10px",
             borderColor: "#BEC2C8",
             color: "#BEC2C8",
             background: currentMode === "dark" ? "#121212" : "#FFFFFF",
            }}
            value={body}
            required
            onChange={(e) => setBody(e.target.value)}
          />
        </Box>
        <Box
          sx={{
            gap: "1rem",
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}>
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "6px",
              padding: "12px 24px",
              gap: "16px",
              fontFamily: "inherit",
              height: "46px",
              cursor: "pointer",
              background: currentMode === "dark" ? "#121212" : "#FFFFFF",
              color: "#929AA3",
              border: "1px solid #929AA3",
              borderRadius: "4px",
            }}>
            Cancel
          </button>
          <button
            style={{
              outline: "none",
              border: "none",
              display: "flex",
              marginRight: "6px",
              alignItems: "center",
              padding: "12px 24px",
              gap: "16px",
              height: "46px",
              fontFamily: "inherit",
              color: currentMode === "dark" ? "#060607" : "#F5F5F5",
              background: currentMode === "dark" ? "#FFEA00" : "#081F4A",
              borderRadius: "4px",
              textAlign: "center",
              cursor: "pointer",
            }}
            type="submit">
            {loading ? <Spinner /> : "Submit"}
          </button>
        </Box>
      </Box>
   </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "15px",
        padding: "0 108px",
        lineHeight: "41px",
        width: "100%",
        "& h2": {
          margin: "64px 0 32px 0",
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
        "@media screen and (max-width: 428px)": {
          marginBottom: "64px",
          width: "50%",
        },
      },
    
      form: {
        width: "100%",
        marginTop: "-10px",
        "@media screen and (max-width: 870px)": {
          marginTop: "-40px",
          width: "100%",
        },
      },
}));

export default AddDiscussion;
