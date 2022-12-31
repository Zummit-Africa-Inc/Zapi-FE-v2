import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ButtonProps } from "../../../interfaces/components";
import { useStyles } from "../styles/button";

const ButtonBase = ({
  label,
  variant,
  size,
  type,
  onClick,
  icon,
  to,
  style,
}: ButtonProps) => {
  const classes = useStyles();

  const sizes = {
    small: classes.small,
    medium: classes.medium,
    large: classes.large,
  };

  const variants = {
    primary: classes.primary,
    secondary: classes.secondary,
    tertiary: classes.tertiary,
    outline: classes.outline,
    text: classes.text,
    rounded: classes.rounded,
    square: classes.square,
  };

  if (to) {
    return (
      <Link to={to}>
        <Button
          type={type}
          onClick={onClick}
          className={`${classes.button} ${variants[variant]} ${sizes[size]}`}
          style={style}
          endIcon={icon}>
          {label}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      type={type}
      onClick={onClick}
      className={`${classes.button} ${variants[variant]} ${sizes[size]}`}
      style={style}
      endIcon={icon}>
      {label}
    </Button>
  );
};

export default ButtonBase;
