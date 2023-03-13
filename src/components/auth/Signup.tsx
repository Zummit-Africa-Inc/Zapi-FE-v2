import React, { FormEvent, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import {
  AuthLayout,
  Button,
  InputField,
  Paper,
  SpinnerAlt,
} from "../../components";
import { useAppDispatch, useFormInputs, useHttpRequest } from "../../hooks";
import { EMAIL_REGEX, MATCH_CHECKER, PASSWORD_REGEX } from "../../utils";
import { GithubIcon, GoogleIcon } from "../../assets/icons";
import { useAppContext } from "../../contexts/AppProvider";
import { login } from "../../store/slices/auth";
import { useStyles } from "./styles/styles";

const initialState = {
  userName: "",
  email: "",
  password: "",
  terms: false,
};
const url = "VITE_IDENTITY_URL";
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;

const Signup = () => {
  const { deviceInfo, deviceLocation, deviceIP, currentMode, handleUnclicked } =
    useAppContext();
  const { inputs, bind, toggle } = useFormInputs(initialState);
  const { fullName, email, password, terms } = inputs;
  const [searchParams, setSearchParams] = useSearchParams();
  const { error, loading, sendRequest } = useHttpRequest();
  const headers = { "Content-Type": "application/json" };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const classes = useStyles();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !email || !password)
      return toast.error("Please fill all fields");
    if (!EMAIL_REGEX.test(email)) return toast.error("Email is invalid");
    if (!PASSWORD_REGEX.test(password))
      return toast.error("Password is not strong enough");
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
    handleUnclicked("login");
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
      handleUnclicked("login");
    },
    onError: (errorResponse) => {
      toast.error("Login Failed, try to login with your email.");
      console.log(errorResponse);
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
        handleUnclicked("login");
      };
      githubLogin();
    }, []);
  }

  useEffect(() => {
    error && toast.error(`${error}`);
  }, [error]);

  return (
    <Box className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <InputField
          label="Username"
          name="userName"
          type="text"
          {...bind}
          placeholder="Enter Username"
          style={{
            background: currentMode === "dark" ? "#383838" : "#FFF",
            color: currentMode === "dark" ? "#FFF" : "#000",
          }}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          {...bind}
          placeholder="Enter Email"
          style={{
            background: currentMode === "dark" ? "#383838" : "#FFF",
            color: currentMode === "dark" ? "#FFF" : "#000",
          }}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          {...bind}
          placeholder="********"
          style={{
            background: currentMode === "dark" ? "#383838" : "#FFF",
            color: currentMode === "dark" ? "#FFF" : "#000",
          }}
        />
        <Button
          label={loading ? <SpinnerAlt size="small" thickness="thin" /> : "Sign Up"}
          size="large"
          type="submit"
          variant="primary"
          style={{ color: currentMode === "dark" ? "#060607" : "#F5F5F5" }}
        />
      </form>
      <Typography
        sx={{
          fontWeight: 600,
          lineHeight: "24px",
          color: currentMode === "dark" ? "#F5F5F5" : "#060607",
        }}>
        Or
      </Typography>
      <Box className={classes.flex}>
        <Button
          label=""
          size="large"
          type="button"
          variant="socialLogin"
          onClick={() => googleAuth()}
          icon={<GoogleIcon />}
          style={{width: "100%",background: currentMode === "dark" ? "#2C2C2C" : "#D3D7DA"}}
        />
        <Button
          label=""
          size="large"
          type="button"
          variant="socialLogin"
          onClick={() => githubAuth()}
          icon={<GithubIcon />}
          style={{width: "100%",background: currentMode === "dark" ? "#2C2C2C" : "#D3D7DA"}}
        />
      </Box>
    </Box>
  );
};

export default Signup;
