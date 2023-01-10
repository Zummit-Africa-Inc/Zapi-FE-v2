import React, { FormEvent, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Box, Stack, Theme, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { useAppDispatch, useFormInputs, useHttpRequest } from "../hooks";
import { AuthLayout, Button, InputField, Paper } from "../components";
import { EMAIL_REGEX, MATCH_CHECKER, PASSWORD_REGEX } from "../utils";
import { GithubIcon, GoogleIcon } from "../assets/icons";
import { useAppContext } from "../contexts/AppProvider";
import { login } from "../store/slices/auth";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirm_password: "",
};
const url = "VITE_IDENTITY_URL";
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;

const Signup: React.FC = () => {
  const { inputs, bind, toggle } = useFormInputs(initialState);
  const classes = useStyles();
  const { error, loading, sendRequest } = useHttpRequest();
  const [searchParams, setSearchParams] = useSearchParams();
  const { deviceInfo, deviceLocation, deviceIP, handleUnclicked } =
    useAppContext();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { fullName, email, password, confirm_password, terms } = inputs;
  const cookies = new Cookies();
  const headers = { "Content-Type": "application/json" };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirm_password)
      return toast.error("Please fill all fields");
    if (!EMAIL_REGEX.test(email)) return toast.error("Email is invalid");
    if (!PASSWORD_REGEX.test(password))
      return toast.error("Password is not strong enough");
    if (!MATCH_CHECKER(password, confirm_password))
      return toast.error("Passwords do not match");
    if (!terms)
      return toast.error(
        "Please read and accept the T&Cs before you can proceed"
      );
    const headers = { "Content-Type": "application/json" };
    const payload = { fullName, email, password };
    try {
      const data = await sendRequest(
        `/auth/signup`,
        "post",
        url,
        payload,
        headers
      );
      const { success } = data;
      if (!success || success === false) {
        return;
      } else {
        toast.success(`${data?.data}`);
        const timeout = setTimeout(() => navigate("/otp"), 3000);
        return () => clearTimeout(timeout);
      }
    } catch (error) {}
  };

  const googleAuth = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (response) => {
      const payload = {
        token: response.code,
        userInfo: {
          login_time: deviceLocation.time,
          country: { lat: deviceLocation.lat, lon: deviceLocation.lon },
          deviceIP,
          browser_name: deviceInfo.browserName,
          os_name: deviceInfo.osName,
        },
      };
      try {
        const token = await sendRequest(
          "/auth/google",
          "post",
          url,
          payload,
          headers
        );
        if (!token) return;
        toast.success("Login Successful!");
        const {
          access,
          email,
          fullName,
          profileId,
          refresh,
          userId,
          secretKey,
        } = token.data;
        const user = { email, fullName, profileId, secretKey };
        dispatch(login(user));
        cookies.set("accessToken", access);
        cookies.set("refreshToken", refresh);
        cookies.set("profileId", profileId);
        cookies.set("userId", userId);
        cookies.set("secretKey", secretKey);
        navigate("/developer/dashboard");
      } catch (error) {}
    },
    onError: (errorResponse) => {
      console.log(errorResponse);
      toast.error("Login Failed, try to login with your email.");
    },
  });

  const githubAuth = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + GITHUB_CLIENT_ID
    );
  };

  if (searchParams.get("code")) {
    useEffect(() => {
      const githubLogin = async () => {
        const payload = {
          token: searchParams.get("code"),
          userInfo: {
            login_time: deviceLocation.time,
            country: { lat: deviceLocation.lat, lon: deviceLocation.lon },
            deviceIP,
            browser_name: deviceInfo.browserName,
            os_name: deviceInfo.osName,
          },
        };
        const headers = { "Content-Type": "application/json" };
        try {
          const data = await sendRequest(
            "/auth/github",
            "post",
            url,
            payload,
            headers
          );
          if (!data) return;
          toast.success("Login Successful!");
          const {
            access,
            email,
            fullName,
            profileId,
            refresh,
            userId,
            secretKey,
          } = data.data;
          const user = { email, fullName, profileId, secretKey };
          dispatch(login(user));
          cookies.set("accessToken", access);
          cookies.set("refreshToken", refresh);
          cookies.set("profileId", profileId);
          cookies.set("userId", userId);
          cookies.set("secretKey", secretKey);

          navigate("/developer/dashboard");
        } catch (error) {}
      };
      githubLogin();
    }, []);
  }
  return (
    <AuthLayout>
      <Paper className={classes.paper}>
        <Stack
          className={classes.signup}
          onClick={(e) => e.stopPropagation()}>
          <Typography variant="h5">Sign Up</Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing="20px">
              <InputField
                label="Name"
                type="text"
                name="fullName"
                {...bind}
                placeholder="Name"
              />
              <InputField
                label="Email"
                type="text"
                name="email"
                {...bind}
                placeholder="Email"
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                {...bind}
                placeholder="Password"
              />
              <InputField
                label="Confirm Password"
                type="password"
                name="confirm_password"
                {...bind}
                placeholder="Confirm Password"
              />
              <Box className={classes.check_input}>
                <input type="checkbox" name="terms" {...toggle} />
                <label htmlFor="terms" className={classes.link}>
                  By checking this box, I agree to the{" "}
                  <span>terms and conditions</span> and <span>privacy</span>{" "}
                  policy
                </label>
              </Box>
            </Stack>
            <Stack mt="20px">
              <Button
                type="submit"
                label="Sign Up"
                variant="secondary"
                size="large"
              />
            </Stack>
          </form>
          <span className={classes.Or}>Or</span>
          <Stack spacing="20px">
            <Button
              label="Sign In Google"
              variant="socialLogin"
              onClick={() => googleAuth()}
              size="large"
              startIcon={<GoogleIcon />}
            />
            <Button
              label="Sign In Github"
              variant="socialLogin"
              size="large"
              onClick={githubAuth}
              startIcon={<GithubIcon />}
            />
          </Stack>
          <Stack
            direction="row"
            mt="1rem"
            spacing=".5rem"
            alignItems="center">
            <Typography variant="subtitle1" className={classes.account}>
              Do you have an account?
            </Typography>
            <Link to="/login" className={classes.signin}>
              Sign In
            </Link>
          </Stack>
        </Stack>
      </Paper>
    </AuthLayout>
  );
};

