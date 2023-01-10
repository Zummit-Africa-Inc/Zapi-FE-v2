import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Stack, Theme, Typography } from "@mui/material";

import { linkedinIcon, twitterIcon, youtubeIcon} from "../../assets/svg";
import { footerIllustration } from "../../assets/svg";
import { FOOTERLINKS } from "./FOOTERLINKS";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Stack direction="row" width="100%" flexWrap="wrap" mb="32px">
        {FOOTERLINKS.map((item, index) => (
          <Box key={index} className={classes.container}>
            <>
            <Typography sx={{fontSize: "18px",fontWeight: 600,lineHeight: "22px",color: "#F5F5F5",mb: "40px",textTransform: "uppercase"}}>
              {item.title}
            </Typography>
            <Stack direction="column" spacing="24px">
              {item.links.map((link, index) => (
                <Link key={index} to={`/${link.link}`}>
                  <Typography fontSize="16px" fontWeight={400} lineHeight="24px" color="#FFF">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </Stack>
            </>
          </Box>
        ))}
      </Stack>
      {/* Divider */}
      <hr className={classes.divider} />
      <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
        <Typography fontSize="14px" fontWeight={900} lineHeight="30px" color="white">
          &copy; {new Date().getFullYear()} ZAPI
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <a
            href="https://twitter.com/zummitafrica"
            target="_blank"
            rel="noopener noreferrer">
            <img src={twitterIcon} alt="twitter logo" />
          </a>
          <a
            href="https://linkedin.com/company/zummit-africa/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={linkedinIcon} alt="linkedin logo" />
          </a>
          <a
            href="https://youtube.com/channel/UC64g6K2pxfFwbFufOCcTJfQ"
            target="_blank"
            rel="noopener noreferrer">
            <img src={youtubeIcon} alt="youtube logo" />
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#081F4A",
    padding: "64px 109px",
    backgroundImage: `url(${footerIllustration})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
    [theme.breakpoints.down("tablet")]: {
      padding: "64px 32px",
    },
    [theme.breakpoints.down("mobile")]: {
      padding: "64px 16px",
      backgroundPositionX: "none",
      backgroundPositionY: "top",
    },
  },
  container: {
    width: "300px",
    height: "fit-content",
    margin: "0 0 1rem",
  },
  icon: {
    fill: "#FFEA00",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "#D4D4D4",
    marginBottom: "1rem",
    color: "#F5F5F5",
  },
}));

export default Footer;

