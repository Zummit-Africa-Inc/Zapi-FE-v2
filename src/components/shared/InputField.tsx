import React, { ChangeEvent, CSSProperties } from "react";
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
  style?: CSSProperties;
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
  style,
}: InputProps) => {
  const classes = useStyles();

  return (
    <Stack spacing="2px">
      <label className={classes.label}>
        {label}
        {required && <span style={{ color: "#E01507" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${classes.root} ${className}`}
        style={style}
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
    background: "transparent",
    border: "1px solid #A8AEB5",
    borderRadius: "4px",
    padding: "15px 12px",
    outline: "none",
    color: theme.palette.primary.main,
    "&::placeholder": {
      fontSize: "18px",
      fontWeight: 400,
      color: "#A8AEB5",
    },
    ":focus": {
      border: "2px solid #A0BDF5",
    },
    [theme.breakpoints.down("laptop")]: {
      height: "38px",
    },
  },
  label: {
    fontSize: "18px",
    fontWeight: 400,
    color: theme.palette.primary.contrastText,
    lineHeight: "22px",
    [theme.breakpoints.down("laptop")]: {
      fontSize: "14px",
      lineHeight: "24px",
    },
  },
}));
