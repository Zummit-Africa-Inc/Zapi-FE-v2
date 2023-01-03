import { Box, Stack, Theme, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Button } from "..";
import { ButtonArrow } from "../../assets/icons";
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
  const classes = useStyles();
  return (
    <Box className={classes.container}>
        <Stack>
            <Stack className={classes.linkTag}>
                <Box className={classes.left}>
                    {blogPosts.map((post, i) => (
                        <Stack key={i}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            sx={{ width: "100%" }}
                            spacing={2.4}>
                            <Stack>
                            <img src={post.image} alt="" width="100%" height="100%" />
                            <Stack 
                                direction="column"
                                alignItems="space-between"
                                sx={{ width: "100%" }}
                                spacing={2.4}>
                                <Typography sx={{fontWeight: "700", fontSize: "23px", paddingTop:"10px"}}>
                                    {post.title}
                                </Typography>
                                <Typography className={classes.blogBase}>
                                    <div className={classes.blogButton}>
                                        Read More
                                    </div>
                                    <Typography sx={{fontWeight: "400", fontSize: "14px",          
                                      paddingTop:"17px", paddingBottom:"20.5px"}}>
                                        {post.date}
                                    </Typography>
                                </Typography>
                            </Stack>
                            </Stack>
                        </Stack>
                        </Stack>
                    ))}
                </Box>
            </Stack>
            <div className={classes.viewAllBtn}>
                <p>View all Zapi Blog Posts &nbsp; <ButtonArrow color="#000" /></p>
            </div>
        </Stack>

      <Stack className={classes.right}>
        <h1>AI Education</h1>
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
      color: "#060607",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "28px",
        fontWeight: 700,
      },
    },
  },

 blogButton: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "22px",
    color: "#5A5F65",
 },
 viewAllBtn: {
    display: "flex",
    marginLeft: "180px",
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "right",
    padding: "16px 18px 30px 9px",
    gap: "8px",
    width: "330px",
    height: "54px",
    border: "1px solid #081F4A",
    borderRadius: "4px",
        "& p": {
        width: "255px",
        height: "22px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "22px",    
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        }
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
