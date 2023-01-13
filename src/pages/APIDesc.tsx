import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Stack, Box, Tab, Tabs } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";

import {
  Navbar,
  APIMoreInfo,
  Footer
} from "../components";


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
  },
  "&.Mui-selected": {
      backgroundColor: "#f1f1f1",
  },
});


const APIDesc: React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(0);
  
  const handleTabChange = (e: ChangeEvent<unknown>, value: number) => setTab(value)

  return (
    <Stack direction="column" >
      <Navbar />

      <APIMoreInfo />

      <Box>
          <CustomTabs value={tab} onChange={handleTabChange}>
              <CustomTab label="Endpoints" />
              <CustomTab label="Discussions" />
              <CustomTab label="Reviews" />
          </CustomTabs>
          <Box>

          </Box>
      </Box>

      <Footer />
    </Stack>
  );
};

const useStyles = makeStyles({
})

export default APIDesc;
