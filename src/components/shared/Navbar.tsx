import React, { useEffect, useState } from "react";
import { Box, Stack, Theme } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { useAppContext } from "../../contexts/AppProvider";
import { Hamburger, Moon, Sun } from "../../assets/icons";
import { logout } from "../../store/slices/auth";
import { zapi } from "../../assets/svg";
import { Button } from "../";

const LINKS = [
  { name: "Home", to: "/" },
  { name: "API Hub", to: "/api-hub" },
  { name: "Pricing", to: "/pricing" },
  { name: "Help", to: "/documentation" },
];

const Navbar = () => {
  const {
    handleClicked,
    currentMode,
    setMode,
    setActiveMenu,
    screenSize,
    setScreenSize,
  } = useAppContext();
  const { isLoggedIn } = useAppSelector((store) => store.auth);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const classes = useStyles();

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 700 ? setScrolled(true) : setScrolled(false);
  };

  const handleLogout = () => {
    cookies.remove("refreshToken");
    cookies.remove("accessToken");
    cookies.remove("secretKey");
    cookies.remove("profileId");
    cookies.remove("userId");
    dispatch(logout());
  };

  useEffect(() => {
    const handleScreenResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenResize);
    handleScreenResize();
    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  useEffect(() => {
    screenSize > 1260 && setActiveMenu(false);
  }, [screenSize]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Box
      className={classes.root}
      style={{ position: scrolled ? "fixed" : "static" }}>
      <Link to="/" className={classes.logo}>
        <img src={zapi} alt="zapi logo" />
        <p>ZAPI</p>
      </Link>
      <Box className={classes.toolbar}>
        <Stack direction="row" alignItems="center" spacing="40px">
          {LINKS.map((_, index) => (
            <NavLink
              key={index}
              to={_.to}
              className={({ isActive }) =>
                isActive ? classes.activeLink : classes.inactiveLink
              }>
              {_.name}
            </NavLink>
          ))}
        </Stack>
        {!isLoggedIn ? (
          <Stack direction="row" alignItems="center" spacing="24px">
            <Button
              label="Login"
              onClick={() => handleClicked("login")}
              variant="outlineLogin"
              size="small"
            />
            <Button
              label="Sign Up"
              onClick={() => handleClicked("login")}
              variant={currentMode === "dark" ? "secondaryDark" : "secondary"}
              size="small"
            />
            {currentMode === "light" ? (
              <Moon fill="#E9EBED" onClick={() => setMode("dark")} />
            ) : (
              <Sun fill="#E9EBED" onClick={() => setMode("light")} />
            )}
          </Stack>
        ) : (
          <Stack direction="row" alignItems="center" spacing="24px">
            <Button
              label="Help"
              variant="outlineLogin"
              size="small"
              to="/developer/dashboard"
            />
            <Button
              label="Logout"
              variant={currentMode === "dark" ? "secondaryDark" : "secondary"}
              size="small"
              onClick={() => handleLogout()}
            />
            {currentMode === "light" ? (
              <Moon onClick={() => setMode("dark")} />
            ) : (
              <Sun onClick={() => setMode("light")} />
            )}
          </Stack>
        )}
      </Box>
      <Box className={classes.menuToggle}>
        <Hamburger onClick={() => setActiveMenu(true)} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "88px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#081F4A",
    padding: "24px 3rem",
    top: 0,
    left: 0,
    zIndex: "10 !important",
    [theme.breakpoints.down("laptop")]: {
      padding: "24px 32px",
    },
    [theme.breakpoints.down("tablet")]: {
      padding: "24px 16px",
    },
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "219px",
    [theme.breakpoints.down("laptop")]: {
      display: "none",
    },
  },
  menuToggle: {
    display: "none",
    [theme.breakpoints.down("laptop")]: {
      display: "block",
    },
  },
  logo: {
    width: "130px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    "& p": {
      fontWeight: 700,
      fontSize: "23px",
      lineHeight: "28px",
      color: "#FFF",
    },
  },
  activeLink: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFEA00",
  },
  inactiveLink: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: theme.palette.grey[300],
    "&:hover": {
      color: "#FFF",
    },
  },
  icon: {
    width: "48px",
    height: "48px",
  },
}));

export default Navbar;
