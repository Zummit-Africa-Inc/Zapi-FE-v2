import { Stack, Theme, Typography } from "@mui/material";
import React, { FormEvent, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { GithubIcon, GoogleIcon } from "../assets/icons";
import { AuthNavbar, Button, InputField, Paper } from "../components";
import { useAppDispatch, useFormInputs, useHttpRequest } from "../hooks";
import Cookies from "universal-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import { useAppContext } from "../contexts/AppProvider";
import { login } from "../store/slices/auth";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import { EMAIL_REGEX, MATCH_CHECKER, PASSWORD_REGEX } from "../utils";
import {
  LooperGroup,
  LooperGroupMobile,
  LooperGroupTab,
  shine,
  shineTab,
  shineMobile,
} from "../assets/svg";

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
    <>
      <div className={classes.container}>
        <AuthNavbar />
        <div className={classes.children}>
          <Paper className={classes.paper}>
            <Stack
              className={classes.signup}
              onClick={(e) => e.stopPropagation()}>
              <h5>Sign Up</h5>
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
                  <div className={classes.check_input}>
                    <input type="checkbox" name="terms" {...toggle} />
                    <label htmlFor="terms" className={classes.link}>
                      By checking this box, I agree to the{" "}
                      <span>terms and conditions</span> and <span>privacy</span>{" "}
                      policy
                    </label>
                  </div>
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
        </div>
      </div>
    </>
  );
};

export default Signup;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: theme.palette.primary.main,
    width: "100vw",
    height: "max-content",
    backgroundImage: `url(${LooperGroup}), url(${shine})`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "left bottom, right top",
    backgroundSize: "auto 700px, auto",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "30px",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("tablet")]: {
      backgroundImage: `url(${LooperGroupTab}), url(${shineTab})`,
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: "center top, right top",
      backgroundSize: "auto, auto",
    },
    [theme.breakpoints.down("mobile")]: {
      backgroundImage: `url(${LooperGroupMobile}), url(${shineMobile})`,
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundPosition: "right bottom, right top",
      backgroundSize: "auto 700px, auto",
    },
  },
  children: {
    width: "100%",
    height: "100%",
    padding: "0 380px",
    [theme.breakpoints.down("laptop")]: {
      padding: "0 77px",
    },
    [theme.breakpoints.down("mobile")]: {
      padding: "0 16px",
    },
  },
  paper: {
    // width: "680px",
    // margin: "0 auto",
    background: "#FFFFFF",
    padding: "25px 64px",
    [theme.breakpoints.down("mobile")]: {
      padding: "25px 16px",
    },
  },
  signup: {
    "& h5": {
      fontSize: "23px",
      fontWeight: 700,
      color: "#060607",
      letterSpacing: "-0.02em",
      marginBottom: "20px",
    },
    "& p": {
      fontSize: "16px",
      fontWeight: 400,
      color: "#5A5F65",
      textDecorationLine: "underline",
      textAlign: "right",
      marginBottom: "30px",
      marginTop: "16px",
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
