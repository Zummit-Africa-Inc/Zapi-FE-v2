import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { makeStyles } from "@mui/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Stack, Theme } from "@mui/material";

import { cmLearningAPI, compVisionAPI, natLangAPI } from "../../assets/svg";
import { Button } from "..";

const Collections = [
  {
    icons: compVisionAPI,
    title: "Computer Vision APIs",
    apis: [
      "Face Detection",
      "OCR text extraction",
      "Background remover",
      "Image recognition",
      "Emotion detection",
    ],
  },
  {
    icons: natLangAPI,
    title: "Natural Language processing APIs",
    apis: [
      "Text Summarizer",
      "Sentiment analysis",
      "Emotion analysis",
      "Question and answer bot",
      "Keyword extraction",
    ],
  },
  {
    icons: cmLearningAPI,
    title: "Classical Machine Learning APIs",
    apis: [
      "Fraud detection",
      "Customer churn prediction",
      "Background remover",
      "Risk analysis",
      "Credit worthiness",
    ],
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1260 },
    items: 3,
    // slidesToSlide: 3,
  },
  laptop: {
    breakpoint: { max: 1260, min: 834 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 834, min: 428 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 428, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Discover: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Stack pb={4} className={classes.heading}>
        <h1>Discover the collection</h1>
        <p>
          Developed for businesses and developers, these APIs are production
          ready, fast, scalable, and reliable.
        </p>
      </Stack>
      <Carousel
        swipeable={true}
        draggable={true}
        arrows={false}
        showDots={true}
        centerMode={false}
        responsive={responsive}
        infinite={false}
        keyBoardControl={false}
        customTransition="all .5"
        itemClass={classes.carouselItem}
        containerClass={classes.carouselContainer}
        transitionDuration={500}>
        {Collections.map((items, i) => (
          <Stack className={classes.collection} key={i}>
            <Stack style={{ width: "160px", height: "160px" }}>
              <img src={items.icons} alt={items.title} />
            </Stack>
            <h5>{items.title}</h5>
            <Stack className={classes.apis}>
              {items.apis.map((api, i) => (
                <p key={i}>{api}</p>
              ))}
            </Stack>
          </Stack>
        ))}
      </Carousel>
      <div style={{ paddingTop: "4rem" }}>
        <Button
          label="Explore API Hub"
          variant="primary"
          type="button"
          size="large"
          icon={<FiArrowRight />}
        />
      </div>
    </Box>
  );
};

export default Discover;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "4rem 6.7rem",
    background: theme.palette.background.default,
    [theme.breakpoints.down("tablet")]: {
      padding: "2.5rem 1rem",
    },
  },
  heading: {
    "& h1": {
      fontSize: "3rem",
      fontWeight: 600,
      color: theme.palette.grey[100],
      letterSpacing: "-0.04em",
      paddingBottom: "1rem",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "34px",
      },
    },
    "& p": {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: theme.palette.grey[400],
      [theme.breakpoints.down("tablet")]: {
        fontSize: "18px",
      },
    },
  },
  collection: {
    width: "22rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    border: "1px solid #D3D7DA",
    borderRadius: "8px",
    padding: "2.5rem 3rem",
    background: theme.palette.grey[500],
    [theme.breakpoints.down("tablet")]: {
      width: "300px",
    },
    "& h5": {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: theme.palette.grey[100],
      letterSpacing: "-0.02em",
      [theme.breakpoints.down("tablet")]: {
        fontSize: "23px",
      },
    },
  },
  apis: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "& p": {
      fontSize: "1rem",
      fontWeight: 400,
      color: theme.palette.grey[600],
      [theme.breakpoints.down("tablet")]: {
        fontSize: "14px",
      },
    },
  },
  carouselContainer: {
    width: "90%",
    paddingBottom: "4rem",
    display: "flex",
    justifyContent: "center",
    '@media (max-width: 1280px)': {
      width: "100%",
    },
  },
  carouselItem: {
    padding: "0 1rem",
    
  },
}));
