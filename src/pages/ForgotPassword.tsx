import { makeStyles } from "@mui/styles";
import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout, Button, InputField, Paper } from "../components";
import { useFormInputs, useHttpRequest } from "../hooks";
import { toast } from "react-toastify";
import { Stack, Theme } from "@mui/material";

const initialState = { email: "" };

const url = "VITE_IDENTITY_URL";

const ForgotPassword = () => {
  const { inputs, bind, toggle } = useFormInputs(initialState);
  const { email } = inputs;
  const classes = useStyles();
  const { error, loading, sendRequest } = useHttpRequest();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { email };
    const headers = { "Content-Type": "application/json" };
    try {
      const data = await sendRequest(
        `/auth/forgot`,
        "post",
        url,
        payload,
        headers
      );
      const { success } = data;
      if (!success || success === false) return;
      toast.success(`${data?.message}`);
      setTimeout(() => {
        navigate("/otp");
      }, 5000);
    } catch (error: any) {
      if (error.request.status === 400) {
        return toast.error(error.response.data.message);
      } else {
        return toast.error(error.message);
      }
    }
  };

  return (
    <AuthLayout>
      <Paper className={classes.paper}>
        <Stack spacing="40px">
          <h5 className={classes.heading}>Forgot Password</h5>
          <p className={classes.subHeading}>
            An OTP code will be sent to your mail. Fill in mail address and
            proceed to get the code.
          </p>
        </Stack>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Stack padding="32px 0">
            <InputField
              label="E-mail"
              type="email"
              name="email"
              {...bind}
              placeholder="Enter mail"
            />
          </Stack>
          <Stack>
            <Button
              label="Submit"
              type="submit"
              variant="secondary"
              size="large"
            />
          </Stack>
        </form>
      </Paper>
    </AuthLayout>
  );
};

export default ForgotPassword;

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    background: "#FFFFFF",
    padding: "64px 64px",
    [theme.breakpoints.down("mobile")]: {
      padding: "16px 16px",
    },
  },
  heading: {
    fontSize: "23px",
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  subHeading: {
    fontSize: "20px",
    fontWeight: 400,
    color: "#3E4245",
  },
  form: {},
}));
