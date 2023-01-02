import React, { Suspense, useMemo, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";

import { useAppContext } from "./contexts/AppProvider";
import { HamburgerMenu, Loader } from "./components";
import { darkTheme, lightTheme } from "./theme";
import Router from "./Router";
import { useAppDispatch } from "./hooks";
import { getApiCategories, getApis } from "./store/slices/apiSlice";
import { login } from "./store/slices/auth";
import Helmet from "./Helmet";

const App: React.FC = () => {
  const { currentMode, setMode } = useAppContext();
  const dispatch = useAppDispatch();

  const fetchApis = useMemo(() => dispatch(getApis()), []);
  const fetchCategories = useMemo(() => dispatch(getApiCategories()), []);

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
    <ThemeProvider theme={currentMode === "dark" ? darkTheme : lightTheme}>
      <Helmet />
      <ToastContainer />
      <HamburgerMenu />
      <div style={{ background: currentMode === "dark" ? "#121212" : "#FFF" }}>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
