import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { RiSearch2Line } from "react-icons/ri";

import ApiCard from "./ApiCard";
import ApiNotFound from "./ApiNotFound";
import { ApiProps } from "../../interfaces";
import { useStyles } from "./HubApis.styles";
import CustomTypography from "../shared/CustomTypography";

interface IHubApis {
  apis: ApiProps[];
}

const HubApis = ({ apis }:IHubApis) => {
  const classes = useStyles({});

  return (
    <Box className={classes.hubApiContainer}>
      {apis.length < 1 ? (
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
                type="text"
                placeholder="Search APIs"
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
          <Box>
            <Grid container spacing={3}>
              {apis?.map((api) => (
                <Grid
                  item
                  key={api.id}
                  sx={{ flexGrow: 3 }}
                  mobile={6}
                  tablet={4}
                  laptop={3}
                  desktop={3}>
                  <ApiCard api={api} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default HubApis;
