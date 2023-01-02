import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { useAppDispatch } from "../hooks/redux-hook";
import { useHttpRequest } from "../hooks";
import { AuthLayout, Button, Paper } from "../components";

const url = "VITE_IDENTITY_URL";

const OTP: React.FC = () => {
  const { loading, error, sendRequest } = useHttpRequest();
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleChange = (code: React.SetStateAction<string>) => setCode(code);

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
        navigate("/reset-password");
      }
    } catch (error) {}
  };

  useEffect(() => {
    error && toast.error(`${error}`);
    error && console.log(error);
  }, [error]);
  return (
    <AuthLayout>
      <Paper className={classes.paper}>
        <Stack style={{ width: "100%" }}>
          <Stack spacing="40px">
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
                  border: "1px solid #081F4A",
                  width: "32px",
                  height: "32px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "400",
                  caretColor: "blue",
                }}
                focusStyle={{ border: "1px solid #CFD3DB", outline: "none" }}
              />
            </Stack>
            <Stack>
              <Button
                type="submit"
                variant="secondary"
                label="Proceed"
                size="large"
              />
            </Stack>
          </form>
        </Stack>
      </Paper>
    </AuthLayout>
  );
};

export default OTP;

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    background: "#FFFFFF",
    padding: "64px 64px",
    [theme.breakpoints.down("mobile")]: {
      padding: "64px 16px",
    },
  },
  heading: {
    fontSize: "23px",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    textAlign: "center",
  },
  subHeading: {
    fontSize: "20px",
    fontWeight: 400,
    textAlign: "center",
    color: "#3E4245",
    [theme.breakpoints.down("mobile")]: {
      fontSize: "18px",
    },
  },
  form: {
    "& input": {
      width: "32px",
      height: "32px",
      border: "1px solid #000000",
      borderRadius: "3px",
    },
  },
}));
