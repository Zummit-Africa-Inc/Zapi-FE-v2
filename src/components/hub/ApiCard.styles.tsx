import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: "1em",
    minWidth: "20em",
    minHeight: "15em",
    cursor: "pointer",
    borderRadius: "8px!important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: `${theme.palette.info.main}!important`,

    "&:hover": {
      boxShadow: " rgba(99, 99, 99, 0.2) 0px 0px 8px 0px",
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
    gap: "0.7em",
  },
  chip: {
    borderRadius: "6px!important",
    height: "30px!important",
    backgroundColor: "#B8CEF7!important",
    color: `${theme.palette.primary.main}!important`,
    fontSize: "14px!important",
  },
  chipIcon: {
    color: `${theme.palette.primary.main}!important`,
  },
}));
