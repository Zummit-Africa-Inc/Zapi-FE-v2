import { useState, useEffect, FormEvent } from "react";
import { Box, Button, TextareaAutosize } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { useAppContext } from "../../../contexts/AppProvider";
import { useHttpRequest } from "../../../hooks";
import { Spinner } from "../../../components";

interface props {
  apiId: string | undefined
  onClose: () => void;
}

const core_url = "VITE_CORE_URL";

const ReviewTextField: React.FC<props> = ({ apiId, onClose }) => {
  const { currentMode } = useAppContext();
  const classes = useStyles();
  const {error, loading, sendRequest} = useHttpRequest();
  const [review, setReview] = useState<string>("");
  const cookies = new Cookies();

  const handleRating = async(e: FormEvent) => {
    e.preventDefault()
    if(!review) return toast.error('Please add a comment')
    const headers = {
      'Content-Type': "application/json",
      'X-Zapi-Auth-Token': `Bearer ${cookies.get("accessToken")}`
    }
    const profileId = cookies.get("profileId");
    const payload = {review, rating: 5, reviewer: profileId};

    try {
      const data = await sendRequest(
        `/api/rate-api/${profileId}/${apiId}`, 
        "post", 
        core_url, 
        payload, 
        headers
      );
      if(data === undefined) return
      toast.success(`${data.message}`)
    } catch (error: any) {}
    
    return () => onClose();
  }
  
  useEffect(() => {
    error && toast.error(`${error}`)
  },[error])
  


  return (
    <Box className="textareaandbutton">
      <Box component="form" onSubmit={handleRating} className={classes.form}>
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
        }}
      >
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
          type="submit"
          onClick={handleRating}
        >
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