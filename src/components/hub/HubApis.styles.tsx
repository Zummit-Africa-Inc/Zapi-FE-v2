import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  hubApiContainer: {
    padding: "64px 108px",
    width: "100%",
    [theme.breakpoints.down("laptop")]: {
      padding: "64px 16px",
    },
  },
  titleBarContainer: {
    width: "100%",
    marginBottom: "3em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("tablet")]: {
      marginLeft: "3rem"
    },

    [theme.breakpoints.down("mobile")]: {
      justifyContent: "center",
      flexDirection: "column",
      position: 'relative',
      right: "3rem"
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
    // position: "relative",
    // right: "30px",
    textAlign: "center",
    color: theme.palette.primary.contrastText,

    [theme.breakpoints.down("tablet")]: {
      fontSize: "20px!important",
      // margin: "0 30px"
    },
    [theme.breakpoints.down("mobile")]: {
      marginBottom: "1rem!important",
      fontSize: "16px!important",
    },
  },

  searchInput: {
    // position: "relative",
    // left: "30px",
    '& input::placeholder':{
      color: theme.palette.grey[100]
    },
    "& .MuiInputBase-input-MuiOutlinedInput-input":{
      color: "white"
    },
    width: "25%",
    background: `${theme.palette.info.main}!important`,
   

    [theme.breakpoints.down("tablet")]: {
      position: "relative",
      right: "100px",
      width: "30%",
    },
    [theme.breakpoints.down("mobile")]: {
      width: "50%",
      position: "relative",
      left: "5px"
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
    color: "#3E4245",

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
    justifyContent: "space-around",
    width: "90%",

    [theme.breakpoints.down("mobile")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "3rem",
    },
  },
  notFoundStack: {
    width: "40%",
    [theme.breakpoints.down("mobile")]: {
      width: "100%",
    },
  },
  homeButton: {
    [theme.breakpoints.down("mobile")]: {
      width: "100%!important",
    },
  },

  apiContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    // [theme.breakpoints.down('tablet')]: {
    //   marginRight: "1rem"
    // },
  },

  apis:{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",

    [theme.breakpoints.down('tablet')]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down('mobile')]: {
      gridTemplateColumns: "repeat(1, 1fr)"
    }
  }

}));
