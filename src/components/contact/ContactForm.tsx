import React from 'react'
import { Stack, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";


// export interface  ContactFormProps {

// }

const ContactForm = () => {
    const classes = useStyles();
  return (
    <Stack className={classes.docContainer}>
        <h1>Contact Form</h1>
    </Stack>
  )
}

export default ContactForm
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        docContainer: {
            backgroundColor: "#fff",
            height: "70vh",
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
            margin: "auto",
            position: "absolute",
            top: "60%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            // zIndex: 10,
        },
    })
);