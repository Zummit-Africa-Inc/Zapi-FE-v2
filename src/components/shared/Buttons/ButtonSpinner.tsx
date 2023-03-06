import React from "react";
import '../../shared/styles/buttonspinner.css'
import { useAppContext } from "../../../contexts/AppProvider";

import { makeStyles } from "@mui/styles";

const ButtonSpinner: React.FC = () => {
  const classes = useStyles();
 

  return (
    <div className="spinner"></div>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default ButtonSpinner;

