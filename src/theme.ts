import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const darkTheme = createTheme({
  typography: {
    fontFamily: "var(--body-font)",
  },
  breakpoints: {
    values: {
      mobile: 428,
      tablet: 834,
      laptop: 1260,
      desktop: 1440,
    },
  },

  palette: {
    mode: "dark",
    primary: {
      main: "#081F4A",
      contrastText: "#E9EBED",
    },
    secondary: {
      main: "#FFEA00",
    },
    background: {
      default: "#121212",
      paper: "#E9EBED",
    },
    grey: {
      "100": "#F5F5F5",
      "200": "#1E1E1E",
      "300": "#A8AEB5",
      "400": '#BEC2C8',
      "500": '#1E1E1E',
      "600": '#BEC2C8',
      "700": '#E9EBED',
    },
    text: {
      primary: "#081F4A",
      secondary: "#FFF",
    },
    info: {
      main: "#1E1E1E",
      contrastText: "#BEC2C8",
    },
  },

  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#DB3131",
          fontSize: "12px",
          "&$error": {
            color: "#DB3131",
          },
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: "var(--body-font)",
  },
  breakpoints: {
    values: {
      mobile: 428,
      tablet: 834,
      laptop: 1260,
      desktop: 1440,
    },
  },
  palette: {
    primary: {
      main: "#081F4A",
      contrastText: "#121212",
    },
    secondary: {
      main: "#FFEA00",
    },
    background: {
      default: "#F5F5F5",
      paper: "#E9EBED",
    },
    grey: {
      "100": "#060607",
      "200": "#E9EBED",
      "300": "#A8AEB5",
      "400": '#5A5F65',
      "500": '#FFFFFF',
      "600": '#3E4245',
      "700": '#3E4245'
    },
    info: {
      main: "#FFFFFF",
      contrastText: "#3E4245",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#DB3131",
          fontSize: "12px",
          "&$error": {
            color: "#DB3131",
          },
        },
      },
    },
  },
});
