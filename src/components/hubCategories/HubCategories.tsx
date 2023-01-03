import { Box, Stack } from "@mui/material";
import { useAppContext } from "../../contexts/AppProvider";
import { useAppSelector } from "../../hooks";
import CustomTypography from "../shared/CustomTypography";
import CategoryButton from "../shared/Buttons/CategoriesButton";
import { useStyles } from "./HubCategories.styles";

interface IHubCategories {
  selectedCategoryId?: string;
  setSelectedCategoryId?: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

const HubCategories: React.FC<IHubCategories> = ({
  selectedCategoryId,
  setSelectedCategoryId,
}) => {
  const { categories } = useAppSelector((store) => store.apis);

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
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            label={category.name}
            type="button"
            onClick={() => setSelectedCategoryId!(category.id)}
            background={handleBg(category.id)}
            color={handleColor(category.id)}
            size="large"
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
          variant="h5"
          className={classes.subtitleTypography}
          text="Select from the categories available, subscribe to an API and enjoy
          the services."
        />
      </Box>
    </Stack>
  );
};

export default HubCategories;
