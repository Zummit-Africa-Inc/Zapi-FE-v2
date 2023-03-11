import { useState, useEffect } from "react";
import {
  Stack,
  Theme,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Button,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ApiProps } from "../interfaces";
import { Footer, Loader, Navbar } from "../components";
import HubApis from "../components/hub/HubApis";
import { useAppSelector, useHttpRequest } from "../hooks";
import HubCategories from "../components/hub/HubCategories";
import Spinner from "../components/shared/Spinner";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { RiSearch2Line } from "react-icons/ri";
import CustomTypography from "../components/shared/CustomTypography";
import debounce from "lodash.debounce";
import { useInView } from "react-intersection-observer";

const url = import.meta.env.VITE_CORE_URL;

const Hub = () => {
  const classes = useStyles();
  const { apis } = useAppSelector((store) => store.apis);

  const [allApis, setAllApis] = useState<ApiProps[]>(apis);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>();
  const [query, setQuery] = useState<string>("");
  const { ref, inView } = useInView();

  const { categories } = useAppSelector((store) => store.apis);

  const { data } = useQuery({
    queryKey: ["search for APIs"],
    queryFn: () => axios(`${url}/api?searchBy=${query}`),
  });

  const updateQuery = async (e: any) => {
    setQuery(e?.target?.value);
    let result = await data?.data.data.filter(
      (item: ApiProps) =>
        item.name &&
        item.name.toLowerCase() &&
        item.name.toLowerCase().includes(query.toLocaleLowerCase())
    );
    setAllApis(result);
  };

  const debounceChange = debounce(updateQuery, 300);

  const select = async () => {
    const result = await axios(`${url}/categories/${selectedCategoryId}/apis`);
    setAllApis(result?.data.data);
  };

  useEffect(() => {
    const searchData = async () => {
      if (!query) {
        if (selectedCategoryId) {
          select();
        } else setAllApis(apis);
      } else;
    };
    searchData();
  }, [query]);

  useEffect(() => {
    const all = categories.find((category) => category.id === "All");
    if (all?.id) {
      setSelectedCategoryId(all.id);
    }
  }, [categories]);

  const fetchCategoryData = async ({ pageParam = 1 }) => {
    if (selectedCategoryId) {
      const result = await axios(
        `${url}/categories/${selectedCategoryId}/apis?page=${pageParam}`
      );
      setAllApis(result.data.data);
      return result.data.data;
    } else {
      return [];
    }
  };

  const {
    isLoading,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<any>(
    ["categoriesId", selectedCategoryId],
    fetchCategoryData,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) return lastPage + 1;
        return false;
      },
    }
  );

  if (error) {
    return <h1>Error Occurred</h1>;
  }

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Stack>
      <Navbar />
      <Stack className={classes.hubContainer}>
        <HubCategories
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
        <Box className={classes.titleBarContainer}>
          <CustomTypography
            variant="h5"
            className={classes.typography}
            text="Select from the available APIs below"
          />
          <FormControl
            className={classes.searchInput}
            variant="outlined"
            size="small">
            <OutlinedInput
              style={{
                color: "grey",
              }}
              type="text"
              onChange={debounceChange}
              placeholder="Search"
              startAdornment={
                <InputAdornment position="start">
                  <IconButton edge="start">
                    <RiSearch2Line />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        {isLoading ? <Spinner /> : <HubApis apis={allApis} />}
        <Stack>
          <Button disabled={!hasNextPage || isFetchingNextPage}>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load Newer"
              : "Nothing more to load"}
          </Button>
        </Stack>
        <Stack>
          {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
        </Stack>
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
    titleBarContainer: {
      width: "84%",
      marginTop: "3em",
      marginBottom: "-1em",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("tablet")]: {
        marginLeft: "3rem",
        width: "100%",
      },

      [theme.breakpoints.down("mobile")]: {
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        right: "3rem",
      },
    },
    typography: {
      // position: "relative",
      // right: "30px",
      textAlign: "center",
      color: theme.palette.primary.contrastText,

      [theme.breakpoints.down("tablet")]: {
        fontSize: "20px!important",
        // margin: "0 30px"
      },
      [theme.breakpoints.down("mobile")]: {
        marginBottom: "1rem!important",
        fontSize: "16px!important",
      },
    },
    searchInput: {
      // position: "relative",
      // left: "30px",
      "& input::placeholder": {
        color: theme.palette.grey[100],
      },
      "& .MuiInputBase-input-MuiOutlinedInput-input": {
        color: "white",
      },
      width: "25%",
      background: `${theme.palette.info.main}!important`,

      [theme.breakpoints.down("tablet")]: {
        position: "relative",
        right: "100px",
        width: "30%",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "50%",
        position: "relative",
        left: "5px",
      },
    },
  })
);

export default Hub;
