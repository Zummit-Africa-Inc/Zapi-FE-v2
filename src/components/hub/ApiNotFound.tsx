import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../contexts/AppProvider";
import ButtonBase from "../shared/Buttons/Button";
import { useStyles } from "./HubApis.styles";
import NotFoundLight from ".././../assets/svg/api-not-found-light.svg";
import NotFoundDark from ".././../assets/svg/api-not-found-dark.svg";

const ApiNotFound = () => {
  const navigate = useNavigate();
  const classes = useStyles({});
  const { currentMode } = useAppContext();

  return (
    <Box className={classes.notFoundContainer}>
      <Stack sx={{ alignItems: "left", gap: "2em" }}>
        <Typography
          className={classes.notFoundTypography}
          variant="h4"
          component="h4"
          sx={{ fontWeight: 600 }}>
          OOPS! There are no available APIs in this category
        </Typography>
        <Typography
          className={classes.notFoundSubtypography}
          variant="h5"
          component="h5">
          Navigate through other categories to discover an API or return to
          homepage.
        </Typography>
        <ButtonBase
          label="Return to Home page"
          size="large"
          type="button"
          style={{
            width: "250px",
            color: `${currentMode === "dark" ? "#121212" : "#FFFFFF"}`,
          }}
          variant={currentMode === "dark" ? "secondary" : "primary"}
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
