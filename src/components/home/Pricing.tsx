import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Stack, Theme, Box, Card, CardContent, IconButton } from "@mui/material";
import { pricingBullet1, pricingBullet2 } from "../../assets/svg";

import { PricingCard } from "../"

import { PricingValuesType } from "../../types";

const pricing_values: Array<PricingValuesType> = [
	{
		plan: "Free Plan",
		value: "$0",
		features: [
			"500 Requests Monthly",
			"No Credit Card"
		],
		button_text: "Get Started",
	},
	{
		plan: "Unlimited Plan",
		value: "$20",
		features: [
			"Unlimited Requests Monthly",
			"Support Available"
		],
		button_text: "Get Started",
	},
	{
		plan: "Custom Plan",
		value: "Volume",
		features: [
			"Any request volume you need",
		],
		button_text: "Contact Us",
	},
];


const Pricing: React.FC = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
	<Box  className={classes.root}>
		<Typography component="h1">Flexible plans to get you started.</Typography>

		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: "center",
				flexWrap: 'wrap',
				gap: "40px",
				width: "100wh",
				'@media screen and (max-width: 834px)': {
					flexDirection: 'column',
					alignItems: 'center',
					gap: "20px",
					width: '100%',
				},
				'@media screen and (max-width: 428px)': {
					flexDirection: 'column',
					alignItems: 'center',
					gap: "20px",
					flexWrap: 'wrap',
					width: '100%',
				},
			}}
		>
			{pricing_values.map((pricing) => (
				<PricingCard pricing={pricing} />
			))}
		
		</Box>
	</Box >
  );
};

export default Pricing;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "64px",
		margin: "64px",
		"& h1": {
			textAlign: "center",
			fontWeight: 700,
			fontSize: "39px",
			color: theme.palette.grey[100],
			[theme.breakpoints.down("tablet")]: {
			  fontSize: "34px",
			},
		},
		
		[theme.breakpoints.down("tablet")]: {
			margin: "64px 32px",
		},
	}
}));
