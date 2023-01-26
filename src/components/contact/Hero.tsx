import React from "react";
import { makeStyles } from "@mui/styles";
import { useAppContext } from '../../contexts/AppProvider';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Stack, Theme, Typography, Tab, Tabs } from "@mui/material";

import { Button } from "../";
import {
    heroBig,
    heroIllustration,
    heroMedium,
    heroSmall,
    clouds,
} from "../../assets/svg";
import { contactBg } from "../../assets/images";

const Hero: React.FC = () => {
    const classes = useStyles();
    const { currentMode } = useAppContext();

    return (
        <Stack direction="column" className={classes.root}>
            <Box className={classes.container} sx={{ backgroundColor: currentMode === "light" ? "#E9EBED" : "#383838" }}>
                <img src={contactBg} alt="" className={classes.heroImage} />
                <Box className={classes.header}>
                    <Box>
                        <Typography
                            // sx={{ color: currentMode === "light"? "#3E4245" : "#fff" }}
                            color={currentMode === "light" ? "#3E4245" : "#F5F5F5"}
                            component="h1"
                        >
                            Contact Us
                        </Typography>
                        <Typography
                            // sx={{ color: currentMode === "light"? "#3E4245" : "#fff" }}
                            color={currentMode === "light" ? "#3E4245" : "#D3D7DA"}
                            component="p">
                            We welcome your message, please reach out to us through one of the contact methods listed.
                        </Typography>
                    </Box>

                </Box>
                <Box className={classes.lowerContainer} sx={{ backgroundColor: currentMode === "light" ? "#fff" : "#121212" }}>
                    <Box className={classes.header}>
                        <Box>
                            <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                                <LocalPhoneOutlinedIcon sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }}
                                    fontSize="large" />
                                <Typography sx={{ color: currentMode === "light" ? "#081F4A" : "#D3D7DA" }}
                                    component="p">08012345678</Typography>
                            </Stack>
                            <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                                <EmailOutlinedIcon sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }} fontSize="large" />
                                <Typography sx={{ color: currentMode === "light" ? "#081F4A" : "#D3D7DA" }}
                                    component="p">
                                    support@zapi.ai</Typography>
                            </Stack>
                            <Stack direction="row" spacing={2} alignItems="center" mt={3}>
                                <TwitterIcon sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }} fontSize="large" />
                                <InstagramIcon sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }} fontSize="large" />
                                <YouTubeIcon sx={{ color: currentMode === "light" ? "#081F4A" : "#fff" }} fontSize="large" />
                            </Stack>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Stack>
    );
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        // height: "693px",
        // background: theme.palette.primary.main,
        // backgroundImage: `url(${clouds})`,
        // backgroundPosition: "center",
        // backgroundSize: "100% 100%",
        // backgroundRepeat: "no-repeat",
        // padding: "24px 3em",
        // [theme.breakpoints.down("laptop")]: {
        //     height: "475px",
        //     padding: "24px 32px",
        //     backgroundImage: `url(${clouds})`,
        // },
        // [theme.breakpoints.down("tablet")]: {
        //     height: "fit-content",
        //     padding: "24px 16px",
        //     backgroundImage: `url(${clouds})`,
        // },
    },
    container: {
        // backgroundColor: currentMode === "light"? "#E9EBED" : "#383838",
        minHeight: "498px",
        // width: "100%",
        // display: "flex",
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "space-between",
        position: "relative",
        // marginTop: "80px",
        // [theme.breakpoints.down("laptop")]: {
        //     marginTop: "54px",
        // },
        // [theme.breakpoints.down("tablet")]: {
        //     marginTop: "64px",
        // },
    },
    lowerContainer: {
        // backgroundColor: "#fff",
        width: "100%",
        minHeight: "50vh",
        // height: '50vh',
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
            // alignItems: "center",
            // textAlign: "center",
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
        '@media screen and (max-width: 1280px)': {
            width: "50%",
        },
        width: "40%",
        // height: "50%",
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
        // flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "6rem 1rem 6rem 6rem",
        // backgroundColor: "#d1d1d1",
        // backgroundImage: `url(${clouds})`,
        width: "100%",
        opacity: .98,
        "& h1": {
            fontSize: "42px",
            fontWeight: "bold",
            // textAlign: "center",
            // color: "#3E4245",
            lineHeight: "60px",

            "@media screen and (max-width: 1024px)": {
                fontSize: "36px",
                lineHeight: "50px",

            },
            "@media screen and (max-width: 375px)": {

            },
        },
        "& p": {
            // textAlign: "center",
            fontSize: "18px",
            // color: "#3E4245",
            lineHeight: "20px",
            width: "55%",

            "@media screen and (max-width: 1024px)": {
                fontSize: "12px",

            },
            "@media screen and (max-width: 375px)": {

            },
        },

        "@media screen and (max-width: 1024px)": {
            padding: "150px 1rem 70px 1rem",

        },
        "@media screen and (max-width: 375px)": {

        },
    }
}));

export default Hero;
