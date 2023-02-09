import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { RiSearch2Line } from "react-icons/ri";
import debounce from 'lodash.debounce'

import ApiCard from "./ApiCard";
import ApiNotFound from "./ApiNotFound";
import { ApiProps } from "../../interfaces";
import { useStyles } from "./HubApis.styles";
import CustomTypography from "../shared/CustomTypography";
import { useState } from "react";

interface IHubApis {
  apis: ApiProps[];
}

const getFilteredApis = (query : string, apis : ApiProps[]) => {
  if (!query) {
    return apis
  } else return apis.filter((api : ApiProps) => api.name && api.name.toLowerCase() && api.name.toLowerCase().includes(query.toLocaleLowerCase()))
}

const HubApis = ({ apis }: IHubApis) => {
  const classes = useStyles({});
  const [query, setQuery] = useState("")

  const filteredApis = getFilteredApis(query, apis)
  const updateQuery = (e : any) => setQuery(e?.target?.value)
  const debounceChange = debounce(updateQuery, 200)

  return (
    <Box className={classes.hubApiContainer}>
      {apis?.length < 1 ? (
        <ApiNotFound />
      ) : (
        <>
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
                  color: "grey"
                }}
                type="text"
                placeholder="Search"
                onChange={debounceChange}
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
          <Box className={classes.apiContainer}>
              <Box className={classes.apis} component={"div"}>
            {filteredApis?.map((api : ApiProps) => (
              <ApiCard api={api} key={api.id} />
            ))}
            </Box>
          </Box>
          
        </>
      )}
    </Box>
  );
};

export default HubApis;
