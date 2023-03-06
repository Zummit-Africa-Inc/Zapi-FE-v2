import { useState, useEffect } from "react";
import { Box, Button, TextareaAutosize } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Cookies from "universal-cookie";
import { useAppContext } from "../../../contexts/AppProvider";
import { useHttpRequest } from "../../../hooks";
import { InputField, ButtonSpinner } from "../../../components";
import { useParams } from "react-router-dom";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { ReviewType } from "../../../types";
import { toast } from "react-toastify";

const url = "VITE_CORE_URL";

interface props {
  apiId: string | undefined;
  onClose: () => void;
}

const ReviewTextField: React.FC<props> = ({ apiId, onClose }) => {
  const cookies = new Cookies();
  const profileId = cookies.get("profileId");
  const { id } = useParams();
  const { currentMode } = useAppContext();
  const classes = useStyles();
  const { error, loading, sendRequest } = useHttpRequest();
  // const [apiId, setApiId] = useState<any>("");
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");


  // const [title, setTitle ] = useState<string>("");

  useEffect(() => {
    setRating(1);
  }, [setRating]);

  const postReview = async () => {
    const headers = {
      "Content-Type": "application/json",
      "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
    };
  const payload:ReviewType = { review, rating, createdBy: profileId}
    try {
      const data = await sendRequest(
        `/review/${apiId}/${profileId}`,
        "post",
        url,
        payload,
        headers
      );
      return data;

    } catch (error:any) {
      toast.error(`${error.message}`)
    }
  };

  const mutation: UseMutationResult<
    ReviewType,
    Error,
    ReviewType,
    Error
  > = useMutation<ReviewType, Error, ReviewType, Error>(
    ["postReview"],
    async () => await postReview(),

    {
      onSuccess: (data) => {
        if(!data){
          return;
        }
        toast.success("Review Added Successfully!");
        setReview("");
      },
      
    }
  );

  useEffect(() => {
		error && toast.error(`${error}`);
	}, [error]);

  return (
    <Box className="textareaandbutton">
      <Box component="form" className={classes.form}>
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
          value={review}
          required
          onChange={(e) => setReview(e.target.value)}
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
            mutation.mutate({ review, rating, createdBy: profileId });
          }}
          type="submit">
          {loading ? <ButtonSpinner /> : "Submit"}
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
      width: "100%",
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
