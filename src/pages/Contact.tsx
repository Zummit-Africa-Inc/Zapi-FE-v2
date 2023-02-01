import React from 'react'
import { Stack, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Footer, Loader, Navbar } from "../components";
import ContactMain from '../components/contact/ContactMain';
import { contactBg } from '../assets/images';
import { useAppContext } from '../contexts/AppProvider';

const Contact = () => {
    const classes = useStyles();
    const { currentMode } = useAppContext();
    return (
        <Stack className={classes.root}>
            <Navbar />
            <Stack 
                    sx={{
                //         background:
                //    currentMode === "light" ? " rgb(233,235,237) " : "#383838",
               background:
                   currentMode === "light"
                       ? "linear-gradient(180deg, rgba(233,235,237,1) 50%, rgba(255,255,255,1) 50%)"
                       : "linear-gradient(180deg, rgba(56,56,56,1) 50%, rgba(0,0,0,1) 50%)",
            //    backgroundImage: `url(${contactBg})`,
               backgroundPosition: "right",
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
   }}
            className={classes.docContainer}>
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
            // flexGrow: 1,
            // height: "100vh",
            // width: "100%",
        },
    })
);