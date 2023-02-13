import React, { useState, useCallback, useMemo, useEffect } from "react";
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
    FormControlLabel,
} from "@mui/material";
import { toast } from "react-toastify";
import { createStyles, makeStyles, styled } from "@mui/styles";
import { useAppContext } from "../../contexts/AppProvider";
import { AttachFile } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";


const ContactBox: React.FC = () => {

    const vite_core_url = import.meta.env.VITE_CORE_URL;


    const classes = useStyles();
    const { currentMode } = useAppContext();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [org_name, setOrgName] = useState("");
    const [phone_call, setPhoneCall] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [goal, setGoal] = useState("");
    const [checked, setChecked] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [checkedError, setCheckedError] = useState(false);

    const goalEnum = {
        Partnership: "partnership",
        Support: "support",
        Pricing: "pricing",
        Api: "api",
        Other: "other",
    };

    const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGoal((event.target as HTMLInputElement).value);
    };

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneCall(event.target.checked);
    };

    const sendContact = async () => {
        const formData = {
            firstname: firstName,
            lastname: lastName,
            org_name: org_name,
            phone_call: phone_call,
            email: email,
            message: message,
            goal: goal,
        }

        if (!firstName) {
            setFirstNameError(true);
        }
        if (!lastName) {
            setLastNameError(true);
        }
        if (!email) {
            setEmailError(true);
        }
        if (!message) {
            setMessageError(true);
        }
        if (!checked) {
            setCheckedError(true);
            toast.error("Please agree to the zapi.ai Privacy Policy");
            return
        }
        try {
            const response = await axios.post(`${vite_core_url}/contactUs/create`, formData, {
                headers: {
                    "Content-Type": "Application/json",
                },
            });
            if (response.status === 201) {
                toast.success(`${response.data.message}`);

                setFirstName("");
                setLastName("");
                setOrgName("");
                setPhoneCall(false);
                setEmail("");
                setMessage("");
                setGoal("");
                setChecked(false);
                setFirstNameError(false);
                setLastNameError(false);
                setEmailError(false);
                setMessageError(false);
                setCheckedError(false);
            }
            else {
                toast.error(`${response.data.message}`);
            }
        } catch (error) {
            toast.error(`${error}`);
        }
    };


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
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        required
                        error={firstNameError}
                        sx={{
                            color: "#A8AEB5",
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                            border: 1,
                            borderColor: "#A8AEB5",
                            borderRadius: "4px",
                            mt: 3,
                            input: {
                                color: '#A8AEB5',
                                "&::placeholder": {
                                    color: "#A8AEB5",
                                    opacity: 1,
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
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        required
                        error={lastNameError}
                        sx={{
                            color: "#A8AEB5",
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                            border: 1,
                            borderColor: "#A8AEB5",
                            borderRadius: "4px",
                            mt: 3,
                            input: {
                                color: '#A8AEB5',
                                "&::placeholder": {
                                    color: "#A8AEB5",
                                    opacity: 1,
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
                        onChange={(e) => setOrgName(e.target.value)}
                        value={org_name}
                        sx={{
                            color: "#A8AEB5",
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                            border: 1,
                            borderColor: "#A8AEB5",
                            borderRadius: "4px",
                            mt: 3,
                            input: {
                                color: '#A8AEB5',
                                "&::placeholder": {
                                    color: "#A8AEB5",
                                    opacity: 1,
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
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        error={emailError}
                        sx={{
                            color: currentMode === "light" ? "#A8AEB5" : "#F5F5F5",
                            backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                            border: 1,
                            borderColor: "#A8AEB5",
                            borderRadius: "4px",
                            mt: 3,
                            input: {
                                color: '#A8AEB5',
                                "&::placeholder": {
                                    color: "#A8AEB5",
                                    opacity: 1,
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
                    <Checkbox
                        onChange={handleCheck}
                        checked={phone_call}
                        sx={{ color: "#A8AEB5" }}
                    />
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
                <FormControl
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
                            // width: "90%",
                        },
                    }}>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 2,
                        }}
                        value={goal}
                        onChange={handleGoalChange}
                    >
                        <Card
                            sx={{
                                p: 0.5,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                maxWidth: "45%",
                                "@media (min-width: 1024px)": {
                                    maxWidth: "23%",
                                },
                                display: "flex",
                            }}>
                            <FormControlLabel
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}
                                value="partnership"
                                control={<Radio sx={{ color: "#BEC2C8" }} />}
                                label="Partnership Inquiry"
                            />
                        </Card>
                        <Card
                            sx={{
                                p: 0.5,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                maxWidth: "45%",
                                "@media (min-width: 1024px)": {
                                    maxWidth: "23%",
                                },
                                display: "flex",
                            }}>
                            <FormControlLabel
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}
                                value="api"
                                control={<Radio sx={{ color: "#BEC2C8" }} />}
                                label="Custom API Development"
                            />
                        </Card>
                        <Card
                            sx={{
                                p: 0.5,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                maxWidth: "45%",
                                "@media (min-width: 1024px)": {
                                    maxWidth: "23%",
                                },
                                display: "flex",
                            }}>
                            <FormControlLabel
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}
                                value="pricing"
                                control={<Radio sx={{ color: "#BEC2C8" }} />}
                                label="Custom Pricing"
                            />
                        </Card>
                        <Card
                            sx={{
                                p: 0.5,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                maxWidth: "45%",
                                "@media (min-width: 1024px)": {
                                    maxWidth: "23%",
                                },
                                display: "flex",
                            }}>
                            <FormControlLabel
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}
                                value="support"
                                control={<Radio sx={{ color: "#BEC2C8" }} />}
                                label="Get Support"
                            />
                        </Card>
                        <Card
                            sx={{
                                p: 0.5,
                                mt: 2,
                                backgroundColor: currentMode === "light" ? "#fff" : "#272727",
                                border: 1,
                                borderColor: "#D3D7DA",
                                borderRadius: "8px",
                                maxWidth: "45%",
                                "@media (min-width: 1024px)": {
                                    maxWidth: "23%",
                                },
                                display: "flex",
                            }}>
                            <FormControlLabel
                                sx={{
                                    color: currentMode === "light" ? "#3E4245" : "#F5F5F5",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                }}
                                value="other"
                                control={<Radio sx={{ color: "#BEC2C8" }} />}
                                label="Others"
                            />
                        </Card>
                    </RadioGroup>
                </FormControl>
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
                    placeholder="Enter message here"
                    onChange={(e) => setMessage(e.target.value)}
                    variant="outlined"
                    value={message}
                    required
                    error={messageError}
                    sx={{
                        width: "100%",
                        color: "#A8AEB5",
                        border: 1,
                        borderColor: "#A8AEB5",
                        borderRadius: "4px",
                        input: {
                            color: '#A8AEB5',
                            "&::placeholder": {
                                color: "#A8AEB5",
                                opacity: 1,
                                fontWeight: 400,
                            },
                        },
                    }}
                    inputProps={{
                        style: {
                            color: currentMode === "light" ? "#A8AEB5" : "#A8AEB5",
                            opacity: 1,
                            fontWeight: 400,
                            fontSize: "18px",
                        },
                    }
                    }
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
                    <Checkbox
                        // value={checked}
                        required
                        onChange={(e) => setChecked(e.target.checked)}
                        sx={{ color: "#A8AEB5" }} />
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
                    onClick={sendContact}
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
        },
    })
);
