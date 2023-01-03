import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { FiChevronRight} from "react-icons/fi";
import { Box, Stack, Theme, Typography } from "@mui/material";

import Button from "../shared/Buttons/CategoriesButton";
import { useAppContext } from "../../contexts/AppProvider";
import {blogIllustration, blogPost1,  blogPost2} from "../../assets/svg";

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
  }
];

const Blog: React.FC = () => {
  const { currentMode } = useAppContext();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Stack>
        <Stack className={classes.linkTag}>
          <Box className={classes.left}>
            {blogPosts.map((post, i) => (
              <Stack key={i} mb="38px">
                <Stack direction="row" alignItems="center" sx={{ width: "100%" }} spacing={2.4}>
                    <Stack>
                      <img src={post.image} alt="" width="100%" height="100%" />
                      <Stack direction="column" alignItems="space-between" sx={{ width: "100%" }} spacing={2.4}>
                        <Typography color="primary.contrastText" sx={{fontWeight: "700", fontSize: "23px", paddingTop:"10px"}}>
                          {post.title}
                        </Typography>
                        <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between">
                          <Typography color="primary.contrastText">Read More</Typography>
                          <Typography sx={{color: "#929AA3"}}>{post.date}</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              ))}
            </Box>
          </Stack>
          <Link to="/" className={classes.viewAllBtn} style={{borderColor: currentMode === "dark" ? "#FFEA00" : "#081F4A",color: currentMode === "dark" ? "#FFEA00" : "#081F4A"}}>
            View All<FiChevronRight />
          </Link>
        </Stack>
        <Stack className={classes.right}>
        <Typography color="primary.contrastText" variant="h1">AI Education</Typography>
        {/* <Typography sx={{fontWeight: 400, fontSize: "20px", lineHeight: "28px", marginTop: "0px"}} >
            Explore our blog posts to get more insight on AI.
        </Typography> */}
        <Box className={classes.heroImage}>
          <img src={blogIllustration} alt="" width="100%" height="100%" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Blog;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "834px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4rem 6.7rem",
    gap: "159px",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
    [theme.breakpoints.down("laptop")]: {
      height: "fit-content",
      padding: "4rem 2rem",
      alignItems: "start",
      gap: "64px",
    },
    [theme.breakpoints.down("mobile")]: {
      gap: "2rem",
      flexDirection: "column",
      height: "auto",
      padding: "2.5rem 1rem",
      backgroundPositionX: "none",
      backgroundPositionY: "bottom",
    },
  },
  left: {
    width: "513px",
    [theme.breakpoints.down("tablet")]: {
      width: "353px",
    },
    [theme.breakpoints.down("mobile")]: {
      width: "auto",
    },
  },
  right: {
    "& h1": {
      fontSize: "33px",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      paddingBottom: "3rem",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "28px",
        fontWeight: 700,
      },
    },
  },
  viewAllBtn: {
    width: "330px",
    height: "54px",
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    margin: "0 0 0 180px",
    padding: "16px 18px",
    gap: "8px",
    border: "1px solid",
    borderRadius: "4px",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "22px",
    cursor: "pointer",
  },
  linkTag: {
    cursor: "pointer", 
  },
  blogBase: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  heroImage: {
    width: "432.64px",
    display: "block",
    [theme.breakpoints.down("laptop")]: {
      display: "none",
    },
  },
}));
