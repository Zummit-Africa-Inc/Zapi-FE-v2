import React, { FormEvent, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Stack, Theme, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { useAppDispatch, useFormInputs, useHttpRequest } from "../hooks";
import { AuthLayout, Button, InputField, Paper } from "../components";
import { GithubIcon, GoogleIcon } from "../assets/icons";
import { useAppContext } from "../contexts/AppProvider";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../utils";
import { LooperGroup, shine } from "../assets/svg";
import { login } from "../store/slices/auth";

const initialState = { email: "", password: "" };
const url = "VITE_IDENTITY_URL";
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;

const Login: React.FC = () => {
  const classes = useStyles();
  const { inputs, bind } = useFormInputs(initialState);
  const { deviceInfo, deviceLocation, deviceIP, handleUnclicked } =
    useAppContext();
  const { error, loading, sendRequest } = useHttpRequest();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { email, password } = inputs;

  const headers = { "Content-Type": "application/json" };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !EMAIL_REGEX.test(email))
      return toast.error("Invalid email address");
    if (!password || !PASSWORD_REGEX.test(password))
      return toast.error("Invalid password");
    const payload = {
      email,
      password,
      userInfo: {
        login_time: deviceLocation.time,
        country: { lat: deviceLocation.lat, lon: deviceLocation.lon },
        deviceIP,
        browser_name: deviceInfo.browserName,
        os_name: deviceInfo.osName,
      },
    };
    try {
      const data = await sendRequest(
        `/auth/signin`,
        "post",
        url,
        payload,
        headers
      );
      if (!data || data === undefined) return;
      toast.success("Login Successful!");
      const { access, email, fullName, profileId, refresh, userId, secretKey } =
        data.data;
      const user = { email, fullName, profileId, secretKey };
      dispatch(login(user));
      cookies.set("accessToken", access);
      cookies.set("refreshToken", refresh);
      cookies.set("profileId", profileId);
      cookies.set("userId", userId);
      cookies.set("secretKey", secretKey);
      // navigate("/developer/dashboard");
      if(profileId && access){
        window.location.replace(`http://127.0.0.1:5173/?id=${profileId}&token=${access}`)
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
        //navigate("/developer/dashboard");
        if(profileId && access){
        window.location.replace(`http://127.0.0.1:5173/?id=${profileId}&token=${access}`)
      }
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

         // navigate("/developer/dashboard");
         if(profileId && access){
        window.location.replace(`http://127.0.0.1:5173/?id=${profileId}&token=${access}`)
      }
        } catch (error) {}
      };
      githubLogin();
    }, []);
  }

  return (
    <AuthLayout>
      <Paper className={classes.paper}>
        <Stack className={classes.signIn}>
          <Typography variant="h5">Sign In</Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing="24px">
              <InputField
                label="Email"
                type="text"
                name="email"
                {...bind}
                placeholder="Email"
                required
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                {...bind}
                placeholder="Password"
                required
              />
            </Stack>
            <Stack alignItems="flex-end">
              <Link to="/forgot-password" className={classes.link}>
                Forgot Password?
              </Link>
            </Stack>
            <Stack>
              <Button
                type="submit"
                label="Sign In"
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
          <Stack direction="row" mt="1rem" spacing=".5rem" alignItems="center">
            <Typography variant="subtitle1" className={classes.account}>
              Do you have an account?
            </Typography>
            <Link to="/signup" className={classes.signup}>
              Sign Up
            </Link>
          </Stack>
        </Stack>
      </Paper>
    </AuthLayout>
  );
};

export default Login;

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    width: "680px",
    maxWidth: "90%",
    margin: "0 auto",
    background: "#FFFFFF",
    padding: "64px",
    [theme.breakpoints.down("tablet")]: {
      padding: "64px",
    },
    [theme.breakpoints.down("mobile")]: {
      padding: "16px",
      margin: "0 0 24px 0",
    },
  },
  signIn: {
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
  signup: {
    fontSize: "16px",
    fontWeight: 400,
    textDecorationLine: "underline",
    color: " #5574AF",
  },
  link: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#5A5F65",
    textDecorationLine: "underline",
    textDecoration: "none",
    marginBottom: "30px",
    marginTop: "16px",
  },
}));
