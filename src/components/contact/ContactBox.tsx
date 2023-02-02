import React from "react";
import {
    Button,
    Radio,
    RadioGroup,
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
import { useAppContext } from "../../contexts/AppProvider";
import { AttachFile } from "@mui/icons-material";
import { Link } from "react-router-dom";


const ContactBox: React.FC = () => {
    const classes = useStyles();
    const { currentMode } = useAppContext();
    return (
        <Paper
            elevation={3}
            className={classes.docContainer}
            sx={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                gridArea: "grid3",
                p: 2,
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                backgroundColor: currentMode === "light" ? "#fff" : "#1E1E1E",
                width: "100%",
                "@media (max-width: 600px)": {
                    width: "100%",
                    left: 0,
                    right: 0,
                },
            }}>
            <Stack
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    "@media (max-width: 600px)": {
                        flexDirection: "column",
                        width: "100%",
                    },
                }}>
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
                        sx={{
                            color: currentMode === "light" ? "#222426" : "#F5F5F5",
                            fontWeight: 600,
                            fontSize: "18px",
                        }}>
                        First Name*
                    </InputLabel>
                    <TextField
                        id="my-input"
                        aria-describedby="my-helper-text"
                        placeholder="Enter first name"
                        sx={{
                            color: "#A8AEB5",
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
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
                        sx={{
                            color: currentMode === "light" ? "#222426" : "#F5F5F5",
                            fontWeight: 600,
                            fontSize: "18px",
                        }}>
                        Last Name*
                    </InputLabel>
                    <TextField
                        id="my-input"
                        placeholder="Enter last name"
                        aria-describedby="my-helper-text"
                        sx={{
                            color: "#A8AEB5",
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
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
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    "@media (max-width: 600px)": {
                        flexDirection: "column",
                        width: "100%",
                    },
                }}>
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
                        sx={{
                            color: currentMode === "light" ? "#222426" : "#F5F5F5",
                            fontWeight: 600,
                            fontSize: "18px",
                        }}>
                        Company's Name (Optional)
                    </InputLabel>
                    <TextField
                        placeholder="Enter company's name"
                        id="my-input"
                        aria-describedby="my-helper-text"
                        sx={{
                            color: "#A8AEB5",
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
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
                        sx={{
                            color: currentMode === "light" ? "#222426" : "#F5F5F5",
                            fontWeight: 600,
                            fontSize: "18px",
                        }}>
                        Email Address*
                    </InputLabel>
                    <TextField
                        placeholder="Enter email address"
                        id="my-input"
                        aria-describedby="my-helper-text"
                        sx={{
                            color: currentMode === "light" ? "#A8AEB5" : "#F5F5F5",
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
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
                        display: "flex",
                        flexDirection: "row",
                        color: "#333",
                        alignItems: "center",
                    }}>
                    <Checkbox sx={{ color: "#A8AEB5" }} />
                    <Box>
                        <Typography
                            sx={{
                                color: currentMode === "light" ? "#3E4245" : "#BEC2C8",
                                fontWeight: 400,
                                fontSize: "14px",
                            }}>
                            I would like to be contacted via phone
                        </Typography>
                    </Box>
                </FormControl>
            </Stack>
            <Stack
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: 0,
                }}>
                <Typography
                    sx={{
                        color: currentMode === "light" ? "#060607" : "#BEC2C8",
                        fontWeight: 600,
                        fontSize: "18px",
                        p: 0,
                    }}>
                    What is your goal?
                </Typography>
                <Stack
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        gap: 3,
                        flexWrap: "wrap",
                        p: 0,
                        "@media (min-width: 1300px)": {
                            flexWrap: "nowrap",
                        },
                        "@media (max-width: 600px)": {
                            flexDirection: "column",
                            width: "90%",
                        },
                    }}>

                    {/* TODO: Add radio group functionality */}
                    {/* <RadioGroup> */}

                    <Card
                        sx={{
                            p: 0.5,
                            mt: 2,
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                            "@media (min-width: 1024px)": {
                                maxWidth: "20%",
                            },
                            display: "flex",
                        }}>
                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                pb: 0,
                            }}>
                            <Radio sx={{ color: "#A8AEB5", p: 1 }} />
                            <Typography
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}>
                                Partnership Inquiry
                            </Typography>
                        </Stack>
                    </Card>
                    <Card
                        sx={{
                            p: 0.5,
                            mt: 2,
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                            "@media (min-width: 1024px)": {
                                maxWidth: "25%",
                            },
                            display: "flex",
                        }}>
                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                pb: 0,
                            }}>
                            <Radio sx={{ color: "#A8AEB5", p: 1 }} />

                            <Typography
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}>
                                Custom API Development
                            </Typography>
                        </Stack>
                    </Card>
                    <Card
                        sx={{
                            p: 0.5,
                            mt: 2,
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                            "@media (min-width: 1024px)": {
                                maxWidth: "20%",
                            },
                            display: "flex",
                        }}>
                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Radio sx={{ color: "#A8AEB5", p: 1 }} />

                            <Typography
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}>
                                Custom Pricing
                            </Typography>
                        </Stack>
                    </Card>
                    <Card
                        sx={{
                            // width: "18%",
                            p: 0.5,
                            mt: 2,
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                            "@media (min-width: 1024px)": {
                                maxWidth: "20%",
                            },
                            display: "flex",
                        }}>
                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Radio sx={{ color: "#A8AEB5", p: 1 }} />

                            <Typography
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}>
                                Get Support
                            </Typography>
                        </Stack>
                    </Card>
                    <Card
                        sx={{
                            // width: "18%",
                            p: 0.5,
                            mt: 2,
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                            border: 1,
                            borderColor: "#D3D7DA",
                            borderRadius: "8px",
                            "@media (min-width: 1024px)": {
                                maxWidth: "20%",
                            },
                            display: "flex",
                        }}>
                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Radio sx={{ color: "#A8AEB5", p: 1 }} />

                            <Typography
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}>
                                Others
                            </Typography>
                        </Stack>
                    </Card>
                    {/* </RadioGroup> */}
                </Stack>
                <Typography
                    sx={{
                        color: currentMode === "light" ? "#060607" : "#F5F5F5",
                        fontWeight: 600,
                        fontSize: "18px",
                        mt: 2,
                    }}>
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
                            sx={{
                                color: currentMode === "light" ? "#5A5F65" : "#BEC2C8",
                                fontWeight: 400,
                                fontSize: "16px",
                            }}>
                            Upload a file with details
                        </Typography>
                        <Typography
                            sx={{
                                color: currentMode === "light" ? "#5A5F65" : "#BEC2C8",
                                fontWeight: 400,
                                fontSize: "10px",
                            }}>
                            Pdf, doc, docx, jpg, png, avi, mp4, txt
                        </Typography>
                    </Stack>
                </Stack>
                <Typography
                    sx={{
                        color: currentMode === "light" ? "#5A5F65" : "#BEC2C8",
                        fontWeight: 400,
                        fontSize: "14px",
                        mt: 2,
                    }}>
                    *Please check the box before submitting
                </Typography>

                <FormControl
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                    <Checkbox sx={{ color: "#A8AEB5" }} />
                    <Box>
                        <Typography
                            sx={{
                                color: currentMode === "light" ? "#5A5F65" : "#BEC2C8",
                                fontWeight: 400,
                                fontSize: "14px",
                            }}>
                            I agree to the zapi.ai{" "}
                            <Link className={classes.link} to="#">
                                Privacy Policy
                            </Link>
                        </Typography>
                    </Box>
                </FormControl>
            </Stack>
            <Stack
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    mt: 2,
                }}>
                <Button
                    sx={{
                        width: "40%",
                        marginLeft: "auto",
                        mt: 1,
                        p: 1,
                        mb: 2,
                        backgroundColor: currentMode === "light" ? "#081F4A" : "#FFEA00",
                        color: currentMode === "light" ? "#f2f5fa" : "#060607",
                        borderRadius: "4px",
                        "&:hover": {
                            backgroundColor: "#B8CEF7",
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

export default ContactBox;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        docContainer: {
            margin: "auto",
            top: "20%",
        },
        iconStyle: {
            transform: "rotate(45deg)",
        },
        link: {
            color: theme.palette.primary.main,
            textDecoration: "underline",
            fontWeight: 400,
            fontSize: "16px",
        }
    })
);
