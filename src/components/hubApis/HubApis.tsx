import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ApiCard from "../apiCard/ApiCard";
import { RiSearch2Line } from "react-icons/ri";
import { useStyles } from "./HubApis.styles";
import ButtonBase from "../shared/Button";
import { useAppContext } from "../../contexts/AppProvider";
import NotFoundLight from ".././../assets/svg/api-not-found-light.svg";
import NotFoundDark from ".././../assets/svg/api-not-found-dark.svg";

const HubApis = () => {
  const classes = useStyles({});
  const { currentMode } = useAppContext();
  const apis = [];

  return (
    <Box className={classes.hubApiContainer}>
      {apis.length < 1 ? (
        <Box className={classes.not_found_container}>
          <Stack sx={{ alignItems: "left", gap: "2em" }}>
            <Typography
              className={classes.not_found_typography}
              variant="h4"
              component="h4"
              sx={{ fontWeight: 600 }}>
              OOPS! There are no available APIs in this category
            </Typography>
            <Typography
              className={classes.not_found_subtypography}
              variant="h5"
              component="h5">
              Navigate through other categories to discover an API or return to
              homepage.
            </Typography>
            <ButtonBase
              label="Return to Home page"
              background={currentMode === "dark" ? "secondary" : "primary"}
              size="large"
              type="button"
              className={classes.home_button}
            />
          </Stack>
          <Box>
            <Box
              component="img"
              sx={{ width: "100%" }}
              alt="Api not found"
              src={currentMode === "dark" ? NotFoundDark : NotFoundLight}
            />
          </Box>
        </Box>
      ) : (
        <>
          <Box className={classes.titleBarContainer}>
            <Typography
              variant="h5"
              component="h4"
              className={classes.typography}>
              Select from the available APIs below
            </Typography>
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
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
            <ApiCard />
          </Box>
        </>
      )}
    </Box>
  );
};

export default HubApis;
