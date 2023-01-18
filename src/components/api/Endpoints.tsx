import React from "react";
import { styled, makeStyles } from "@mui/styles";
import { Typography, Theme, Box, Tooltip, Button, Paper, InputBase, IconButton, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Search, ExpandMore } from "@mui/icons-material";
import Cookies from "universal-cookie";
import { APIType, EndpointsType } from "../../types";

const CustomAccordion = styled(Accordion)({
	"&.MuiAccordion-root": {
	  boxShadow: "unset",
	  border: "unset",
	  backgroundColor: "#fff",
	}
});

interface Props {
	endpoints: Array<EndpointsType>;
	api: APIType
}
  
const Endpoints: React.FC<Props> = ({api, endpoints}) => {
  const classes = useStyles();
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");

  return (
    <Box className={classes.root}>
		<Box 
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				
				"@media screen and (max-width: 428px)": {
					flexDirection: "column",
				},
			}}
		>
			<Typography component="h2">Endpoint</Typography>
			
			<Box
				component="form"
				sx={{
					boxShadow: "unset",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#fff",
					border: "1px solid #A8AEB5",
					borderRadius: "4px",
					width: "263px",
					height: "auto",
					"@media screen and (max-width: 428px)": {
						marginBottom: "64px",
					},
					
				}}>
				<InputBase
					sx={{
						fontSize: "16px",
						fontFamily: "Lato",
						color: "#060607",
						backgroundColor: "#fff",
						padding: "2px 20px 2px 0",
					}}
					placeholder="Search"
					inputProps={{ "aria-label": "search" }}
					startAdornment={
					<IconButton type="button" aria-label="search">
						<Search sx={{ width: "20px" }} />
					</IconButton>
				}
				/>
			</Box>

		</Box>


		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				gap: "28px",
				marginBottom: "32px",
				backgroundColor: "#D3D7DA",
				padding: "12px 24px",
			}}
		>
			<Box
				sx={{
					backgroundColor: "#081F4A",
					borderRadius: "3px",
					padding: "4px 10px",
					fontSize: "13px",
					color: "#fff",
					textTransform: "uppercase"
				}}
			>
				<Typography component="p">POST</Typography>
			</Box>

			<Box
				sx={{
					fontSize: "16px",
					fontWeight: 400,
					color: "#060607"
				}}
			>
				<Typography component="p">ipsum dolor sit amet consectetur. Feugiat amet aliquam rutrum in </Typography>
			</Box>

		</Box>

		
		<Typography component="h3" 
			sx={{
				fontWeight: "bold",
				fontSize: "19px",
				color: "#060607",
			}}
		>
			Endpoint description
		</Typography>
		<Typography component="p"
			sx={{
				margin: "16px 0 40px 0",
				fontSize: "16px",
				color: "#3E4245",
			}}
		>
			Get the predicted sentiment of a text which can either be neutral, positive or negative.
		</Typography>

		<Box
			sx={{
				marginBottom: "80px",
				padding: "0 4px"
			}}
		>
			<CustomAccordion>
				<AccordionSummary 
					sx={{ 
						display: "flex", 
						flexDirection: "row-reverse", 
						alignItems: "center", 
						gap: "20px", 
						"& svg": {
							fontSize: "32px",
						}
					}} 
					expandIcon={<ExpandMore />}
				>
				<Typography sx={{ fontSize: "16px", color: "#3E4245" }}>
					Headers Parameters
				</Typography>
				</AccordionSummary>
				<AccordionDetails>
					
				</AccordionDetails>
			</CustomAccordion>
			<CustomAccordion>
				<AccordionSummary 
					sx={{ 
						display: "flex", 
						flexDirection: "row-reverse", 
						alignItems: "center", 
						gap: "20px", 
						"& svg": {
							fontSize: "32px",
						}
					}} 
					expandIcon={<ExpandMore />}
				>
				<Typography sx={{ fontSize: "16px", color: "#3E4245" }}>
					Body Parameters
				</Typography>
				</AccordionSummary>
				<AccordionDetails>  

				</AccordionDetails>
			</CustomAccordion>
			<CustomAccordion>
				<AccordionSummary 
					sx={{ 
						display: "flex", 
						flexDirection: "row-reverse", 
						alignItems: "center", 
						gap: "20px", 
						"& svg": {
							fontSize: "32px",
						}
					}} 
					expandIcon={<ExpandMore />}
				>
				<Typography sx={{ fontSize: "16px", color: "#3E4245" }}>
					Query Parameters
				</Typography>
				</AccordionSummary>
				<AccordionDetails>     
					
				</AccordionDetails>
			</CustomAccordion>

		</Box>

    </Box>			
  );
};

export default Endpoints;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: "15px",
    padding: "0 108px",
    lineHeight: "41px",
    width: '100%',
    "& h2": {
        margin: "63px 0",
        fontWeight: "bold",
        fontSize: "19px",
        color: "#060607",
    },

    "@media screen and (max-width: 900px)": {
		padding: "44px 32px 24px 32px",
	     
	    "& h2": {
	        fontSize: "23px",
	    },
    },

    "@media screen and (max-width: 428px)": {
      padding: "20px 16px 24px 16px",
      fontSize: "14px",
    },
    
  },
}));
