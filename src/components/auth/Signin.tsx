import React, { FormEvent, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

import { useAppDispatch, useFormInputs, useHttpRequest } from "../../hooks";
import { GithubIcon, GoogleIcon } from "../../assets/icons";
import { useAppContext } from "../../contexts/AppProvider";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../utils"; 
import { Button, InputField, Spinner } from "../../components";
import { login } from "../../store/slices/auth";
import { useStyles } from "./styles";

const initialState = { email: "", password: "" };
const url = "VITE_IDENTITY_URL";
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;

const Signin = () => {
    const { deviceInfo, deviceLocation, deviceIP, currentMode, handleUnclicked } = useAppContext();
    const { error, loading, sendRequest } = useHttpRequest();
    const [searchParams, setSearchParams] = useSearchParams();
    const headers = { "Content-Type": "application/json" };
    const { inputs, bind } = useFormInputs(initialState);
    const { email, password } = inputs;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cookies = new Cookies();
    const classes = useStyles();
    
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
        navigate("/developer/dashboard")
        } catch (error) {}
        handleUnclicked("login")
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
            handleUnclicked("login")
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
        };
        githubLogin();
        handleUnclicked("login")
        }, []);
    }

    useEffect(() => {
        error && toast.error(`${error}`)
    },[error])

  return (
    <Box className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form}>
            <InputField label="Email" name="email" type="email" {...bind} style={{background: currentMode === "dark" ? "#383838" : ""}} />
            <InputField label="Password" name="password" type="password" {...bind} style={{background: currentMode === "dark" ? "#383838" : ""}} />
            <Box className={classes.div}>
                <Link to="/forgot-password" onClick={() => handleUnclicked("login")}>
                    <Typography color="grey.700">
                        Forgot Password?
                    </Typography>
                </Link>
            </Box>
            <Button label={loading ? <Spinner /> : "Sign In"} size="large" type="submit" variant="primary" style={{color: currentMode === "dark" ? "#060607" : "#F5F5F5"}} />
        </form>
        <Typography
            sx={{fontWeight: 600, lineHeight: "24px",color: currentMode === "dark" ? "#F5F5F5" : "#060607"}}>
            Or
        </Typography>
        <Box className={classes.flex}>
            <Button label="" size="large" type="button" variant="socialLogin" onClick={() => googleAuth()} icon={<GoogleIcon />} style={{width: "100%"}} />
            <Button label="" size="large" type="button" variant="socialLogin" onClick={() => githubAuth()} icon={<GithubIcon />} style={{width: "100%"}} />
        </Box>
    </Box>
  )
}

export default Signin