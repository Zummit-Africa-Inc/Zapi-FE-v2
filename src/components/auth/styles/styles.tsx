import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    [theme.breakpoints.down("mobile")]: {
      gap: "10px",
    },
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    [theme.breakpoints.down("mobile")]: {
      gap: "10px",
    },
  },
  div: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  flex: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "24px",
    [theme.breakpoints.down("mobile")]: {
      flexDirection: "column",
    },
  },
}));
