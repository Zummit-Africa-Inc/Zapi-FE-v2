import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  hubApiContainer: {
    display: "flex",
    justifyContents: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0px 3em 3em 3em",
  },
  titleBarContainer: {
    width: "100%",
    marginBottom: "3em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("mobile")]: {
      flexDirection: "column",
    },
  },
  catButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    borderRadius: 4,
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "4px 10px",
  },
  typography: {
    textAlign: "center",
    color: theme.palette.primary.contrastText,

    [theme.breakpoints.down("tablet")]: {
      fontSize: "20px!important",
    },
    [theme.breakpoints.down("mobile")]: {
      marginBottom: "1rem!important",
      fontSize: "16px!important",
    },
  },

  searchInput: {
    width: "25%",

    [theme.breakpoints.down("tablet")]: {
      width: "40%",
    },
    [theme.breakpoints.down("mobile")]: {
      width: "100%",
    },
  },
  notFoundTypography: {
    color: theme.palette.primary.contrastText,

    [theme.breakpoints.down("tablet")]: {
      fontSize: "20px!important",
    },

    [theme.breakpoints.down("mobile")]: {
      textAlign: "center",
    },
  },
  notFoundSubtypography: {
    color: theme.palette.primary.contrastText,

    [theme.breakpoints.down("tablet")]: {
      fontSize: "16px!important",
    },
    [theme.breakpoints.down("mobile")]: {
      textAlign: "center",
    },
  },

  notFoundContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",

    [theme.breakpoints.down("mobile")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "3rem",
    },
  },
  homeButton: {
    [theme.breakpoints.down("mobile")]: {
      width: "100%!important",
    },
  },
}));
