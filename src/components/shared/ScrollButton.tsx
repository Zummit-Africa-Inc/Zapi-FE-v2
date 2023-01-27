import { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { useAppContext } from "../../contexts/AppProvider";
import {
  scrollYellowSmall,
  scrollYellowMedium,
  scrollYellowLarge,
  scrollDarkBlueSmall,
  scrollDarkBlueMedium,
  scrollDarkBlueLarge,
} from "../../assets/svg";

const getImage = (theme: Theme, currentMode: "light" | "dark") => {
  const width = window.innerWidth;
  if (width < theme.breakpoints.values.mobile) {
    return currentMode === "light" ? scrollDarkBlueSmall : scrollYellowSmall;
  } else if (
    width >= theme.breakpoints.values.mobile &&
    width < theme.breakpoints.values.tablet
  ) {
    return currentMode === "light" ? scrollDarkBlueMedium : scrollYellowMedium;
  }
  return currentMode === "light" ? scrollDarkBlueLarge : scrollYellowLarge;
};

const ScrollButton = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { currentMode } = useAppContext();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <img
          src={getImage(theme, currentMode)}
          alt="scroll-button"
          className={classes.scrollButton}
          onClick={handleClick}
        />
      )}
    </>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    scrollButton: {
      position: "fixed",
      bottom: "0",
      right: "0",
      padding: "10px",
      zIndex: "999",
    },
  })
);

export default ScrollButton;
