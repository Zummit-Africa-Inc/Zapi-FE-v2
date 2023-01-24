import { Box, Stack, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AuthLayout, Button, InputField, Paper } from "..";
import { useAppContext } from "../../contexts/AppProvider";
import { useFormInputs } from "../../hooks";

const initialState = { password: "", confirm_password: "" };

const ResetPassword = () => {
  const { inputs, bind } = useFormInputs(initialState);
  const { handleUnclicked, currentMode } = useAppContext();
  const classes = useStyles();

  const handleBubble = (e: any) => {
    if (!e) e.stopBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  };
  return (
    <Box
      className={classes.box}
      onClick={() => handleUnclicked("resetPassword")}>
      <Box className={classes.paper} onClick={handleBubble}>
        <Stack spacing="40px">
          <h5 className={classes.heading}>Reset Password</h5>
        </Stack>
        <form className={classes.form}>
          <Stack padding="32px 0">
            <InputField
              label="New Password"
              type="password"
              name="password"
              {...bind}
              placeholder="Enter Password"
            />
            <InputField
              label="Confirm New Password"
              type="password"
              name="confirm_password"
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
      </Box>
    </Box>
  );
};

export default ResetPassword;

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
  form: {
    width: "auto",
  },
}));
