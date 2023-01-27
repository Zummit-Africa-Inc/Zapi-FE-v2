import React from "react";
import { CardContent, Radio, Stack, Theme } from "@mui/material";
import { createStyles, makeStyles, styled } from "@mui/styles";
import {
    Paper,
    Box,
    Grid,
    Input,
    FormControl,
    InputLabel,
    TextField,
    Checkbox,
    InputBase,
    Card,
    Typography,
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
            <Stack
                sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                <FormControl
                    sx={{
                        width: "100%",
                        // p: 2,
                        display: "flex",
                        flexDirection: "row",
                        color: "#333",
                        alignItems: "center",
                    }}>
                    <Checkbox sx={{ color: "#A8AEB5" }} />
                    <Box>
                        <Typography
                            sx={{ color: "#3E4245", fontWeight: 400, fontSize: "14px" }}>
                            I would like to be contacted via phone
                        </Typography>
                    </Box>
                </FormControl>
            </Stack>
            <Stack sx={{ width: "100%", display: "flex", flexDirection: "column", p:1 }}>
                <Typography
                    sx={{ color: "#060607", fontWeight: 600, fontSize: "18px" }}>
                    What is your goal?
                </Typography>
                <Stack sx={{ width: "100%", display: "flex", flexDirection: "row", gap:2 }}>
                    <Card
                        sx={{
                            width: "100%",
                            p: 1,
                            mt: 2,
                            backgroundColor: "#fff",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                        }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Radio sx={{ color: "#A8AEB5" }} />
                            <Box>
                                <Typography
                                    sx={{ color: "#3E4245", fontWeight: 600, fontSize: "14px" }}>
                                    Partnership Inquiry
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            width: "100%",
                            p: 1,
                            mt: 2,
                            backgroundColor: "#fff",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                        }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Radio sx={{ color: "#A8AEB5" }} />
                            <Box>
                                <Typography
                                    sx={{ color: "#3E4245", fontWeight: 600, fontSize: "14px" }}>
                                    Custom API Development
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            width: "100%",
                            p: 1,
                            mt: 2,
                            backgroundColor: "#fff",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                        }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Radio sx={{ color: "#A8AEB5" }} />
                            <Box>
                                <Typography
                                    sx={{ color: "#3E4245", fontWeight: 600, fontSize: "14px" }}>
                                    Custom Pricing
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            width: "100%",
                            p: 1,
                            mt: 2,
                            backgroundColor: "#fff",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                        }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Radio sx={{ color: "#A8AEB5" }} />
                            <Box>
                                <Typography
                                    sx={{ color: "#3E4245", fontWeight: 600, fontSize: "14px" }}>
                                    Get Support
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            width: "100%",
                            p: 1,
                            mt: 2,
                            backgroundColor: "#fff",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                        }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Radio sx={{ color: "#A8AEB5" }} />
                            <Box>
                                <Typography
                                    sx={{ color: "#3E4245", fontWeight: 600, fontSize: "14px" }}>
                                    Others
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Stack>
                <Typography sx={{ color: "#060607", fontWeight: 600, fontSize: "18px", mt:2 }}>
                    Please give us more details about your request*
                </Typography>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="Enter message here"
                    variant="outlined"
                    sx={{
                        width: "100%",
                        color: "#A8AEB5",
                        border: 1,
                        borderColor: "#A8AEB5",
                        borderRadius: "4px",
                    }}
                />
                
            </Stack>
        </Paper>
    );
};

export default ContactForm;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        docContainer: {
            // height: "70vh",
            width: "60%",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            margin: "auto",
            position: "absolute",
            top: "20%",
            left: "30%",
            // transform: "translate(-50%, -50%)",
            // zIndex: 10,
        },
    })
);
