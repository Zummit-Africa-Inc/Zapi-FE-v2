import React, { FormEvent } from "react";
import { toast } from "react-toastify";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Theme, Typography } from "@mui/material";

import { AuthLayout, Button, InputField, Paper } from "..";
import { useFormInputs, useHttpRequest } from "../../hooks";
import { useAppContext } from "../../contexts/AppProvider";

const initialState = { email: "" };

const url = "VITE_IDENTITY_URL";

const ForgotPassword = () => {
  const { inputs, bind, toggle } = useFormInputs(initialState);
  const { email } = inputs;
  const classes = useStyles();
  const { error, loading, sendRequest } = useHttpRequest();
  const navigate = useNavigate();
  const { handleUnclicked, currentMode, handleClicked } = useAppContext();

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
      handleClicked("otp");
    } catch (error: any) {
      if (error.request.status === 400) {
        return toast.error(error?.response.data.message);
      } else {
        return toast.error(error.message);
      }
    }
  };

  const handleBubble = (e: any) => {
    if (!e) e.stopBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  };

  return (
    <Box
      className={classes.box}
      onClick={() => handleUnclicked("forgotPassword")}>
      <Box className={classes.paper} onClick={handleBubble}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Forgot Password
        </Typography>
        <>
          <Typography
            style={{
              fontWeight: 400,
              fontSize: "18px",
              color: currentMode === "dark" ? "#F5F5F5" : "060607",
            }}>
            Fill in your email address below
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Stack>
              <InputField
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
                variant="primary"
                size="large"
                style={{
                  color: currentMode === "dark" ? "#060607" : "#F5F5F5",
                }}
              />
            </Stack>
          </form>
        </>
      </Box>
    </Box>
  );
};

export default ForgotPassword;

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
    "& h5": {
      fontSize: "23px",
      fontWeight: 700,
      color: theme.palette.grey[100],
      lineHeight: "28px",
      letterSpacing: "-0.02em",
      marginBottom: "40px",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "19px",
        lineHeight: "23px",
      },
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "64px",
    paddingBottom: "64px",
    paddingTop: "26px",
    background: theme.palette.grey[900],
  },
}));
