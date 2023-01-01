import { Stack, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AuthNavbar } from "..";
import { LooperGroup, shine } from "../../assets/svg";

interface Props {
  children: any;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <AuthNavbar />
        {children}
      </div>
    </>
  );
};

export default AuthLayout;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    background: theme.palette.primary.main,
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${LooperGroup}), url(${shine})`,
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "left bottom, right top",
    backgroundSize: "auto 700px, auto",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
}));
