import React from 'react'
import { Stack, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Footer, Loader, Navbar } from "../components";
import ContactMain from '../components/contact/ContactMain';

const Contact = () => {
    const classes = useStyles();
    return (
        <Stack className={classes.root}>
            <Navbar />
            <Stack className={classes.docContainer}>
                <ContactMain />
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
        root: {
            flexGrow: 1,
            height: "100vh",
            width: "100%",
        },
    })
);