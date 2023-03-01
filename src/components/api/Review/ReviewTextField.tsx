import { useState, useEffect } from "react";
import { Box, Button, TextareaAutosize } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { useAppContext } from "../../../contexts/AppProvider";
import { useHttpRequest } from "../../../hooks";
import { Spinner, InputField } from "../../../components";
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { DiscussionType } from "../../../types";

const url = import.meta.env.VITE_CORE_URL;

interface props {
  onClose: () => void;
}

const ReviewTextField: React.FC<props> = ({ onClose }) => {
  const cookies = new Cookies();
  const profileId = cookies.get("profileId")
  const { id } = useParams()
  const { currentMode } = useAppContext();
  const classes = useStyles();
  const { loading, sendRequest } = useHttpRequest();
  const [body, setBody] = useState<string>("");
  const [apiId, setApiId] = useState<any>("");
 // const [title, setTitle ] = useState<string>("");

  
  useEffect(() => {
    setApiId(id)
  }, [setApiId])

  const mutation: UseMutationResult<DiscussionType, Error, DiscussionType, Error> 
  = useMutation<DiscussionType, Error, DiscussionType, Error>(({ body, apiId: api_id, profileId: profile_id }) =>
  fetch(`${url}/review/${apiId}/${profileId}`, {
    method: "POST",
    body: JSON.stringify({
      body,
      api_id,
      profile_id
    }),
    headers: {
      "Content-Type": "application/json",
      "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
    },
  }).then((res) => res.json()),
{
  onSuccess: (data) => {
    console.log("Post successfully created!", data)
    setBody("")
  }
}
)

  return (
    <Box className="textareaandbutton">
      <Box className={classes.form}>
        <TextareaAutosize
          aria-label="minimum height"
          maxRows={6}
          minRows={6}
          placeholder="Leave a Review"
          style={{
            width: "99%",
            height: "30%",
            marginTop: "5%",
            padding: "2%",
            fontSize: "1em",
            borderRadius: "10px",
            borderColor: "#BEC2C8",
            color: "BEC2C8",
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
        <Button
          variant={'outlined'}
          type="button"
          onClick={() => onClose()}
          className={classes.btnclose}
          sx={{
            background: currentMode === "dark" ? "#121212" : "#FFFFFF",
          }}>
          Cancel
        </Button>
        <Button
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
          onClick={() => {
            mutation.mutate({ body, apiId, profileId })
          }}
          type="submit">
          {loading ? <Spinner /> : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewTextField;

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: "100%",
    marginTop: "-10px",
    "@media screen and (max-width: 870px)": {
      marginTop: "-40px",
      width: "100%"
    },
  },
  btnclose: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "6px",
    padding: "12px 24px",
    gap: "16px",
    fontFamily: "inherit",
    height: "46px",
    cursor: "pointer",
    color: "#929AA3",
    border: "1px solid #929AA3",
    borderRadius: "4px",
    borderColor: "#BEC2C8",
  },
}));