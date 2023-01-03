import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Stack, Theme, Box } from "@mui/material";
import { MdCheckCircle} from "react-icons/md";


const Pricing: React.FC = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <Box>
      <Typography className={classes.pricing}>
        Flexible pricing to get you started.
      </Typography>
      <Stack className={classes.wrapper}>
          <Box className={classes.columns}>
            <Box className={classes.column}>
              <Box className={classes.content}>
                <Box style={{display: "flex",alignItems: "center",marginInlineEnd: "auto",gap: "1rem"}}>
                  <MdCheckCircle style={{ color: "#081F4A" }} />
                  <Stack direction="column" sx={{ textAlign: "start", gap: "0.5rem" }}>
                    <Typography variant="h6" sx={{fontWeight: 700, fontSize: "24px", lineHeight: "31px"}}>
                      Free
                    </Typography>
                    <Typography variant="h6" sx={{fontWeight: 500, fontSize: "16px", lineHeight: "20px"}}>
                      500 Requests
                    </Typography>
                  </Stack>
                </Box>
                <Stack direction="row" sx={{ textAlign: "start" }}>
                  <Typography variant="h1" sx={{fontWeight: 700, fontSize: "36px", lineHeight: "46px",               
                   color:"#071B85"}}>
                    $0
                  </Typography>
                  <Typography variant="h6"
                    sx={{
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "26px",
                      color: "#071B85",
                    }}>
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Box className={classes.column}
              style={{
                background: disabled ? "#E9EBED" : "#CFDEFA",
                pointerEvents: disabled ? "none" : "initial",
              }}>
              <Box className={classes.content}>
                <Box style={{display: "flex", alignItems: "center", marginInlineEnd: "auto", gap: "1rem"}}>
                  <MdCheckCircle style={{ color: "#5A5F65" }} />
                  <Stack direction="column"
                    sx={{ textAlign: "start", gap: "0.5rem" }}>
                    <Typography variant="h5" sx={{fontWeight: 700, fontSize: "24px", lineHeight: "31px"}}>
                      Basic
                    </Typography>
                    <Typography variant="h6" sx={{fontWeight: 500, fontSize: "16px", lineHeight: "20px"}}>
                      10,000 requests
                    </Typography>
                  </Stack>
                </Box>
                <Stack direction="row" sx={{ textAlign: "start" }}>
                  <Typography variant="h1" sx={{fontWeight: 700, fontSize: "36px", lineHeight: "46px",               
                   color:"#071B85"}}>
                    $10
                  </Typography>
                  <Typography variant="h6"
                    sx={{
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "26px",
                      color: "#5A5F65",
                    }}>
                    /month
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box className={classes.subColomn}
            style={{
              background: disabled ? "#E9EBED" : "#CFDEFA",
              pointerEvents: disabled ? "none" : "initial",
            }}>
            <Box className={classes.content}>
              <div style={{display: "flex", alignItems: "center", marginInlineEnd: "auto", gap: "1rem"}}>
                <MdCheckCircle style={{  color: "#5A5F65" }} />
                <Stack direction="column"
                  sx={{ textAlign: "start", gap: "0.5rem" }}>
                  <Typography variant="h5" sx={{fontWeight: 700, fontSize: "24px", lineHeight: "31px"}}>
                    Premium
                  </Typography>
                  <Typography variant="h6" sx={{fontWeight: 500, fontSize: "16px", lineHeight: "20px"}}>
                    20,000 requests
                  </Typography>
                </Stack>
              </div>
              <Stack direction="row" sx={{ textAlign: "start" }}>
                <Typography variant="h1" sx={{fontWeight: 700, fontSize: "36px", lineHeight: "46px",               
                   color:"#071B85"}}>
                  $20
                </Typography>
                <Typography variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#5A5F65",
                  }}>
                  /month
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box className={classes.subColomn}
            style={{
              background: disabled ? "#E9EBED" : "#CFDEFA",
              pointerEvents: disabled ? "none" : "initial",
            }}>
            <Box className={classes.content}>
              <div style={{display: "flex", alignItems: "center", marginInlineEnd: "auto", gap: "1rem"}}>
                <MdCheckCircle style={{ color: "#5A5F65" }} />
                <Stack direction="column"
                  sx={{ textAlign: "start", gap: "0.5rem" }}>
                  <Typography variant="h5" sx={{fontWeight: 700, fontSize: "24px", lineHeight: "31px"}}>
                    Mega
                  </Typography>
                  <Typography variant="h6" sx={{fontWeight: 500, fontSize: "16px", lineHeight: "20px"}}>
                    100,000 requests
                  </Typography>
                </Stack>
              </div>
              <Stack direction="row" sx={{ textAlign: "start" }}>
                <Typography variant="h1" sx={{fontWeight: 700, fontSize: "36px", lineHeight: "46px",               
                   color:"#071B85"}}>
                  $50
                </Typography>
                <Typography variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#5A5F65",
                  }}>
                  /month
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box className={classes.subColomn}
            style={{
              background: disabled ? "#E9EBED" : "#CFDEFA",
              pointerEvents: disabled ? "none" : "initial",
            }}>
            <Box className={classes.content}>
              <div style={{display: "flex", alignItems: "center", marginInlineEnd: "auto", gap: "1rem"}}>
                <MdCheckCircle style={{ color: "#5A5F65" }} />
                <Stack direction="column"
                  sx={{ textAlign: "start", gap: "0.5rem" }}>
                  <Typography variant="h5" sx={{fontWeight: 700, fontSize: "24px", lineHeight: "31px"}}>
                    Entreprise
                  </Typography>
                  <Typography variant="h6" sx={{fontWeight: 500, fontSize: "16px", lineHeight: "20px"}}>
                    500,000 requests
                  </Typography>
                </Stack>
              </div>
              <Stack direction="row" sx={{ textAlign: "start" }}>
                <Typography variant="h1" sx={{fontWeight: 700, fontSize: "36px", lineHeight: "46px",               
                   color:"#071B85"}}>
                  $100
                </Typography>
                <Typography variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#5A5F65",
                  }}>
                  /month
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
    </Box>
  );
};

