import React from 'react'
import { Stack, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Footer, Loader, Navbar } from "../components";
import Hero from '../components/help/Hero'
import Help from '../components/help/Help';

const Documentation = () => {
  const classes = useStyles();
  return (
    <Stack>
    <Navbar />
    <Stack className={classes.docContainer}>
      <Help />
    </Stack>
    <Footer />
  </Stack>
  )
}
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


export default Documentation