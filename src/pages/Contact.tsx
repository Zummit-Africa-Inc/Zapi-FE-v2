import React from 'react'
import { Stack, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Footer, Loader, Navbar } from "../components";

const Contact = () => {
    const classes = useStyles();
  return (
    <Stack>
    <Navbar />
    <Stack className={classes.docContainer}>
        <Loader />  
    </Stack>
    <Footer />
  </Stack>
  )
}

export default Contact
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    docContainer: {
      backgroundColor: theme.palette.background.default,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);