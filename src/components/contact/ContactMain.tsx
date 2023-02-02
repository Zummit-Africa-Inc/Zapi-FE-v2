import React from "react";
import { makeStyles } from "@mui/styles";
import { useAppContext } from "../../contexts/AppProvider";
import { Box, Stack, Theme, Typography, Tab, Tabs } from "@mui/material";
import ContactForm from "./ContactForm";


import { contactBg } from "../../assets/images";

const ContactMain: React.FC = () => {
    const classes = useStyles();
    const { currentMode } = useAppContext();

    return (
        <Stack className={classes.root}
            sx={{
                backgroundImage: `url(${contactBg})`,
                backgroundPosition: "right",
                backgroundSize: "65% 100%",
                backgroundRepeat: "no-repeat",
                display: "flex",
                overflow: "auto",
                '@media (max-width: 600px)': {
                    backgroundImage: `none`,
                },
            }}
        >
            <ContactForm />
        </Stack>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        display: "flex",
    },
}));

export default ContactMain;
