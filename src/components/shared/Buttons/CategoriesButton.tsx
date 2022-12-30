import React from "react";
import { Button } from "@mui/material";

interface Props {
  label: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
  background?: string;
  padding?: string;
  color?: string;
  icon?: any;
  size: "small" | "medium" | "large";
}

const CategoryButton: React.FC<Props> = ({
  label,
  icon,
  onClick,
  type,
  size,
  background,
  padding,
  color,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      size={size}
      style={{
        background,
        color,
        padding,
        border: `1px solid ${color}`,
        borderRadius: "8px",
        height: "40px",
      }}>
      {label} {icon}
    </Button>
  );
};

export default CategoryButton;
