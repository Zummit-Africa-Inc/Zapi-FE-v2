import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Theme,
  Box,
  IconButton,
  TextareaAutosize,
  Button,
  Stack,
} from "@mui/material";
import { Spinner } from "../../../components";
import { useAppContext } from "../../../contexts/AppProvider";
import { useHttpRequest } from "../../../hooks";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import Cookies from "universal-cookie";
import { DiscussionType } from "../../../types";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const url = import.meta.env.VITE_CORE_URL;
interface Props {
  onClose: () => void;
}

const DiscussionTextField: React.FC<Props> = ({ onClose }) => {
  const classes = useStyles();
  const cookies = new Cookies();
  const { currentMode } = useAppContext();
  const [body, setBody] = useState<string>("");
  const { loading, sendRequest } = useHttpRequest();
  const profileId = cookies.get("profileId");
  const [apiId, setApiId] = useState<any>("");
  const { id } = useParams();

  useEffect(() => {
    setApiId(id);
  }, [setApiId]);

  const mutation: UseMutationResult<
    DiscussionType,
    Error,
    DiscussionType,
    Error
  > = useMutation<DiscussionType, Error, DiscussionType, Error>(
    ["postDiscussion"],
    ({ body, apiId: api_id, profileId: profile_id }) =>
      fetch(`${url}/discussion`, {
        method: "POST",
        body: JSON.stringify({
          body,
          api_id,
          profile_id,
        }),
        headers: {
          "Content-Type": "application/json",
          "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: () => {
        toast.success("post Successful!");
        setBody("");
      },
    }
  );

  return (
    <>
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
        <Button
          variant={"outlined"}
          className={classes.btnClose}
          type="button"
          onClick={() => onClose()}
          style={{
            background: currentMode === "dark" ? "#121212" : "#FFFFFF",
          }}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            mutation.mutate({ body, apiId, profileId });
          }}
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
          {mutation.isLoading ? <Spinner /> : "Submit"}
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: "100%",
    marginTop: "-10px",
    "@media screen and (max-width: 870px)": {
      marginTop: "-40px",
      width: "100%",
    },
  },
  btnClose: {
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
  },
}));

export default DiscussionTextField;
