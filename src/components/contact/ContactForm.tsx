import React from "react";
import {
    Stack,
    Theme,
    Typography,
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
import ContactBox from "./ContactBox";

const ContactForm: React.FC = () => {
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
                    '&nth-of-type(2)': {
                        order:2
                    }
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
                        order: 2,
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
            <ContactBox />
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
