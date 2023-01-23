import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Theme, Typography } from "@mui/material";
import { zapi } from "../../assets/svg";
import LinearProgress from '@mui/material/LinearProgress';

const Loader : React.FC = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.loaderBox}>
        <Box className={classes.logo}>
         <img style={{width: "3em", height: "3em", marginRight: "1em"}} src={zapi}/> 
         <Typography variant='h6'> Z-API</Typography>
        </Box>
        <Box className={classes.progress}>
        <LinearProgress variant="determinate"/>
        </Box>
      </Box>
    </Box>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F3F7FE"
  },
  loaderBox : {
    width: "45%",
    margin: "auto",
  },
  logo : {
    display: "flex",
    alignItems: "center",
    margin: "1.5em 40%",
    "& h6" : {
      whiteSpace: 'nowrap',
      fontFamily: 'Lato',
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: '1em',
      color: "#060607",
      lineHeight: '1em'
    }
  }, 
  progress : {
    width: "81%",
    backgroundColor: "black",
    margin: "auto"
  },
}))

export default Loader;
