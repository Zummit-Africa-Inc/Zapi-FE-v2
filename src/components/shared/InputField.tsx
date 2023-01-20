import React, { ChangeEvent } from "react";
import { makeStyles } from "@mui/styles";
import { Stack, Theme, Typography } from "@mui/material";

interface InputProps {
  type: string;
  name: string;
  value?: string | number | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string;
  required?: boolean;
}

const InputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  label,
  error,
  required,
}: InputProps) => {
  const classes = useStyles();
  return (
    <Stack spacing="7px">
      <label className={classes.label}>{label}{required && <span style={{color:"#E01507"}}>*</span>}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${classes.root} ${className}`}
        required={required}
      />
      <Typography>{error}</Typography>
    </Stack>
  );
};

export default InputField;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "52px",
    background: "#FFFFFF",
    border: "1px solid #A8AEB5",
    borderRadius: "4px",
    padding: ".5rem .5rem",
    "&::placeholder": {
      fontSize: "18px",
      fontWeight: 400,
      color: "#A8AEB5",
      padding: ".5rem .5rem",
    },
    ":focus": {
      border: "2px solid #A0BDF5",
    },
  },
  label: {
    fontSize: "18px",
    fontWeight: 400,
    color: "#060607",
    lineHeight: "22px",
    [theme.breakpoints.down("laptop")]: {
      fontSize: "16px",
      lineHeight: "24px",
    }
  },
}));
