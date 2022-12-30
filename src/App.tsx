import React, { Suspense, useMemo, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";

import { useAppContext } from "./contexts/AppProvider";
import { HamburgerMenu, Loader } from "./components";
import { darkTheme, lightTheme } from "./theme";
import Router from "./Router";
import { useAppDispatch } from "./hooks";
import { getApiCategories, getApis } from "./store/slices/apiSlice";

const App: React.FC = () => {
  const { currentMode, isClicked } = useAppContext();
  const dispatch = useAppDispatch();

  const fetchApis = useMemo(() => dispatch(getApis()), []);
  const fetchCategories = useMemo(() => dispatch(getApiCategories()), []);

  useEffect(() => {
    fetchApis;
  }, []);

  useEffect(() => {
    fetchCategories;
  }, []);

  return (
    <ThemeProvider theme={currentMode === "dark" ? darkTheme : lightTheme}>
      <ToastContainer />
      <HamburgerMenu />
      <div style={{ background: currentMode === "dark" ? "#121212" : "#FFF" }}>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </div>

      {/* {isClicked.login && } */}
    </ThemeProvider>
  );
};

export default App;
