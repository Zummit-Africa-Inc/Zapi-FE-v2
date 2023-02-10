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
      main: "#FFEA00",
      contrastText: "#E9EBED",
      light: "#FFFDE5",
      "100": "#FFFBCC",
      "200": "#FFF9B2",
      "300": "#FFF799",
      "400": "#FFF266",
      "500": "#FFEE33",
    },
    secondary: {
      main: "#081F4A",
      light: "#F3F7FE",
      "100": "#E7EFFC",
      "200": "#CFDEFA",
      "300": "#B8CEF7",
      "400": "#A0BDF5",
      "500": "#7B9FE1",
      "600": "#6282C0",
      "700": "#5574AF",
      "800": "#223B6C",
    },
    background: {
      default: "#121212",
      paper: "#E9EBED",
    },
    grey: {
      "100": "#F5F5F5",
      "200": "#1E1E1E",
      "300": "#A8AEB5",
      "400": "#BEC2C8",
      "500": "#1E1E1E",
      "600": "#BEC2C8",
      "700": "#E9EBED",
      "800": "#D3D7DA",
      "900": "#121212",
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
  
  shadows: [
    'none',
    "#3E4245",
    "#272727",
    "#FFF9B2",
    "#081F4A",
    "#BEC2C8",
    "#FFEA00",
    "#060607 !important",
    "#FFFBCC",
    "#FFEA00 !important",
    "#060607 !important",
    "#5A5F65",
    "rgba(255, 255, 255, 0.2)",
    "#FFF799",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
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
      light: "#F3F7FE",
      "100": "#E7EFFC",
      "200": "#CFDEFA",
      "300": "#B8CEF7",
      "400": "#A0BDF5",
      "500": "#7B9FE1",
      "600": "#6282C0",
      "700": "#5574AF",
      "800": "#223B6C",
    },
    secondary: {
      main: "#FFEA00",
      light: "#FFFDE5",
      "100": "#FFFBCC",
      "200": "#FFF9B2",
      "300": "#FFF799",
      "400": "#FFF266",
      "500": "#FFEE33",
    },
    background: {
      default: "#F5F5F5",
      paper: "#E9EBED",
    },
    grey: {
      "100": "#060607",
      "200": "#E9EBED",
      "300": "#A8AEB5",
      "400": "#5A5F65",
      "500": "#FFFFFF",
      "600": "#3E4245",
      "700": "#3E4245",
      "800": "#D3D7DA",
      "900": "#FFFFFF",
    },
    text: {
      primary: "#081F4A",
      secondary: "#FFFFFF",
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

  shadows: [
    'none',
    "#A8AEB5",
    "#D3D7DA",
    "#081F4A",
    "#FFF",
    "#060607",
    "#B8CEF7",
    "#081F4A !important",
    "#5574AF",
    "#081F4A !important",
    "#fff !important",
    "#D3D7DA",
    "rgba(0, 0, 0, 0.5)",
    "#5574AF",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
});
