import React, { useEffect, useState } from "react";
import { Box, Stack, Theme, Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Cookies from "universal-cookie";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { useAppContext } from "../../contexts/AppProvider";
import { Hamburger, Moon, Sun, Avatar } from "../../assets/icons";
import { logout } from "../../store/slices/auth";
import { dropArrow, zapi } from "../../assets/svg";
// import { Button } from "../";


const DevNavbar: React.FC = () => {
  const {
    handleClicked,
    currentMode,
    setMode,
    setActiveMenu,
    screenSize,
    setScreenSize,
  } = useAppContext();
  const { isLoggedIn } = useAppSelector((store) => store.auth);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const open = Boolean(anchorEl);
  const cookies = new Cookies();
  const classes = useStyles();

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 700 ? setScrolled(true) : setScrolled(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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
        <Button
            className={classes.apis}
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            id="fade-button"
            onClick={handleClick}>
              My APIs
            <img
            src={dropArrow}
            alt="zapi-arrow"
            style={{ color: "#00000", marginLeft: "0.4rem" }}
            />
        </Button>
        </Stack>
          <Stack direction="row" alignItems="center" spacing="24px">
            <Avatar />
            <Button
              type="button"
              onClick={() => handleClicked("login")}
              variant={"contained"}
              className={classes.button}>
                Upgrade
            </Button>
            {currentMode === "light" ? (
              <Moon fill="#E9EBED" onClick={() => setMode("dark")} />
            ) : (
              <Sun fill="#E9EBED" onClick={() => setMode("light")} />
            )}
          </Stack>
      
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
    padding: "24px 5rem",
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
  apis: {
    width: "300px",
      "&.MuiButton-text": {
        color: "#F2F5FA",
      },
      "&.MuiButton-root": {
        textTransform: "none",
        fontSize: "23px",
        width: "300px",
      },
  },
  button: {
    border: "1px solid #F2F5FA !important",
    color: "#F2F5FA !important",
    width: "135px",
    height: "41px",
    "&.MuiButton-root": {
        textTransform: "none",
      },
  }
}));

export default DevNavbar;
