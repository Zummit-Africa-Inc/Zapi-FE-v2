import { Stack, Theme } from "@mui/material";
import { Footer, Navbar } from "../components";
import HubApis from "../components/hubApis/HubApis";
import HubCategories from "../components/hubCategories/HubCategories";
import { createStyles, makeStyles } from "@mui/styles";

const Hub = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Navbar />
      <Stack className={classes.hubContainer}>
        <HubCategories />
        <HubApis />
      </Stack>
      <Footer />
    </Stack>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hubContainer: {
      backgroundColor: theme.palette.background.default,
    },
  })
);

export default Hub;
