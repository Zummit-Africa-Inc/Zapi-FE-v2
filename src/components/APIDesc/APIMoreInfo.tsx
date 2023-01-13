import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Stack, Theme, Box, Tooltip, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { BookmarkAddedOutlined, BookmarkRemove, BookmarkAddOutlined, StarBorder } from "@mui/icons-material";


const APIMoreInfo: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", padding: "0 20px 15px 0", borderBottom: "1px solid #d1d1d1" }}>
            <Box>
                <Typography component="h2">{"Name of API"}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography component="p">
                        <>By: {"Unknown"}</>
                    </Typography>
                    <hr/>
                    <Typography component="p">
                        <>Created On: {"Today"}</>
                    </Typography>
                    <hr/>
                    <Tooltip title="Category" placement="right" arrow>
                        <Link to={'/api-hub'} >
                            <Typography component="p">
                              {"Category"}
                            </Typography>
                        </Link>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
        <Stack direction="row" spacing={4} justifyContent={"end"} alignItems={"center"}>
            <Box>
                <Button variant="outlined"
                    endIcon={<StarBorder />}
                    sx={{ border: "1px solid #515D99", color: "#515D99", borderRadius: "5px", fontSize: "13px", minWidth: "130px", height: "2.3rem", }}
                >
                    Rate
                </Button>
            </Box>
            <Box>
                <Button
                    variant={"outlined"}
                    sx={{ backgroundColor: "#264276", border: "1px solid #264276", color: "#FFFFFF", borderRadius: "5px", fontSize: "13px", minWidth: "130px", height: "2.3rem" }}
                >
                    {"Subscribe"}
                </Button>
            </Box>
        </Stack>
        
        <Box>
            <Typography component="h3">Website</Typography>
            <Typography component="p">
                Website: {"Website not specified"}
            </Typography>

            <Typography component="h3">Documentation</Typography>
            <Typography component="p">{"ReadMe file not attached"}</Typography>
            
            <Typography component="h3">About API</Typography>
            <Typography component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatum atque quasi placeat eum tempore aliquam, dolores quod! Quasi similique distinctio qui illum. Ea, possimus? Perspiciatis error minus distinctio quidem?
            </Typography>
            
        </Box>

    </Box>
  );
};

export default APIMoreInfo;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: "15px",
    padding: "86px 8rem 50px 8rem",
    lineHeight: "41px",
    width: '100%',
    "& h2": {
        marginBottom: 16,
        fontWeight: "bold",
        fontSize: "28px",
        color: "#060607",
    },
    "& h3": {
        marginBottom: 16,
        fontWeight: 700,
        fontSize: "19px",
        color: "#060607",
    },
    "& p": {
        marginBottom: 48,
        fontWeight: 400,
        fontSize: "16px",
        color: "#3E4245",
    },
  },
}));