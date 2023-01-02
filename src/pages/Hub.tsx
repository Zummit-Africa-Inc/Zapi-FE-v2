import { useState, useEffect } from "react";
import { Stack, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import { ApiProps } from "../interfaces";
import { Footer, Navbar } from "../components";
import HubApis from "../components/hub/HubApis";
import { useAppSelector, useHttpRequest } from "../hooks";
import HubCategories from "../components/hub/HubCategories";

const Hub = () => {
  const classes = useStyles();
  const { apis } = useAppSelector((store) => store.apis);

  const [allApis, setAllApis] = useState<ApiProps[]>(apis);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();

  const { error, loading, sendRequest } = useHttpRequest();
  const { categories } = useAppSelector((store) => store.apis);

  useEffect(() => {
    const all = categories.find((category) => category.id === "All");
    if (all?.id) {
      setSelectedCategoryId(all.id);
    }
  }, [categories]);

  const getApisByCategory = async () => {
    const headers = { "Content-Type": "application/json" };
    try {
      const response = await fetch(
        `https://development.core.zapi.ai/api/v1/categories/${selectedCategoryId}/apis`,
        {
          method: "get",
          headers,
        }
      );
      const data = await response.json();
      setAllApis(data);
    } catch (error) {}
  };

  useEffect(() => {
    if (selectedCategoryId) getApisByCategory();
  }, [selectedCategoryId]);

  return (
    <Stack>
      <Navbar />
      <Stack className={classes.hubContainer}>
        <HubCategories
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
        <HubApis apis={allApis} />
      </Stack>
      <Footer />
    </Stack>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hubContainer: {
      backgroundColor: theme.palette.background.default,
    },
  })
);

export default Hub;
