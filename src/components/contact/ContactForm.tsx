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
import { useAppContext } from "../../contexts/AppProvider";
import { AttachFile } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ContactForm = () => {
    const classes = useStyles();
    const { currentMode } = useAppContext();

    return (
        <Box
            sx={{
                width: "90%",
                display: "grid",
                gridTemplateColumns: "3fr 2fr 7fr",
                gridTemplateRows: "1fr 4fr 7fr",
                gridTemplateAreas: `". . ."
                "grid-1 . grid3"
                "grid2 . grid3"`,
                paddingLeft: "4rem",
                paddingTop: "4rem",
                paddingBottom: "4rem",
                alignItems: "center",
                "@media (max-width: 900px)": {
                    width: "100%",
                    paddingLeft: "1rem",
                    paddingTop: "2rem",
                    paddingRight: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: "none !important",
                },
            }}>
            <Box
                sx={{
                    gridArea: "grid-1",
                    "@media (max-width: 900px)": {
                        pb: 3,
                    },
                }}
                className={classes.header}>
                <Box>
                    <Typography
                        color={currentMode === "light" ? "#3E4245" : "#F5F5F5"}
                        component="h1">
                        Contact Us
                    </Typography>
                    <Typography
                        color={currentMode === "light" ? "#3E4245" : "#D3D7DA"}
                        component="p">
                        We welcome your message, please reach out to us through one of the
                        contact methods listed.
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    gridArea: "grid2",
                    "@media (max-width: 900px)": {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    },
                    "@media (max-width: 475px)": {
                        pt: 2,
                        justifyContent: "flex-start",
                    }

                }}
                className={classes.header}>
                <Box
                    sx={{
                        "@media (max-width: 900px)": {
                            pt: 3,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        },
                        "@media (max-width: 475px)": {
                            flexDirection: "column"
                        }
                    }}>
                    <Stack
                        className={classes.iconStack}
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mb={3}>
                        <LocalPhoneOutlinedIcon
                            sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }}
                            fontSize="large"
                        />
                        <Typography
                            sx={{
                                color: currentMode === "light" ? "#081F4A" : "#D3D7DA",
                            }}
                            component="p">
                            08012345678
                        </Typography>
                    </Stack>
                    <Stack
                        className={classes.iconStack}
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mb={3}>
                        <EmailOutlinedIcon
                            sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }}
                            fontSize="large"
                        />
                        <Typography
                            sx={{
                                color: currentMode === "light" ? "#081F4A" : "#D3D7DA",
                            }}
                            component="p">
                            support@zapi.ai
                        </Typography>
                    </Stack>
                    <Stack
                        className={classes.iconStack}
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        mt={3}>
                        <TwitterIcon
                            sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }}
                            fontSize="large"
                        />
                        <InstagramIcon
                            sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }}
                            fontSize="large"
                        />
                        <YouTubeIcon
                            sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }}
                            fontSize="large"
                        />
                    </Stack>
                </Box>
            </Box>
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
                            sx={{ color: currentMode === "light" ? "#222426" : "#F5F5F5", fontWeight: 600, fontSize: "18px" }}>
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
                            sx={{ color: currentMode === "light" ? "#222426" : "#F5F5F5", fontWeight: 600, fontSize: "18px" }}>
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
                            width: "90%",
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
                            sx={{ color: currentMode === "light" ? "#222426" : "#F5F5F5", fontWeight: 600, fontSize: "18px" }}>
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
                            sx={{ color: currentMode === "light" ? "#222426" : "#F5F5F5", fontWeight: 600, fontSize: "18px" }}>
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
                                sx={{ color: currentMode === "light" ? "#3E4245" : "#BEC2C8", fontWeight: 400, fontSize: "14px" }}>
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
                        sx={{ color: currentMode === "light" ? "#060607" : "#BEC2C8", fontWeight: 600, fontSize: "18px", p: 0 }}>
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
                        <Card
                            sx={{
                                p: 1,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                '@media (min-width: 1024px)': {
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
                                p: 1,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                '@media (min-width: 1024px)': {
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
                                    Custom API Development
                                </Typography>

                            </Stack>
                        </Card>
                        <Card
                            sx={{
                                p: 1,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                '@media (min-width: 1024px)': {
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
                                p: 1,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                '@media (min-width: 1024px)': {
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
                                p: 1,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                '@media (min-width: 1024px)': {
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
                    </Stack>
                    <Typography
                        sx={{ color: currentMode === "light" ? "#060607" : "#F5F5F5", fontWeight: 600, fontSize: "18px", mt: 2 }}>
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
                                sx={{ color: currentMode === "light" ? "#5A5F65" : "#BEC2C8", fontWeight: 400, fontSize: "16px" }}>
                                Upload a file with details
                            </Typography>
                            <Typography
                                sx={{ color: currentMode === "light" ? "#5A5F65" : "#BEC2C8", fontWeight: 400, fontSize: "10px" }}>
                                Pdf, doc, docx, jpg, png, avi, mp4, txt
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography
                        sx={{ color: currentMode === "light" ? "#5A5F65" : "#BEC2C8", fontWeight: 400, fontSize: "14px", mt: 2 }}>
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
                                sx={{ color: currentMode === "light" ? "#5A5F65" : "#BEC2C8", fontWeight: 400, fontSize: "14px" }}>
                                I agree to the zapi.ai{" "}
                                <Link
                                    className={classes.link} to="#">
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
        </Box>
    );
};

export default ContactForm;
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
        },
        header: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            opacity: 0.98,
            "& h1": {
                fontSize: "42px",
                fontWeight: "bold",
                lineHeight: "60px",

                "@media screen and (max-width: 1024px)": {
                    fontSize: "36px",
                    lineHeight: "50px",
                },
                "@media screen and (max-width: 375px)": {},
            },
            "& p": {
                fontSize: "18px",
                lineHeight: "20px",

                "@media screen and (max-width: 1024px)": {
                    fontSize: "12px",
                },
                "@media screen and (max-width: 900px)": {
                    width: "55%",
                },
            },

            "@media screen and (max-width: 1024px)": {},
            "@media screen and (max-width: 375px)": {},
        },
        headerContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10rem",
        },

        iconStack: {
            "@media (max-width: 900px)": {
                marginTop: "0 !important",
                marginBottom: "0 !important",
            },
            '@media (max-width: 900px) and (min-width: 600px)': {
                paddingRight: "4rem",
            },
        },

    })
);