export default Signup;

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    width: "687px",
    maxWidth: "90%",
    background: "#FFFFFF",
    padding: "64px",
    [theme.breakpoints.down("laptop")]: {
      padding: "64px",
      margin: "0 0 24px 0",
    },
    [theme.breakpoints.down("tablet")]: {
      padding: "16px",
    },
  },
  signup: {
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
    "& p": {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      color: "#5A5F65",
      textDecorationLine: "underline",
      textAlign: "right",
      marginBottom: "30px",
      marginTop: "16px",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "14px",
        lineHeight: "17px",
      },
    },
  },
  Or: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#060607",
    textAlign: "center",
    margin: "20px 0",
  },
  account: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#060607",
  },
  signin: {
    fontSize: "16px",
    fontWeight: 400,
    textDecorationLine: "underline",
    color: " #5574AF",
  },
  check_input: {
    width: "90%",
    display: "flex",
    alignItems: "flex-start",
    "& input": {
      width: "24px",
      height: "24px",
      flex: "none",
      order: 0,
      flexGrow: 0,
      marginRight: "1rem",
      cursor: "pointer",
    },
    "& label": {
      fontWeight: 400,
      fontSize: "16px",
      color: "#060607",
      "& span": {
        color: " #5574AF",
      },
    },
  },
  link: {
    fontSize: "16px",
    fontWeight: 400,
    cursor: "pointer",
  },
}));
