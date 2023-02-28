import { useState, useEffect } from "react";
import { Stack, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ApiProps } from "../interfaces";
import { Footer, Loader, Navbar } from "../components";
import HubApis from "../components/hub/HubApis";
import { useAppSelector, useHttpRequest } from "../hooks";
import HubCategories from "../components/hub/HubCategories";
import Spinner from "../components/shared/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = import.meta.env.VITE_CORE_URL;

const Hub = () => {
  const classes = useStyles();
  const { apis } = useAppSelector((store) => store.apis);

  const [allApis, setAllApis] = useState<ApiProps[]>(apis);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();

  const { categories } = useAppSelector((store) => store.apis);

  useEffect(() => {
    const all = categories.find((category) => category.id === "All");
    if (all?.id) {
      setSelectedCategoryId(all.id);
    }
  }, [categories]);

  const fetchCategoryData = async () => {
    if (selectedCategoryId) {
      const result = await axios(
        `${url}/categories/${selectedCategoryId}/apis`
      );
      console.log(result.data.data);
      setAllApis(result.data.data);
      return result;
    } else {
      return [];
    }
  };

  const { isLoading, error } = useQuery({
    queryKey: ["categoriesId", selectedCategoryId],
    queryFn: () => fetchCategoryData(),
  });

  if (error) {
    return <h1>Error Occurred</h1>;
  }

  return (
    <Stack>
      <Navbar />
      <Stack className={classes.hubContainer}>
        <HubCategories
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
        {isLoading ? <Spinner /> : <HubApis apis={allApis} />}
      </Stack>
      <Footer />
    </Stack>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hubContainer: {
      marginBottom: "2rem",
      backgroundColor: theme.palette.background.default,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default Hub;
