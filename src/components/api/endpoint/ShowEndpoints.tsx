import React, { SyntheticEvent, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import {
  Typography,
  Theme,
  Box,
  InputBase,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import { ChatRounded } from "@mui/icons-material";
import { RiSearch2Line } from "react-icons/ri";
import { EndpointsType } from "../../../types";

const CustomTabs = styled(Tabs)({
  "&.MuiTabs-root": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "44px",
    width: "100%",
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
    marginBottom: "20px",
    padding: "0 0 0 6px",
  },
  "&.Mui-selected": {
    marginLeft: "6px",
    borderRadius: "2px 0 0 2px",
  },
});

interface Props {
  endpoints: Array<EndpointsType>;
}

const ShowEndpoint: React.FC<Props> = ({ endpoints }) => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  const handleTabChange = (e: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          "@media screen and (max-width: 428px)": {
            flexDirection: "column",
          },
        }}>
        <Typography component="h2">Endpoint</Typography>

        <Box component="form" className={classes.search_form}>
          <InputBase
            sx={{
              background: "unset",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2px",
              margin: "2px 20px 2px 3px",
              fontSize: "16px",
              fontFamily: "Lato",
              color: "#929AA3",
            }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            startAdornment={
              <IconButton type="button" aria-label="search">
                <RiSearch2Line style={{ color: "#929AA3", width: "20px" }} />
              </IconButton>
            }
          />
        </Box>
      </Box>

      {endpoints && endpoints.length !== 0 ? (
        <CustomTabs
          variant="fullWidth"
          value={tab}
          orientation="vertical"
          onChange={handleTabChange}>
          {endpoints?.map((endpoint, index) => (
            <CustomTab
              key={index}
              label={
                <Box className={classes.endpoint_container}>
                  <Box className={classes.endpoint_method}>
                    <Typography component="p">
                      {endpoint.method || "POST"}
                    </Typography>
                  </Box>

                  <Box className={classes.endpoint_desc}>
                    <Typography component="p">
                      {endpoint.name ||
                        "ipsum dolor sit amet consectetur. Feugiat amet aliquam rutrum in"}
                    </Typography>
                  </Box>
                </Box>
              }
            />
          ))}
        </CustomTabs>
      ) : (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "80px",
              width: "100%",
            }}>
            <ChatRounded sx={{ fontSize: "28px", color: "#264276" }} />
            <Typography sx={{ fontSize: "15px", color: "#060607" }}>
              There are no endpoints in this API.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  search_form: {
    boxShadow: "unset",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.grey[500],
    border: `1px solid ${theme.shadows[1]}`,
    borderRadius: "4px",
    "@media screen and (max-width: 428px)": {
      marginBottom: "64px",
    },
  },
  endpoint_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "28px",
    backgroundColor: theme.shadows[2],
    padding: "12px 24px",
    width: "100%",
  },
  endpoint_method: {
    backgroundColor: theme.shadows[3],
    borderRadius: "3px",
    padding: "4px 10px",
    fontSize: "13px",
    color: theme.shadows[4],
    textTransform: "capitalize",
  },
  endpoint_desc: {
    fontSize: "16px",
    fontWeight: 400,
    color: theme.shadows[5],
  },
}));
export default ShowEndpoint;
