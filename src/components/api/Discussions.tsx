import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Box } from "@mui/material";
import { AddDiscussion, Spinner } from "../../components";
import { APIType, DiscussionType } from "../../types";
import AccordionDiscussion from "./discussion/AccordionDiscussion";

interface Props {
  discussions: Array<DiscussionType>;
  api: APIType;
}

const Discussions: React.FC<Props> = ({ api, discussions }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AddDiscussion />
      <AccordionDiscussion api={api} discussions={discussions} />
    </Box>
  );
};

export default Discussions;

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
      color: "#060607",
    },

    "@media screen and (max-width: 900px)": {
      padding: "44px 32px 24px 32px",

      "& h2": {
        fontSize: "23px",
      },
    },

    "@media screen and (max-width: 428px)": {
      padding: "20px 16px 24px 16px",
      fontSize: "14px",
    },
  },

}));

// Caching with react query
// import { useQuery } from 'react-query'

// const headers = { 'X-Zapi-Auth-Token': `Bearer ${cookies.get('accessToken')}` }

// const fetchData = async (endpoint: string) => {
//     try {
//         const response = await fetch(endpoint, { headers })
//         const data = await response.json()
//         return data
//     } catch (error) {
//         throw error
//     }
// }

// const MyComponent = () => {
//     const { data, status } = useQuery(
//         `data-${apiId}`,
//         () => fetchData(`${core_url}/analytics/api/${apiId}`),
//         {
//             // cache time in milliseconds
//             staleTime: 60 * 1000,
//             retry: false
//         }
//     )

//     if (status === 'loading') return <div>Loading...</div>
//     if (status === 'error') return <div>Error: {error.message}</div>

//     return (
//         <div>
//             <p>Data: {JSON.stringify(data)}</p>
//         </div>
//     )
// }
