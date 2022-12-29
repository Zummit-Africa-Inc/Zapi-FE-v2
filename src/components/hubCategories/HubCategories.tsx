import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppContext } from "../../contexts/AppProvider";
import ButtonBase from "../shared/Button";
import CategoryButton from "./Button";
import { useStyles } from "./HubCategories.styles";

const HubCategories = () => {
  const categories = [
    { id: "1", name: "Food", description: "Food apis" },
    { id: "2", name: "Sports", description: "Sports apis" },
    { id: "3", name: "Education", description: "Education apis" },
    { id: "4", name: "Technology", description: "Technology apis" },
    { id: "5", name: "Ai", description: "Ai apis" },
    { id: "6", name: "Education", description: "Education apis" },
    { id: "7", name: "Food", description: "Food apis" },
    { id: "8", name: "Sports", description: "Sports apis" },
    { id: "9", name: "Technology", description: "Technology apis" },
    { id: "10", name: "Ai", description: "Ai apis" },
    { id: "11", name: "Education", description: "Education apis" },
    { id: "12", name: "Food", description: "Food apis" },
    { id: "13", name: "Sports", description: "Sports apis" },
    { id: "14", name: "Technology", description: "Technology apis" },
    { id: "15", name: "Ai", description: "Ai apis" },
    { id: "16", name: "Education", description: "Education apis" },
    { id: "17", name: "Food", description: "Food apis" },
    { id: "18", name: "Sports", description: "Sports apis" },
    { id: "19", name: "Technology", description: "Technology apis" },
    { id: "20", name: "Ai", description: "Ai apis" },
    { id: "21", name: "Education", description: "Education apis" },
    { id: "22", name: "Food", description: "Food apis" },
    { id: "23", name: "Sports", description: "Sports apis" },
    { id: "24", name: "Technology", description: "Technology apis" },
    { id: "25", name: "Ai", description: "Ai apis" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>();
  const classes = useStyles({});
  const { currentMode } = useAppContext();

  const light = {
    main: "#081F4A",
    contrastText: "#E9EBED",
  };
  const dark = {
    main: "#121212",
    contrastText: "#FFEA00",
  };

  function handleColor(id: string) {
    if (selectedCategory === id) {
      return currentMode === "dark" ? dark.main : light.contrastText;
    }
    return currentMode === "dark" ? dark.contrastText : light.main;
  }
  function handleBg(id: string) {
    if (selectedCategory === id) {
      return currentMode === "dark" ? dark.contrastText : light.main;
    }
    return currentMode === "dark" ? dark.main : light.contrastText;
  }

  return (
    <Stack className={classes.catContainer}>
      <Box className={classes.catButtonContainer}>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            label={category.name}
            type="button"
            onClick={() => setSelectedCategory(category.id)}
            background={handleBg(category.id)}
            color={handleColor(category.id)}
            size="large"
          />
        ))}
      </Box>
      <Box className={classes.cattypoContainer}>
        <Typography
          variant="h2"
          component="h3"
          mb={2}
          className={classes.title_typography}>
          Discover and connect to hundreds of APIs from our Z-API Hub
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          className={classes.subtitle_typography}>
          Select from the categories available, subscribe to an API and enjoy
          the services.
        </Typography>
      </Box>
    </Stack>
  );
};

export default HubCategories;
