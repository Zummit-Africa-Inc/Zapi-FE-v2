import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Stack, Box, Tab, Tabs } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";

import {
  Navbar,
  APIMoreInfo,
  TabPanel,
  Endpoints,
  Footer, 
  Reviews
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
      color: "#5574AF"
  },
  "&.Mui-selected": {
      backgroundColor: "#B8CEF7",
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
          <CustomTabs value={tab} onChange={handleTabChange}
		  	sx={{
		  		display: 'flex',
			    flexDirection: 'column',
			    marginBottom: "15px",
			    padding: "0 108px",
			    lineHeight: "41px",
			    width: '100%',
			    
			
			    "@media screen and (max-width: 900px)": {
					padding: "44px 32px 0 32px",
				     
			    },
			
			    "@media screen and (max-width: 428px)": {
					padding: "20px 16px 0 16px",
					fontSize: "14px",
				},
			}}
		  >
              <CustomTab label="Endpoints" />
              <CustomTab label="Discussions" />
              <CustomTab label="Reviews" />
          </CustomTabs>
          
          <Box>

            <TabPanel value={tab} index={0}>
                <Endpoints />
            </TabPanel>

            <TabPanel value={tab} index={1}>
                <Endpoints />
            </TabPanel>
			
            <TabPanel value={tab} index={2}>
                <Reviews />
            </TabPanel>
			
			
          </Box>
      </Box>

      <Footer />
    </Stack>
  );
};

const useStyles = makeStyles({
})

export default APIDesc;
