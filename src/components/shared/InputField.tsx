import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  name: string;
  value?: string | number | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string;
}

const InputField: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  label,
  error,
}) => {
  const classes = useStyles();
  return (
    <Stack spacing="7px">
      <label className={classes.label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${classes.root} ${className}`}
      />
      <Typography>{error}</Typography>
    </Stack>
  );
};

export default InputField;

const useStyles = makeStyles({
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
  },
});
