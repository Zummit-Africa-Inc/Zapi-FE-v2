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
    width: "90%",
    marginBottom: "1em",
    marginTop: "3em",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "1em",
  },

  catTypoContainer: {
    width: "65%",
    marginTop: "2rem",
    [theme.breakpoints.down("tablet")]: {
      width: "80%!important",
    },
  },

  titleTypography: {
    textAlign: "center",
    color: theme.palette.grey[100],
    fontWeight: "600!important",

    [theme.breakpoints.down("tablet")]: {
      fontSize: "30px!important",
      padding: "0px",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "18px",
      padding: "0px",
    },
  },

  subtitleTypography: {
    textAlign: "center",
    marginTop: "1rem!important",
    color: theme.palette.grey[600],

    [theme.breakpoints.down("tablet")]: {
      textAlign: "center",
      fontSize: "16px!important",
      padding: "0px",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "16px",
      padding: "0px",
    },
  },
}));
