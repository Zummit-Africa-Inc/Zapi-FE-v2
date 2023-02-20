import React, { useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Theme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";
import Cookies from "universal-cookie";
import { ExpandMore } from "@mui/icons-material";
import { APIType, EndpointsType } from "../../../types";
import { TabPanel } from "../../";

const CustomAccordion = styled(Accordion)({
  "&.MuiAccordion-root": {
    boxShadow: "unset",
    border: "unset",
    background: "unset",
  },
});

interface Props {
  endpoints: Array<EndpointsType>;
  api: APIType;
}

const EndpointAccordion: React.FC<Props> = ({ api, endpoints }) => {
  const classes = useStyles();
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");
  const [tab, setTab] = useState<number>(0);
  return (
    <>
      {endpoints && endpoints.length !== 0 ? (
        <Box className={classes.endpoint_inputs}>
          {endpoints?.map((endpoint, index) => (
            <TabPanel key={index} value={tab} index={index}>
              <Box
                sx={{
                  marginBottom: "80px",
                  padding: "0 4px",
                }}>
                <CustomAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={classes.accordion_summary}>
                    <Typography component="h4">Headers Parameters</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {endpoint?.headers?.map((header, index) => (
                      <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        spacing={4}
                        my={1}>
                        <Stack
                          width={200}
                          direction="column"
                          spacing={1}
                          sx={{ padding: "0 10px" }}>
                          <Typography component="p" sx={{ fontSize: "16px" }}>
                            {header.name}
                          </Typography>
                          <Typography
                            component="p"
                            sx={{
                              fontSize: "11px",
                              textTransform: "uppercase",
                            }}>
                            {header.type}
                          </Typography>
                        </Stack>

                        <Stack direction="column" spacing={1}>
                          <input
                            type="text"
                            defaultValue={header.value}
                            className={classes.input}
                            disabled
                          />
                          <Typography
                            component="p"
                            sx={{
                              fontSize: "11px",
                              textTransform: "uppercase",
                            }}>
                            {header.required ? "*required" : "not required"}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={classes.accordion_summary}>
                    <Typography component="h4">Body Parameters</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {endpoint?.body?.map((bodyItem, index) => (
                      <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        spacing={4}
                        my={1}>
                        <Stack
                          width={200}
                          direction="column"
                          spacing={1}
                          sx={{ padding: "0 10px" }}>
                          <Typography component="p" sx={{ fontSize: "16px" }}>
                            {bodyItem.name}
                          </Typography>
                          <Typography
                            component="p"
                            sx={{
                              fontSize: "11px",
                              textTransform: "uppercase",
                            }}>
                            {bodyItem.type}
                          </Typography>
                        </Stack>

                        <Stack direction="column" spacing={1}>
                          <input
                            type="text"
                            defaultValue={bodyItem.value}
                            className={classes.input}
                            disabled
                          />
                          <Typography
                            component="p"
                            sx={{
                              fontSize: "11px",
                              textTransform: "uppercase",
                            }}>
                            {bodyItem.required ? "*required" : "not required"}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    className={classes.accordion_summary}>
                    <Typography component="h4">Query Parameters</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {endpoint?.query?.map((queryItem, index) => (
                      <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        spacing={4}
                        my={1}>
                        <Stack
                          width={200}
                          direction="column"
                          spacing={1}
                          sx={{ padding: "0 10px" }}>
                          <Typography component="p" sx={{ fontSize: "16px" }}>
                            {queryItem.name}
                          </Typography>
                          <Typography
                            component="p"
                            sx={{
                              fontSize: "11px",
                              textTransform: "uppercase",
                            }}>
                            {queryItem.type}
                          </Typography>
                        </Stack>

                        <Stack direction="column" spacing={1}>
                          <input
                            type="text"
                            defaultValue={queryItem.value}
                            className={classes.input}
                            disabled
                          />
                          <Typography
                            component="p"
                            sx={{
                              fontSize: "11px",
                              textTransform: "uppercase",
                            }}>
                            {queryItem.required ? "*required" : "not required"}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </AccordionDetails>
                </CustomAccordion>
              </Box>
            </TabPanel>
          ))}
        </Box>
      ) : (
        <Box></Box>
      )}
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  accordion_summary: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: "20px",
    "& h4": {
      fontSize: "16px",
      color: theme.palette.grey[600],
    },
    "& svg": {
      fontSize: "32px",
    },
  },
  endpoint_inputs: {
    "& p": {
      color: theme.palette.grey[600],
    },
  },
  input: {
    outline: "none",
    background: "none",
    border: `1px solid ${theme.palette.grey[600]}`,
    borderRadius: "4px",
    padding: "0 0.5rem",
    color: theme.palette.grey[600],
    width: "300px",
    height: "30px",
  },
}));
export default EndpointAccordion;
