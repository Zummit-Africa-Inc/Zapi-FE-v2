import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: "1em",
    height: "16em",
    width: "410px",
    minWidth: "390px",
    maxHeight: "16em",
    cursor: "pointer",
    borderRadius: "8px!important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: `${theme.palette.info.main}!important`,

    "&:hover": {
      boxShadow: " rgba(99, 99, 99, 0.2) 0px 0px 8px 0px",
    },

    [theme.breakpoints.down("laptop")]: {
      width: "372px",
      minWidth: "auto",
      maxHeight: "16em",
    },

    [theme.breakpoints.down("mobile")]: {
      width: "396px",
      minWidth: "auto",
      maxHeight: "16em",
    },
  },
  apiTitle: {
    textTransform: "capitalize",
    lineHeight: "120%!important",
    color: theme.palette.primary.contrastText,
  },
  apiDescription: {
    color: theme.palette.info.contrastText,
  },
  chipContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "5px",
  },
  chip: {
    display: "flex",
    alignItems: "center",
    borderRadius: "6px!important",
    height: "30px!important",
    backgroundColor: "#B8CEF7!important",
    color: `${theme.palette.primary.main}!important`,
    fontSize: "14px!important",
  },
  chipIcon: {
    color: `${theme.palette.primary.main}!important`,
  },
  typography: {
    color: "##3E4245",
  },
}));
