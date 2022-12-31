import React, { CSSProperties } from "react";
import { Button, Theme } from "@mui/material";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@mui/styles";

interface Props {
  label: string;
  background:
    | "primary"
    | "secondary"
    | "tertiary"
    | "transparent"
    | "white"
    | "inherit";
  size: "small" | "medium" | "large";
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
  icon?: JSX.Element;
  style?: CSSProperties;
  to?: string;
}

const ButtonBase: React.FC<Props> = ({
  label,
  background,
  size,
  icon,
  onClick,
  to,
  type,
  className,
  style,
}) => {
  const classes = useStyles();

  const bgColors = {
    primary: "#081F4A",
    secondary: "#FFEA00",
    tertiary: "inherit",
    white: "#FFF",
    transparent: "transparent",
    inherit: "inherit",
  };

  const textColors = {
    primary: "#FFF",
    secondary: "#000",
    tertiary: "#FFEA00",
    white: "#081F4A",
    transparent: "#FFF",
    inherit: "#081F4A",
  };

  const paddings = {
    small: "12px",
    medium: "16px",
    large: "16px",
  };

  const widths = {
    small: "99px",
    medium: "176px",
    large: "216px",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${classes.root} ${className}`}
        style={{
          background: bgColors[background],
          color: textColors[background],
          padding: paddings[size],
          width: widths[size],
          ...style,
        }}>
        {label} {icon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.root} ${className}`}
      style={{
        background: bgColors[background],
        color: textColors[background],
        padding: paddings[size],
        width: widths[size],
        ...style,
      }}>
      {label} {icon}
    </button>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12.17px",
      fontWeight: 600,
      fontSize: "18px",
      fontFamily: "var(--body-font)",
      textTransform: "capitalize",
      outline: "none",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  })
);

export default ButtonBase;
