import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Stack, Theme, Box, Button } from "@mui/material";
import { Check } from "@mui/icons-material";

import { PricingValuesType } from "../../types";

interface Props {
	pricing: PricingValuesType;
}

const PricingCard: React.FC<Props> = ({ pricing }) => {
	const classes = useStyles();
	
	return (
		<Box className={classes.root}>
			<Box className={classes.top}>
				<Box className={classes.left}>
					<Typography component="h3">{pricing.plan || "Plan"}</Typography>
					<Typography component="h2">{pricing.value || "0"}</Typography>
					<Typography component="p">Monthly</Typography>

				</Box>
				<Box className={classes.right}>
					<>
						{pricing.features.map((feature, index) => (
							<Box className={classes.items} key={index}>
								<Check />
								<Typography component="p">{feature}</Typography>
							</Box>
						))}
					</>
				</Box>
			</Box>

			<Button>{pricing.button_text}</Button>

		</Box >
	);
};

export default PricingCard;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "24px",
		backgroundColor: theme.palette.grey[500],
		border: `1px solid ${theme.shadows[11]}`,
		borderRadius: "10px",
		padding: "40px 24px",
		width: "469.33px",
		// height: "285px",
		"& .MuiButton-root": {
			backgroundColor: "#081F4A",
			padding: "12px 0",
			fontSize: "16px",
			fontWeight: 600,
			textTransform: "capitalize",
			color: "#f5f5f5",
			width: "100%",
			transition: ".2s ease-in-out",
			"&:hover": {
				backgroundColor: "#081F4A",
				opacity: .95
			}
		},
		
		[theme.breakpoints.down("tablet")]: {
			width: "100%",
		},
	},
	top: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	left: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderRight: "1px solid #D3D7DA",
		paddingRight: "24px",
		textAlign: "center",
		width: "50%",
		"& h2": {
			marginBottom: "4px",
			fontSize: "48px",
			fontWeight: 600,
			lineHeight: "56px",
			color: "#7B9FE1",
				
			[theme.breakpoints.down("tablet")]: {
				fontSize: "34px",
			},
		},
		"& h3": {
			marginBottom: "16px",
			fontSize: "23px",
			fontWeight: 600,
			lineHeight: "28px",
			color: theme.palette.grey[100],
				
			[theme.breakpoints.down("tablet")]: {
				fontSize: "19px",
			},
		},
		"& p": {
			fontSize: "16px",
			lineHeight: "29px",
			color: theme.palette.grey[400],
		},
	},
	right: {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		paddingLeft: "24px",
		width: "50%",
		"& p": {
			fontSize: "14px",
			lineHeight: "22px",
			color: theme.palette.grey[400],
			width: "100%",
		},

	},
	items: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "12px",
		"& svg": {
			backgroundColor: "#32C997",
			color: "#fff",
			borderRadius: "50%",
			padding: "2px",
			fontSize: "24px",
			fontWeight: "bolder",

		}
	},

}));
