import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  catContainer: {
    display: "flex",
    justifyContents: "center",
    alignItems: "center",
    margin: "0px 3em 5em 3em",

    [theme.breakpoints.down("tablet")]: {
      margin: "0px 2em 3em 2em",
    },
    [theme.breakpoints.down("mobile")]: {
      margin: "0px 1em 2em 1em",
    },
  },
  catButtonContainer: {
    width: "100%",
    marginBottom: "1em",
    marginTop: "3em",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "1em",
  },

  catTypoContainer: {
    width: "50%",
    [theme.breakpoints.down("tablet")]: {
      width: "80%!important",
    },
  },

  titleTypography: {
    textAlign: "center",
    color: theme.palette.primary.contrastText,

    [theme.breakpoints.down("tablet")]: {
      fontSize: "30px!important",
      padding: "0px",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "16px",
      padding: "0px",
    },
  },

  subtitleTypography: {
    textAlign: "center",
    color: theme.palette.primary.contrastText,

    [theme.breakpoints.down("tablet")]: {
      textAlign: "center",
      fontSize: "18px!important",
      padding: "0px",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "14px",
      padding: "0px",
    },
  },
}));
