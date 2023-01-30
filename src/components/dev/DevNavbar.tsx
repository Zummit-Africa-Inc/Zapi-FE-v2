// import React from "react";
// import { makeStyles } from "@mui/styles";
// import { Link } from "react-router-dom";
// import { Box, Theme } from "@mui/material";
// import { Hamburger, Moon, Sun } from "../../assets/icons";
// import { zapi } from "../../assets/svg";

// const DevNavbar = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.root}>
//       <Link to="/" className={classes.logo}>
//         <img src={zapi} alt="zapi logo" />
//         <p>Z-API</p>
//       </Link>

//       <Box>
//         <p>Upgrade Plan</p>
//       </Box>
//     </Box>
//   );
// };

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     width: "100%",
//     height: "88px",
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     background: "#081F4A",
//     padding: "24px 3rem",
//     top: 0,
//     left: 0,
//     zIndex: "10 !important",
//     [theme.breakpoints.down("laptop")]: {
//       padding: "24px 32px",
//     },
//     [theme.breakpoints.down("tablet")]: {
//       padding: "24px 16px",
//     },
//   },
//   logo: {
//     width: "130px",
//     height: "48px",
//     display: "flex",
//     alignItems: "center",
//     gap: "16px",
//     "& p": {
//       fontWeight: 700,
//       fontSize: "23px",
//       lineHeight: "28px",
//       color: "#FFF",
//     },
//   },
//   icon: {
//     width: "48px",
//     height: "48px",
//   },
// }));

// export default DevNavbar;
