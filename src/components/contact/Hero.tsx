import React from "react";
import { makeStyles } from "@mui/styles";
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

    return (
        <Stack direction="column" className={classes.root}>
            <Box className={classes.container}>
            <img src={contactBg} alt=""  className={classes.heroImage} />
                <Box className={classes.header}>
                <Box>
                    <Typography component="h1">Contact Us</Typography>
                    <Typography component="p">
                    We welcome your message, please reach out to us through one of the contact methods listed.
                    </Typography>
                </Box>
                
                </Box>
                <Box className={classes.lowerContainer}>
                <Box className={classes.header}>
                <Box>
                    <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                    <LocalPhoneOutlinedIcon sx={{ color:"#081F4A" }} fontSize="large" />
                    <Typography component="p">08012345678</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center" mb={3}>
                    <EmailOutlinedIcon sx={{ color:"#081F4A" }} fontSize="large" />
                    <Typography component="p">support@zapi.ai</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center" mt={3}>
                    <TwitterIcon sx={{ color:"#081F4A" }} fontSize="large" />
                    <InstagramIcon sx={{ color:"#081F4A" }} fontSize="large" />
                    <YouTubeIcon sx={{ color:"#081F4A" }} fontSize="large" />
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
        backgroundColor: "#E9EBED",
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
        backgroundColor: "#fff",
        width: "100%",
        height: '50vh',
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
            color: "#3E4245",
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
            color: "#3E4245",
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
