import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Paper: React.FC<Props> = ({ children, className }) => {
  const classes = useStyles();
  return <Box className={`${classes.root} ${className}`}>{children}</Box>;
};

export default Paper;

const useStyles = makeStyles({
  root: {
    borderRadius: "8px",
  },
});
