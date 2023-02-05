import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/redux-hook";
import { useHttpRequest } from "../../hooks";
import { AuthLayout, Button, Paper } from "../../components";
import { useAppContext } from "../../contexts/AppProvider";

const url = "VITE_IDENTITY_URL";

const OTP: React.FC = () => {
  const { loading, error, sendRequest } = useHttpRequest();
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleChange = (code: React.SetStateAction<string>) => setCode(code);
  const { handleUnclicked, currentMode, handleClicked } = useAppContext();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!code) return toast.error("Please enter the OTP");
    const payload = { otp: code };
    const headers = { "Content-Type": "application/json" };
    try {
      const data = await sendRequest(
        `/email-verification/confirm`,
        "post",
        url,
        payload,
        headers
      );
      const { success } = data;
      if (!success || success === false) {
        return;
      } else {
        toast.success(`${data?.message}`);
        handleClicked("resetPassword");
      }
    } catch (error) {}
  };

  const handleBubble = (e: any) => {
    if (!e) e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  };

  useEffect(() => {
    error && toast.error(`${error}`);
    error && console.log(error);
  }, [error]);
  return (
    <Box className={classes.box}>
      <Box className={classes.paper} onClick={handleBubble}>
        <Stack style={{ width: "100%" }}>
          <Stack
            onClick={() => handleUnclicked("otp")}
            style={{
              color: currentMode === "dark" ? "#FFFFFF" : "#000000",
              marginLeft: "auto",
              cursor: "pointer",
            }}>
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              X
            </Typography>
          </Stack>
          <Stack
            spacing="40px"
            style={{
              margin: "0 auto",
            }}>
            <h5 className={classes.heading}>Reset Password</h5>
            <p className={classes.subHeading}>
              Input the OTP code sent to your mail
            </p>
          </Stack>

          <form onSubmit={handleSubmit} className={classes.form}>
            <Stack justifyContent="center" alignItems="center" padding="32px 0">
              <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={6}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border:
                    currentMode === "dark"
                      ? "1px solid #FFF"
                      : "1px solid #000",
                  width: "32px",
                  height: "32px",
                  fontSize: "12px",
                  color: currentMode === "dark" ? "#FFFFFF" : "#000000",
                  fontWeight: "400",
                  caretColor: "blue",
                }}
                focusStyle={{ border: "1px solid #A8AEB5", outline: "none" }}
              />
            </Stack>
            <Stack>
              <Button
                type="submit"
                variant="primary"
                label="Proceed"
                size="large"
                style={{
                  color: currentMode === "dark" ? "#060607" : "#F5F5F5",
                }}
              />
            </Stack>
          </form>
        </Stack>
      </Box>
    </Box>
  );
};

export default OTP;

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "0rem",
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(2px)",
    zIndex: 50,
  },
  paper: {
    width: "50%",
    background: theme.palette.grey[900],
    padding: "64px 64px",
    borderRadius: "10px",
    [theme.breakpoints.down("laptop")]: {
      width: "70%",
      padding: "64px 32px",
    },
    [theme.breakpoints.down("mobile")]: {
      width: "90%",
      padding: "64px 16px",
    },
  },
  heading: {
    fontSize: "23px",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    textAlign: "center",
    color: theme.palette.grey[100],
  },
  subHeading: {
    fontSize: "20px",
    fontWeight: 400,
    textAlign: "center",
    color: theme.palette.grey[600],
    [theme.breakpoints.down("mobile")]: {
      fontSize: "18px",
    },
  },
  form: {
    "& input": {
      width: "32px",
      height: "32px",
      // border: "1px solid #000000",
      borderRadius: "3px",
      background: theme.palette.grey[900],
    },
  },
}));
