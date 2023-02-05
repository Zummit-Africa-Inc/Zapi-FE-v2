import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../contexts/AppProvider";
import { useStyles } from "./HubApis.styles";
import NotFoundLight from ".././../assets/svg/api-not-found-light.svg";
import NotFoundDark from ".././../assets/svg/api-not-found-dark.svg";
import ButtonBase from "../shared/Button";

const ApiNotFound = () => {
  const navigate = useNavigate();
  const classes = useStyles({});
  const { currentMode } = useAppContext();

  return (
    <Box className={classes.notFoundContainer}>
      <Stack
        className={classes.notFoundStack}
        sx={{ alignItems: "left", gap: "1em" }}>
        <Typography
          className={classes.notFoundTypography}
          variant="h4"
          component="h4"
          sx={{ fontWeight: 600 }}>
          OOPS! There are no available APIs in this category
        </Typography>
        <Typography
          className={classes.notFoundSubtypography}
          variant="h6"
          component="h6">
          Navigate through other categories to discover an API or return to
          homepage.
        </Typography>
        <ButtonBase
          label="Return to Home page"
          size="large"
          type="button"
          className={classes.homeButton}
          background={currentMode === "dark" ? "secondary" : "primary"}
          onClick={() => navigate("/")}
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
  );
};

export default ApiNotFound;
