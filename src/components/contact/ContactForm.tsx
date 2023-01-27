import React from "react";
import {
    CardContent,
    Icon,
    Button,
    Radio,
    Stack,
    Theme,
    FormControl,
    InputLabel,
    TextField,
    Checkbox,
    Card,
    Typography,
    Paper,
    Box,
} from "@mui/material";
import { createStyles, makeStyles, styled } from "@mui/styles";

import { AttachFile } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
            <Stack
                sx={{ width: "100%", display: "flex", flexDirection: "column", p: 1 }}>
                <Typography
                    sx={{ color: "#060607", fontWeight: 600, fontSize: "18px" }}>
                    What is your goal?
                </Typography>
                <Stack
                    sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 3, flexWrap: "wrap", }}>
                    <Card
                        sx={{
                            // width: "18%",
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
                            // width: "18%",
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
                            // width: "18%",
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
                            // width: "18%",
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
                            // width: "18%",
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
                <Typography
                    sx={{ color: "#060607", fontWeight: 600, fontSize: "18px", mt: 2 }}>
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
                <Stack
                    sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        mt: 2,
                    }}>
                    <AttachFile
                        className={classes.iconStyle}
                        sx={{ color: "#5A5F65" }}
                        fontSize="large"
                    />
                    <Stack
                        sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                        <Typography
                            sx={{ color: "#5A5F65", fontWeight: 400, fontSize: "16px" }}>
                            Upload a file with details
                        </Typography>
                        <Typography
                            sx={{ color: "#5A5F65", fontWeight: 400, fontSize: "10px" }}>
                            Pdf, doc, docx, jpg, png, avi, mp4, txt
                        </Typography>
                    </Stack>
                </Stack>
                <Typography
                    sx={{ color: "#5A5F65", fontWeight: 400, fontSize: "14px", mt: 2 }}>
                    *Please check the box before submitting
                </Typography>
                {/* <Stack sx={{ width: "100%", display: "flex", flexDirection: "row", gap:2, mt:2 }}>
                    <Checkbox sx={{ color: "#A8AEB5" }} />
                    <Typography sx={{ color: "#5A5F65", fontWeight: 400, fontSize: "14px" }}>
                        I agree to the terms and conditions
                    </Typography>
                    </Stack> */}
                <FormControl
                    sx={{
                        width: "100%",
                        // p: 2,
                        display: "flex",
                        flexDirection: "row",
                        // color: "#333",
                        alignItems: "center",
                    }}>
                    <Checkbox sx={{ color: "#A8AEB5" }} />
                    <Box>
                        <Typography
                            sx={{ color: "#5A5F65", fontWeight: 400, fontSize: "14px" }}>
                            I agree to the zapi.ai{" "}
                            <Link className={classes.link} to="#">
                                Privacy Policy
                            </Link>
                        </Typography>
                    </Box>
                </FormControl>
            </Stack>
            <Stack sx={{ width: "100%", display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
            <Button
                    sx={{
                        width: "40%",
                        marginLeft: "auto",
                        mt: 1,
                        p:1,
                        mb:2,
                        backgroundColor: "#081F4A",
                        color: "#f2f5fa",
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: "#081F4A",
                        },
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "16px",
                    }}>
                    Send Message
                </Button>
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
        iconStyle: {
            transform: "rotate(45deg)",
        },
        link: {
            color: "#081F4A",
            textDecoration: "underline",
            fontWeight: 400,
            fontSize: "16px",
        },
    })
);
