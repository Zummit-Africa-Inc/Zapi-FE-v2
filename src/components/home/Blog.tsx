import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { FiArrowRight } from "react-icons/fi";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Theme,
  Typography,
} from "@mui/material";

import { useAppContext } from "../../contexts/AppProvider";
import {
  blogIllustrationLight,
  blogIllustrationDark,
  blogPost1,
  blogPost2,
} from "../../assets/svg";

const blogPosts = [
  {
    image: blogPost2,
    title: "Communicating with Interaction Articles",
    date: "Dec 21, 2022",
  },
  {
    image: blogPost1,
    title: "Interactive Artificial Intelligence Articles",
    date: "Nov 11, 2022",
  },
];

const Blog: React.FC = () => {
  const { currentMode } = useAppContext();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        {blogPosts.map((post, index) => (
          <Link key={index} to={`/blog/`}>
            <Card className={classes.card}>
              <CardMedia
                sx={{ height: "192px", borderRadius: 0 }}
                image={post.image}
              />
              <CardContent>
                <Typography
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                    fontSize: "23px",
                    margin: "20px 0 28px",
                  }}>
                  {post.title}
                </Typography>
                <Stack
                  width="100%"
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between">
                  <Typography color="primary.contrastText">
                    Read More
                  </Typography>
                  <Typography sx={{ color: "#929AA3" }}>{post.date}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Link>
        ))}
        <Link
          to="/"
          className={classes.link}
          style={{
            borderColor: currentMode === "dark" ? "#FFEA00" : "#081F4A",
            color: currentMode === "dark" ? "#FFEA00" : "#081F4A",
          }}>
          View all Zapi Blog Posts
          <FiArrowRight />
        </Link>
      </Box>
      <Box className={classes.container2}>
        <Typography variant="h1">AI Education</Typography>
        <Typography
          style={{
            borderColor: currentMode === "dark" ? "#F5F5F5" : "#060607",
            color: currentMode === "dark" ? "#F5F5F5" : "#060607",
          }}>
          Explore our blog posts to get more insight on AI.
        </Typography>
        <img
          src={
            currentMode === "dark"
              ? blogIllustrationDark
              : blogIllustrationLight
          }
          alt=""
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
};

export default Blog;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "64px 108px",
    gap: "20%",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
    [theme.breakpoints.down("laptop")]: {
      height: "fit-content",
      flexDirection: "column-reverse",
      padding: "64px 32px",
    },
    [theme.breakpoints.down("mobile")]: {
      padding: "64px 16px",
    },
  },
  wrapper: {
    width: "580px",
    maxWidth: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    [theme.breakpoints.down("tablet")]: {
      alignItems: "center",
    },
  },
  card: {
    "&.MuiCard-root": {
      background: "transparent",
      boxShadow: 0,
      margin: "18px 0",
      "& .MuiCardMedia": {
        width: "100%",
        objectFit: "contain",
      },
    },
  },
  container2: {
    "& h1": {
      width: "524px",
      maxWidth: "90%",
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: "56px",
      letterSpacing: "-0.04em",
      textAlign: "left",
      color: theme.palette.primary.contrastText,
      [theme.breakpoints.down("laptop")]: {
        fontSize: "34px",
        lineHeight: "40px",
        textAlign: "center",
      },
      [theme.breakpoints.down("tablet")]: {
        textAlign: "left",
      },
    },
    "& p": {
      fontSize: "20px",
      lineHeight: "28px",
      color: "#3E4245",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "18px",
        lineHeight: "22px",
      },
    },
  },
  link: {
    width: "330px",
    maxWidth: "70%",
    height: "54px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 18px",
    gap: "8px",
    border: "1px solid",
    borderRadius: "4px",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "22px",
    cursor: "pointer",
    [theme.breakpoints.down("mobile")]: {
      textAlign: "center",
      width: "274px",
      maxWidth: "100%",
    },
  },
}));
