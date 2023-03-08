import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Box, Tab, Tabs, Theme } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { useHttpRequest } from "../hooks";
import { useQuery } from "@tanstack/react-query";

import {
  Loader,
  Navbar,
  APIMoreInfo,
  TabPanel,
  Endpoints,
  Footer,
  Reviews,
  Discussions,
} from "../components";

import { APIType, DiscussionType, EndpointsType, ReviewType } from "../types";

const core_url = "VITE_CORE_URL";

const CustomTabs = styled(Tabs)({
  "&.MuiTabs-root": {
    width: "auto",
    fontSize: 500,
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const CustomTab = styled(Tab)({
  "&.MuiTab-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontWeight: "normal",
    fontSize: "14px",
    color: "#5574AF",
  },
  "&.Mui-selected": {
    backgroundColor: "#B8CEF7",
  },
});

const APIDesc = () => {
  const { error, loading, sendRequest } = useHttpRequest();
  const [tab, setTab] = useState<number>(0);
  const [api, setApi] = useState<APIType | null>(null);
  const [endpoints, setEndpoints] = useState<Array<EndpointsType> | null>(null);
  const [discussions, setDiscussions] = useState<Array<DiscussionType> | null>(
    null
  );
  const cookies = new Cookies();
  const classes = useStyles();
  const { id } = useParams();

  const headers = {
    "Content-Type": "application/json",
    "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
  };

  const fetchAPIDesc = async () => {
    try {
      const apiData = await sendRequest(
        `/api/findOne/${id}`,
        "get",
        core_url,
        {},
        headers
      );
      const endpointsData = await sendRequest(
        `/endpoints/${id}`,
        "get",
        core_url,
        {},
        headers
      );
      const apiDiscussion = await sendRequest(
        `/discussion/api/${id}`,
        "get",
        core_url,
        {},
        headers
      );

      if (
        apiData === undefined ||
        endpointsData === undefined ||
        apiDiscussion === undefined
      ) {
        window.location.href = "/api-hub";
      }

      return [apiData.data, endpointsData.data, apiDiscussion.data];
    } catch (error: any) {}
  };

  try {
    const { data } = useQuery({
      queryKey: ["apidesc", id],
      queryFn: fetchAPIDesc,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 60000,
      cacheTime: 60000,
    });

    useEffect(() => {
      if (data) {
        setApi(data[0]);
        setEndpoints(data[1]);
        setDiscussions(data[2]);
      }
    }, [data]);
  } catch (error: any) {
    toast.error(`${error.message}`);
  }

  const handleTabChange = (e: ChangeEvent<unknown>, value: number) =>
    setTab(value);

  localStorage.setItem("api_id", JSON.stringify(api?.id));

  useEffect(() => {
    error && toast.error(`${error.message}`);
  }, [error]);

  if (loading) return <Loader />;

  return (
    <>
      {api && endpoints && discussions && (
        <Stack direction="column">
          <Navbar />

          <APIMoreInfo api={api} />

          <Box className={classes.root}>
            <CustomTabs
              value={tab}
              onChange={handleTabChange}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
                padding: "0 108px",
                lineHeight: "41px",
                width: "100%",

                "@media screen and (max-width: 900px)": {
                  padding: "44px 32px 0 32px",
                },

                "@media screen and (max-width: 428px)": {
                  padding: "20px 16px 0 16px",
                  fontSize: "14px",
                },
              }}>
              <CustomTab label="Endpoints" />
              <CustomTab label="Discussions" />
              <CustomTab label="Reviews" />
            </CustomTabs>

            <Box>
              <TabPanel value={tab} index={0}>
                <Endpoints api={api} endpoints={endpoints} />
              </TabPanel>

              <TabPanel value={tab} index={1}>
                <Discussions api={api} discussions={discussions} />
              </TabPanel>

              <TabPanel value={tab} index={2}>
                <Reviews api={api} />
              </TabPanel>
            </Box>
          </Box>

          <Footer />
        </Stack>
      )}
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiTab-root": {
      color: theme.shadows[8],
    },
    "& .Mui-selected": {
      backgroundColor: theme.shadows[6],
      color: theme.shadows[7],
    },
  },
}));

export default APIDesc;