export default Pricing;

const useStyles = makeStyles((theme: Theme) => ({
  pricing: {
    textAlign: "center",
    alignItem: "center",
    color: "#071B85",
    fontWeight: 700,
    fontSize: "39px",
    paddingTop: "64px",
  },
  wrapper: {
    padding: "32px",
  },
  column: {
    width: "calc(50% - 30px)",
    backgroundColor: "#CFDEFA",
    color: "#5A5F65",
    margin: "0 15px 30px",
    padding: "20px",
    borderRadius: "4px",
    boxSizing: "border-box",
    "@media screen and (max-width: 800px)": {
      width: "100%",
      margin: "0 3px 30px",
    },
  },
  subColomn: {
    justifyContent: "space-around",
    marginLeft: "auto",
    width: "calc(50% - 30px)",
    background: "#E9EBED",
    color: "#5A5F65",
    margin: "0 15px 30px",
    padding: "20px",
    borderRadius: "4px",
    boxSizing: "border-box",
    "@media screen and (max-width: 800px)": {
      width: "100%",
    },
  },
  col: {
    marginLeft: "auto !important",
    width: "calc(50% - 30px)",
    backgroundColor: "#E9EBED",
    color: "#5A5F65",
    margin: "0 15px 30px",
    padding: "20px",
    border: "1px solid #1331CA",
    borderRadius: "4px",
    boxSizing: "border-box",
    "@media screen and (max-width: 800px)": {
      width: "100%",
    },
  },
  columns: {
    display: "flex",
    flexWrap: "wrap",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "1.5rem",
    textAlign: "center",
    position: "relative",
  },
  discount: {
    borderRadius: "4px",
    backgroundColor: "#AFF0B6",
    height: "26px",
    width: "81px",
    top: "-30px",
    left: "0",
    position: "absolute",
    padding: "2px 4px",
    border: "1px solid #0A9A18",
  },
}));