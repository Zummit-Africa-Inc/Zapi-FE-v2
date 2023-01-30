import React, { Suspense, useMemo, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { getApiCategories, getApis } from "./store/slices/api";
import { useAppContext } from "./contexts/AppProvider";
import {
  Auth,
  ForgotPassword,
  HamburgerMenu,
  Loader,
  OTP,
  ResetPassword,
} from "./components";
import { deviceDetect } from "react-device-detect";
import { darkTheme, lightTheme } from "./theme";
import { login } from "./store/slices/auth";
import { useAppDispatch } from "./hooks";
import { getDeviceIP } from "./utils";
import Helmet from "./Helmet";
import Router from "./Router";
import ScrollButton from "./components/shared/ScrollButton";
import DevNavbar from "./components/dev/DevNavbar";

const App: React.FC = () => {
  const {
    currentMode,
    setMode,
    isClicked,
    setDeviceLocation,
    setDeviceInfo,
    setDeviceIP,  
  } = useAppContext();
  const dispatch = useAppDispatch();

  const fetchApis = useMemo(() => dispatch(getApis()), []);
  const fetchCategories = useMemo(() => dispatch(getApiCategories()), []);

  useEffect(() => {
    const device = deviceDetect(navigator.userAgent);
    setDeviceInfo(device);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setDeviceLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        time: position.timestamp,
      });
    });
  }, []);

  useEffect(() => {
    const getIPAddress = async () => {
      const data = await getDeviceIP();
      setDeviceIP(data);
    };
    getIPAddress();
  }, []);

  useEffect(() => {
    fetchApis;
  }, []);

  useEffect(() => {
    fetchCategories;
  }, []);

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (!mode) return;
    setMode(mode);
  }, []);

  useEffect(() => {
    const json = localStorage.getItem("zapi-user");
    if (!json) return;
    const user = JSON.parse(json);
    dispatch(login(user));
  }, []);

  return (
    <>
      <ThemeProvider theme={currentMode === "dark" ? darkTheme : lightTheme}>
        <Helmet />
        <ToastContainer />
        <HamburgerMenu />
        <div
          style={{ background: currentMode === "dark" ? "#121212" : "#FFF" }}>
          <Suspense fallback={<Loader />}>
            <Router />
          </Suspense>
        </div>
        {isClicked.forgotPassword && <ForgotPassword />}
        {isClicked.resetPassword && <ResetPassword />}
        {isClicked.otp && <OTP />}
        {isClicked.login && <Auth />}
        <ScrollButton />
        {/* <DevNavbar /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
