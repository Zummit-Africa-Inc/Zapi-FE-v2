import { Stack, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AuthLayout, Button, InputField, Paper } from "../components";
import { useFormInputs } from "../hooks";

const initialState = { password: "", confirm_password: "" };

const ResetPassword = () => {
  const { inputs, bind } = useFormInputs(initialState);
  const classes = useStyles();
  return (
    <AuthLayout>
      <Paper className={classes.paper}>
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
              variant="secondary"
              size="large"
            />
          </Stack>
        </form>
      </Paper>
    </AuthLayout>
  );
};

export default ResetPassword;

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
    textAlign: "center",
  },
  form: {},
}));
