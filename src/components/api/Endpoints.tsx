import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Theme, Box } from "@mui/material";

import { APIType, EndpointsType } from "../../types";
import ShowEndpoint from "./endpoint/ShowEndpoints";
import EndpointAccordion from "./endpoint/EndpointAccordion";

interface Props {
  endpoints: Array<EndpointsType>;
  api: APIType;
}

const Endpoints: React.FC<Props> = ({ api, endpoints }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ShowEndpoint endpoints={endpoints} />

      <Typography component="h3">Endpoint description</Typography>
      <Typography component="h5">
        Get the predicted sentiment of a text which can either be neutral,
        positive or negative.
      </Typography>

      <EndpointAccordion endpoints={endpoints} api={api} />
    </Box>
  );
};

export default Endpoints;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    padding: "0 108px",
    lineHeight: "41px",
    width: "100%",
    "& h2": {
      margin: "64px 0 32px 0",
      fontWeight: "bold",
      fontSize: "19px",
      color: theme.palette.grey[100],
    },

    "@media screen and (max-width: 900px)": {
      padding: "44px 32px 24px 32px",

      "& h2": {
        fontSize: "23px",
      },
    },

    "& h3": {
      fontWeight: "bold",
      fontSize: "19px",
      color: theme.palette.grey[100],
    },

    "& h5": {
      margin: "16px 0 40px 0",
      fontSize: "16px",
      color: theme.palette.grey[600],
    },
    "@media screen and (max-width: 428px)": {
      padding: "20px 16px 24px 16px",
      fontSize: "14px",
    },
  },
}));
