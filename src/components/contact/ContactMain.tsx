import React from "react";
import { makeStyles } from "@mui/styles";
import { useAppContext } from "../../contexts/AppProvider";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Stack, Theme, Typography, Tab, Tabs } from "@mui/material";
import ContactForm from "./ContactForm";

import { Button } from "../";
import {
    heroBig,
    heroIllustration,
    heroMedium,
    heroSmall,
    clouds,
} from "../../assets/svg";
import { contactBg } from "../../assets/images";

const ContactMain: React.FC = () => {
    const classes = useStyles();
    const { currentMode } = useAppContext();

    return (
        <Stack className={classes.root}
            sx={{
                //          background:
                //     currentMode === "light" ? " rgb(233,235,237) " : "#383838",
                // background:
                //     currentMode === "light"
                //         ? "linear-gradient(180deg, rgba(233,235,237,1) 50%, rgba(255,255,255,1) 50%)"
                //         : "linear-gradient(180deg, rgba(56,56,56,1) 50%, rgba(0,0,0,1) 50%)",
                backgroundImage: `url(${contactBg})`,
                backgroundPosition: "right",
                backgroundSize: "70% 100%",
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
        height: "100%",
        // justifyContent: "center",
        // alignItems: "center",
    },
    contactForm: {
        // place contact form in the middle of the page
        // display: "block",
        width: "50%",
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
    },
    container: {
        minHeight: "498px",
        height: "110vh",
        background: theme.palette.primary.main,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.down("laptop")]: {
            height: "475px",
            padding: "24px 32px",
            backgroundImage: `none`,
        },
        [theme.breakpoints.down("tablet")]: {
            height: "fit-content",
            padding: "24px 16px",
            backgroundImage: `none`,
        },
    },
    lowerContainer: {
        width: "100%",
        minHeight: "50vh",
    },
    heroText: {
        width: "656px",
        maxWidth: "",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        [theme.breakpoints.down("laptop")]: {
            width: "100%",
        },
        "& h1": {
            fontWeight: 600,
            fontSize: "72px",
            lineHeight: "80px",
            letterSpacing: "-0.04em",
            color: "#3E4245",
            marginBottom: "24px",
            [theme.breakpoints.down("laptop")]: {
                fontSize: "48px",
                lineHeight: "56px",
            },
        },
        "& p": {
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "28px",
            textAlign: "left",
            color: "#3E4245",
            marginBottom: "40px",
            [theme.breakpoints.down("laptop")]: {
                fontSize: "18px",
                lineHeight: "22px",
            },
        },
    },
    heroImage: {
        "@media screen and (max-width: 1280px)": {
            width: "50%",
        },
        width: "40%",
        display: "block",
        position: "absolute",
        objectFit: "contain",
        right: 0,
        top: 0,
        [theme.breakpoints.down("laptop")]: {
            display: "none",
        },
    },
    header: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "6rem 1rem 6rem 6rem",
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
            width: "55%",

            "@media screen and (max-width: 1024px)": {
                fontSize: "12px",
            },
            "@media screen and (max-width: 375px)": {},
        },

        "@media screen and (max-width: 1024px)": {
        },
        "@media screen and (max-width: 375px)": {},
    },
}));

export default ContactMain;
