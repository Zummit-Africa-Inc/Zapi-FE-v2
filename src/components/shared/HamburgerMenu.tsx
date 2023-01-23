import React, { MouseEvent, Ref, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { makeStyles } from "@mui/styles";
import { Box, Stack, Theme, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

import { useAppContext } from "../../contexts/AppProvider";
import { Moon, Sun } from "../../assets/icons";
import { useAppSelector } from "../../hooks";
import { Button } from "../";

const LINKS = [
  { name: "Home", to: "/" },
  { name: "API Hub", to: "/api-hub" },
  { name: "Pricing", to: "/pricing" },
  { name: "Documentation", to: "/documentation" },
];

const HamburgerMenu = () => {
  const { setActiveMenu, handleClicked, currentMode, setMode, activeMenu } =
    useAppContext();
  const { isLoggedIn } = useAppSelector((store) => store.auth);
  const classes = useStyles();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    setActiveMenu(false);
    handleClicked("login");
  };

  const checkClickRef = (ref: any) => {
    useEffect(() => {
      const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setActiveMenu(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);
  };
  checkClickRef(menuRef);

  return (
    <Box
      ref={menuRef}
      className={classes.root}
      onClick={(e: MouseEvent) => e.stopPropagation()}
      style={{ transform: activeMenu ? "translateX(0)" : "translateX(-101%)" }}>
      <Stack width="100%" direction="row" justifyContent="end" mb="48px">
        <FiX
          onClick={() => setActiveMenu(false)}
          style={{ color: "#FFF", fontSize: "24px", cursor: "pointer" }}
        />
      </Stack>
      <Stack width="100%" direction="column" spacing="42px">
        {LINKS.map((_, index) => (
          <NavLink
            key={index}
            to={_.to}
            onClick={() => setActiveMenu(false)}
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.inactiveLink
            }>
            {_.name}
          </NavLink>
        ))}
      </Stack>
      {!isLoggedIn ? (
        <Stack
          width="100%"
          direction="column"
          spacing="42px"
          mt="32px"
          mb="64px">
          <Button
            label="Log In"
            variant="outline"
            size="small"
            onClick={() => onClick()}
            style={{ width: "100%" }}
          />
          <Button
            label="Sign Up"
            variant="secondary"
            size="small"
            onClick={() => onClick()}
            style={{ width: "100%" }}
          />
        </Stack>
      ) : (
        <Stack
          width="100%"
          direction="column"
          spacing="42px"
          mt="32px"
          mb="64px">
          <Button
            label="Dashboard"
            variant="text"
            size="small"
            to="/developer/dashboard"
            onClick={() => setActiveMenu(false)}
            style={{ width: "100%" }}
          />
          <Button
            label="Logout"
            variant="secondary"
            size="small"
            onClick={() => {
              setActiveMenu(false);
              handleClicked("logout");
            }}
            style={{ width: "100%" }}
          />
        </Stack>
      )}
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Typography sx={{ color: "#FFF" }}>Theme</Typography>
        <Box
          className={classes.modeToggle}
          style={{ background: currentMode === "light" ? "#FFF" : "#000" }}>
          <Box
            className={classes.iconBase}
            style={{ background: currentMode === "light" ? "#E9EBED" : "" }}>
            <Sun
              fill={currentMode === "light" ? "#3E4245" : ""}
              onClick={() => setMode("light")}
            />
          </Box>
          <Box
            className={classes.iconBase}
            style={{ background: currentMode === "dark" ? "#E9EBED" : "" }}>
            <Moon
              fill={currentMode === "dark" ? "#3E4245" : ""}
              onClick={() => setMode("dark")}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "319px",
    height: "100vh",
    background: "#081F4A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "70px 38px ",
    position: "fixed",
    top: 0,
    left: 0,
    transition: "all 500ms ease-in-out",
    boxShadow: "0px 4px 6px 0px rgba(225, 225, 225, 0.5)",
    zIndex: "20 !important",
    [theme.breakpoints.up("laptop")]: {
      display: "none",
    },
  },
  activeLink: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: theme.palette.secondary.main,
  },
  inactiveLink: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFF",
    "&:hover": {
      color: theme.palette.grey[300],
    },
  },
  link: {
    width: "100%",
    color: theme.palette.secondary.main,
    padding: "8px 12px 8px 16px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "6px",
    textAlign: "center",
  },
  modeToggle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderRadius: "50px",
    padding: "4px",
  },
  iconBase: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    padding: "4px",
  },
  fullWidth: {
    width: "100%",
  },
}));

export default HamburgerMenu;
