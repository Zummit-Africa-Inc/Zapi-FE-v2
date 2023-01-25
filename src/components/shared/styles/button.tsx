import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  button: {
    "&.MuiButton-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontWeight: 600,
      fontFamily: "var(--body-font)",
      textTransform: "capitalize",
      outline: "none",
      borderColor: "transparent",
      borderWidth: "1px",
      borderRadius: "4px",
      cursor: "pointer",
    },
  },
  primary: {
    "&.MuiButton-root": {
      background: theme.palette.primary.main,
      color: "#FFF",
      "&:hover": {
        background: "#223B6C",
      },
      "&:active": {
        background: `${theme.palette.primary.main}50`,
      },
      "&:disabled": {
        background: "#DAD7DA",
        color: "#929AA3",
      },
    },
  },
  primaryDark: {
    "&.MuiButton-root": {
      background: theme.palette.secondary.main,
      color: "#FFF",
      "&:hover": {
        background: "#223B6C",
      },
      "&:active": {
        background: `${theme.palette.primary.main}50`,
      },
      "&:disabled": {
        background: "#DAD7DA",
        color: "#929AA3",
      },
    },
  },
  secondary: {
    "&.MuiButton-root": {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      "&:hover": {
        background: "#FFEE33",
        color: "#000",
      },
      "&:active": {
        background: `${theme.palette.secondary.main}50`,
      },
      "&:disabled": {
        background: "#DAD7DA",
        color: "#929AA3",
      },
    },
  },
  secondaryDark: {
    "&.MuiButton-root": {
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      "&:hover": {
        background: "#FFEE33",
        color: "#000",
      },
      "&:active": {
        background: `${theme.palette.secondary.main}50`,
      },
      "&:disabled": {
        background: "#DAD7DA",
        color: "#929AA3",
      },
    },
  },
  tertiary: {
    "&.MuiButton-root": {
      background: "transparent",
      color: theme.palette.secondary.main,
      "&:hover": {
        background: theme.palette.secondary.main,
        color: "#FFEA00",
      },
    },
  },
  outline: {
    "&.MuiButton-root": {
      background: "transparent",
      color: theme.palette.text.secondary,
      borderColor: theme.palette.primary.main,
      "&:hover": {
        background: "#CFDEFA",
      },
      "&:active": {
        background: "#B8CEF7",
      },
      "&:disabled": {
        background: "#DAD7DA",
        color: "#929AA3",
      },
    },
  },
  outlineLogin: {
    "&.MuiButton-root": {
      background: "transparent",
      color: theme.palette.text.secondary,
      borderColor: theme.palette.primary.main,
      "&:hover": {
        background: "#CFDEFA",
        color: "#000",
      },
      "&:active": {
        background: "#B8CEF7",
      },
      "&:disabled": {
        background: "#DAD7DA",
        color: "#929AA3",
      },
    },
  },
  text: {
    "&.MuiButton-root": {
      background: "transparent",
      color: theme.palette.primary.main,
      borderWidth: 0,
      "&:hover": {
        color: "#223B6C",
      },
      "&:active": {
        color: "#5574AF",
      },
      "&:focus": {
        background: "#CFDEFA",
        color: theme.palette.primary.main,
      },
      "&:disabled": {
        background: "#E9EBED",
        color: "#5A5F65",
        borderColor: "#A8AEB5",
      },
    },
  },
  rounded: {
    "&.MuiButton-root": {
      background: theme.palette.primary.main,
      color: theme.palette.text.secondary,
      borderRadius: "52px",
      "&:hover": {
        background: "#223B6C",
      },
      "&:active": {
        background: "#5574AF",
      },
      "&:disabled": {
        background: "#DAD7DA",
        color: "#929AA3",
      },
    },
  },
  square: {
    "&.MuiButton-root": {
      background: theme.palette.primary.main,
      color: theme.palette.text.secondary,
      borderRadius: "",
      "&:hover": {
        background: "#223B6C",
      },
      "&:active": {
        background: "#5574AF",
      },
      "&:disabled": {
        background: "#DAD7DA",
        color: "#929AA3",
      },
    },
  },
  socialLogin: {
    "&.MuiButton-root": {
      background: "#A8AEB5",
      color: theme.palette.text.secondary,
      border: "1px solid #A8AEB5",
      borderRadius: "10px",
    },
  },
  small: {
    "&.MuiButton-root": {
      fontSize: "14px",
      lineHeight: "17px",
      padding: "8px 12px 8px 16px",
    },
  },
  medium: {
    "&.MuiButton-root": {
      fontSize: "16px",
      lineHeight: "24px",
      padding: "12px 24px",
    },
  },
  large: {
    "&.MuiButton-root": {
      fontSize: "18px",
      lineHeight: "22px",
      padding: "16px 32px",
    },
  },
}));
