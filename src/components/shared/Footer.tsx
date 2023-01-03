import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { linkedinIcon, twitterIcon, youtubeIcon} from "../../assets/svg";

export const footerLinks = [
  {
      title: 'Explore',
      links: [
          {
              name: 'Our APIs',
              link: './coming-soon'
          },
          {
              name: 'ZAPI Tools',
              link: './coming-soon'
          },
          {
              name: 'Zummit Africa',
              link: '/zummitafrica.com'
          },
          {
              name: 'Zummit Africa Articles',
              link: './coming-soon'
          },
      ]
  },
  {
      title: 'Company',
      links: [
          {
              name: 'About',
              link: './coming-soon'
          },
          {
              name: 'Help',
              link: './coming-soon'
          },
          {
              name: 'Status',
              link: './coming-soon'
          },
          {
              name: 'Terms & Privacy',
              link: './terms'
          },
          {
              name: 'Cookies Policy',
              link: './coming-soon'
          },
      ]
  },
  {
      title: 'Popular APIs',
      links: [
          {
              name: 'Drowsiness Detection',
              link: './coming-soon'
          },
          {
              name: 'Emotion Detection',
              link: './coming-soon'
          },
          {
              name: 'Text Summarizer',
              link: './coming-soon'
          },
          {
              name: 'Chat Bots',
              link: './coming-soon'
          },
          {
              name: 'Sentiment Analyzer',
              link: './coming-soon'
          },
      ]
  }
]
const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Stack direction="row" width="100%" flexWrap="wrap">
        {footerLinks.map((item, index) => (
          <div key={index} className={classes.container}>
            <>
              <Typography
                fontSize="18px"
                fontWeight={600}
                lineHeight="22px"
                color="#F5F5F5"
                mb={2} mt={4}>
                {item.title}
              </Typography>
              {item.links.map((link, index) => (
                <Link key={index} to={`/${link.link}`}>
                  <Typography
                    fontSize="16px"
                    fontWeight={300}
                    lineHeight="24px"
                    color="#ffffff"
                    my={2}>
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </>
          </div>
        ))}
      </Stack>
      <div className={classes.divider} />

      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="space-between">
        <Typography
          fontSize="14px"
          fontWeight={900}
          lineHeight="30px"
          color="white">
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
    </footer>
  );
};

const useStyles = makeStyles({
  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#081F4A",
    padding: "2rem 4rem",
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
    background: "#d4d4d4",
    marginBottom: "1rem",
    color: "#F5F5F5",
  },
});

export default Footer;

