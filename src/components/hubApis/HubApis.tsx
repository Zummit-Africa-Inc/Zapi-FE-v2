import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ApiCard from "../apiCard/ApiCard";
import { RiSearch2Line } from "react-icons/ri";
import { useStyles } from "./HubApis.styles";
import ApiNotFound from "./ApiNotFound";
import CustomTypography from "../shared/CustomTypography";
import { ApiProps } from "../../interfaces";

interface IHubApis {
  apis: ApiProps[];
}

const HubApis: React.FC<IHubApis> = ({ apis }) => {
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
          <Box className={classes.cardContainer}>
            {apis?.map((api) => (
              <ApiCard key={api.id} api={api} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default HubApis;
