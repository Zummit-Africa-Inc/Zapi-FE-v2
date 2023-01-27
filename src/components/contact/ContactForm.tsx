import React from "react";
import { Stack, Theme } from "@mui/material";
import { createStyles, makeStyles, styled } from "@mui/styles";
import {
    Paper,
    Box,
    Grid,
    Input,
    FormControl,
    InputLabel,
    TextField,
    InputBase,
    OutlinedInput,
} from "@mui/material";

// export interface  ContactFormProps {

// }

const ContactForm = () => {
    const classes = useStyles();

    return (
        <Paper
            elevation={3}
            variant="outlined"
            className={classes.docContainer}
            sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                backgroundColor: "#fff",
            }}>
            <Stack sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
                <FormControl
                    sx={{
                        width: "100%",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        color: "#333",
                    }}>
                    <InputLabel
                        htmlFor="my-input"
                        sx={{ color: "#222426", fontWeight: 600, fontSize: "18px" }}>
                        First Name*
                    </InputLabel>
                    <TextField
                        id="my-input"
                        aria-describedby="my-helper-text"
                        placeholder="Enter first name"
                        sx={{
                            color: "#A8AEB5",
                            border: 1,
                            borderColor: "#A8AEB5",
                            borderRadius: "4px",
                            mt: 3,
                        }}
                        inputProps={{
                            sx: {
                                "&::placeholder": {
                                    color: "#A8AEB5",
                                },
                            },
                        }}
                    />
                </FormControl>
                <FormControl
                    sx={{
                        width: "100%",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 0,
                    }}>
                    <InputLabel
                        htmlFor="my-input"
                        sx={{ color: "#222426", fontWeight: 600, fontSize: "18px" }}>
                        Last Name*
                    </InputLabel>
                    <TextField
                        id="my-input"
                        placeholder="Enter last name"
                        aria-describedby="my-helper-text"
                        sx={{
                            color: "#A8AEB5",
                            border: 1,
                            borderColor: "#A8AEB5",
                            borderRadius: "4px",
                            mt: 3,
                        }}
                        inputProps={{
                            sx: {
                                "&::placeholder": {
                                    color: "#A8AEB5",
                                },
                            },
                        }}
                    />
                </FormControl>
            </Stack>
            <Stack sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
                <FormControl
                    sx={{
                        width: "100%",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        color: "#333",
                    }}>
                    <InputLabel
                        htmlFor="my-input"
                        sx={{ color: "#222426", fontWeight: 600, fontSize: "18px" }}>
                        Company's Name (Optional)
                    </InputLabel>
                    <TextField
                        placeholder="Enter company's name"
                        id="my-input"
                        aria-describedby="my-helper-text"
                        sx={{
                            color: "#A8AEB5",
                            border: 1,
                            borderColor: "#A8AEB5",
                            borderRadius: "4px",
                            mt: 3,
                        }}
                        inputProps={{
                            sx: {
                                "&::placeholder": {
                                    color: "#A8AEB5",
                                },
                            },
                        }}
                    />
                </FormControl>
                <FormControl
                    sx={{
                        width: "100%",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        color: "#333",
                    }}>
                    <InputLabel
                        htmlFor="my-input"
                        sx={{ color: "#222426", fontWeight: 600, fontSize: "18px" }}>
                        Email Address*
                    </InputLabel>
                    <TextField
                        placeholder="Enter email address"
                        id="my-input"
                        aria-describedby="my-helper-text"
                        sx={{
                            color: "#A8AEB5",
                            border: 1,
                            borderColor: "#A8AEB5",
                            borderRadius: "4px",
                            mt: 3,
                        }}
                        inputProps={{
                            sx: {
                                "&::placeholder": {
                                    color: "#A8AEB5",
                                },
                            },
                        }}
                    />
                </FormControl>
            </Stack>
        </Paper>
    );
};

export default ContactForm;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        docContainer: {
            height: "70vh",
            width: "40%",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            margin: "auto",
            position: "absolute",
            top: "20%",
            left: "40%",
            // transform: "translate(-50%, -50%)",
            // zIndex: 10,
        },
    })
);
