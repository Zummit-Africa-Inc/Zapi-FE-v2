import { useEffect } from "react";
import { Box, Stack, makeStyles } from "@mui/material";

import { useAppSelector } from "../../hooks";
import { useStyles } from "./HubCategories.styles";
import CustomTypography from "../shared/CustomTypography";
import { useAppContext } from "../../contexts/AppProvider";
import CategoryButton from "../shared/Buttons/CategoriesButton";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../shared/Spinner";

interface IHubCategories {
  selectedCategoryId?: string;
  setSelectedCategoryId?: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

const url = import.meta.env.VITE_CORE_URL;

const HubCategories = ({
  selectedCategoryId,
  setSelectedCategoryId,
}: IHubCategories) => {
  const classes = useStyles({});
  const { currentMode } = useAppContext();

  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetch(`${url}/categories`).then((res) => res.json()),
  });

  let category_id = localStorage.getItem("category") || "";

  if (!category_id) {
    try {
      category_id = categories[0].id;
    } catch (error) {}
  }

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <h1>Error has occurred</h1>;
  }

  const light = {
    main: "#081F4A",
    contrastText: "#E9EBED",
  };
  const dark = {
    main: "#121212",
    contrastText: "#FFEA00",
  };

  function handleColor(id: string) {
    if (selectedCategoryId === id) {
      return currentMode === "dark" ? dark.main : light.contrastText;
    }
    return currentMode === "dark" ? dark.contrastText : light.main;
  }
  function handleBg(id: string) {
    if (selectedCategoryId === id) {
      return currentMode === "dark" ? dark.contrastText : light.main;
    }
    return currentMode === "dark" ? dark.main : light.contrastText;
  }

  return (
    <Stack className={classes.catContainer}>
      <Box className={classes.catButtonContainer}>
        {categories.data.map((category: any) => (
          <CategoryButton
            key={category.id}
            label={category.name}
            type="button"
            onClick={() => setSelectedCategoryId!(category.id)}
            background={handleBg(category.id)}
            color={handleColor(category.id)}
            size="medium"
          />
        ))}
      </Box>
      <Box className={classes.catTypoContainer}>
        <CustomTypography
          variant="h3"
          className={classes.titleTypography}
          text="Discover and connect to hundreds of APIs from our Z-API Hub"
        />
        <CustomTypography
          variant="h6"
          className={classes.subtitleTypography}
          text="Select from the categories available, subscribe to an API and enjoy
          the services."
        />
      </Box>
    </Stack>
  );
};

export default HubCategories;
