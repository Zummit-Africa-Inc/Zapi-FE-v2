import React, { FormEvent } from "react";
import { toast } from "react-toastify";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Theme, Typography } from "@mui/material";

import { AuthLayout, Button, InputField, Paper } from "../components";
import { useFormInputs, useHttpRequest } from "../hooks";

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
        return toast.error(error?.response.data.message);
      } else {
        return toast.error(error.message);
      }
    }
  };

  return (
    <AuthLayout>
      <Paper className={classes.paper}>
        <Box>
          <Typography variant="h5">Forgot Password</Typography>
          <Typography>
            An OTP code will be sent to your mail. Fill in mail address and
            proceed to get the code.
          </Typography>
        </Box>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Stack padding="32px 0">
            <InputField
              label="E-mail"
              type="email"
              name="email"
              {...bind}
              placeholder="Enter mail"
              required
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
    width: "687px",
    maxWidth: "90%",
    background: "#FFFFFF",
    padding: "64px",
    [theme.breakpoints.down("laptop")]: {      
      margin: "0 0 24px 0",
    },
    [theme.breakpoints.down("mobile")]: {
      padding: "16px 16px",
    },
    "& h5": {
      fontSize: "23px",
      fontWeight: 700,
      color: "#060607",
      lineHeight: "28px",
      letterSpacing: "-0.02em",
      marginBottom: "40px",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "19px",
        lineHeight: "23px",
      },
    },
  },
  form: {},
}));
