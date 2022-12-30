import { Typography } from "@mui/material";
import React from "react";

interface ITypography {
  text: string;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  variant?:
    | "inherit"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | undefined;
  mb?: number | string;
  mt?: number | string;
  mr?: number | string;
  ml?: number | string;
  m?: number | string;
  className?: string;
}

const CustomTypography: React.FC<ITypography> = ({
  text,
  align,
  variant,
  mb,
  mt,
  mr,
  ml,
  m,
  className,
}) => {
  return (
    <Typography
      align={align}
      variant={variant}
      mb={mb}
      mt={mt}
      mr={mr}
      ml={ml}
      m={m}
      className={className}>
      {text}
    </Typography>
  );
};

export default CustomTypography;
