import React, { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import {
	Typography,
	Theme,
	Box,
	Tooltip,
	Button,
	Paper,
	InputBase,
	IconButton,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Tabs,
	Tab,
	Stack,
} from "@mui/material";
import { Search, ExpandMore, ChatRounded } from "@mui/icons-material";
import Cookies from "universal-cookie";
import { APIType, EndpointsType } from "../../types";
import { RiSearch2Line } from "react-icons/ri";

const CustomTabs = styled(Tabs)({
	"&.MuiTabs-root": {
		width: "auto",
		borderRight: "1px solid #D1D1D1",
		height: "100vh",
	},
	"& .MuiTabs-indicator": {
		display: "none",
	},
});

const CustomTab = styled(Tab)({
	"&.MuiTab-root": {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		fontWeight: "normal",
		fontSize: "14px",
		maxWidth: "100%",
		borderBottom: "1px solid #D1D1D1",
	},
	"&.Mui-selected": {
		backgroundColor: "#f1f1f1",
	},
});

const CustomAccordion = styled(Accordion)({
	"&.MuiAccordion-root": {
		boxShadow: "unset",
		border: "unset",
		background: "unset",
	},
});

interface Props {
	endpoints: Array<EndpointsType>;
	api: APIType;
}

const Endpoints: React.FC<Props> = ({ api, endpoints }) => {
	const classes = useStyles();
	const cookies = new Cookies();
	const accessToken = cookies.get("accessToken");
	const [tab, setTab] = useState<number>(0);
	const handleTabChange = (e: SyntheticEvent, newValue: number) => {
		setTab(newValue);
	};

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
				}}>
				<Typography component="h2">Endpoint</Typography>

				<Box component="form" className={classes.search_form}>
					<InputBase
						sx={{
							background: "unset",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "2px",
							margin: "2px 20px 2px 3px",
							fontSize: "16px",
							fontFamily: "Lato",
							color: "#929AA3",
						}}
						placeholder="Search"
						inputProps={{ "aria-label": "search" }}
						startAdornment={
							<IconButton type="button" aria-label="search">
								<RiSearch2Line style={{ color: "#929AA3", width: "20px" }} />
							</IconButton>
						}
					/>
				</Box>
			</Box>

			{endpoints && endpoints.length !== 0 ? (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "20px",
						marginBottom: "64px",
					}}>
					{endpoints?.map((endpoint, index) => (
						<Box className={classes.endpoint_container}>
							<Box className={classes.endpoint_method}>
								<Typography component="p">
									{endpoint.method || "POST"}
								</Typography>
							</Box>

							<Box className={classes.endpoint_desc}>
								<Typography component="p">
									{endpoint.name ||
										"ipsum dolor sit amet consectetur. Feugiat amet aliquam rutrum in"}
								</Typography>
							</Box>
						</Box>
					))}
				</Box>
			) : (
				<Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							marginTop: "80px",
							width: "100%",
						}}>
						<ChatRounded sx={{ fontSize: "28px", color: "#264276" }} />
						<Typography sx={{ fontSize: "15px", color: "#060607" }}>
							There are no endpoints in this API.
						</Typography>
					</Box>
				</Box>
			)}

			<Typography component="h3">
				Endpoint description
			</Typography>
			<Typography component="h5">
				Get the predicted sentiment of a text which can either be neutral,
				positive or negative.
			</Typography>

			<Box
				sx={{
					marginBottom: "80px",
					padding: "0 4px",
				}}>
				<CustomAccordion>
					<AccordionSummary expandIcon={<ExpandMore />} className={classes.accordion_summary}>
						<Typography component="h4">Headers Parameters</Typography>
					</AccordionSummary>
					<AccordionDetails></AccordionDetails>
				</CustomAccordion>
				<CustomAccordion>
					<AccordionSummary expandIcon={<ExpandMore />} className={classes.accordion_summary}>
						<Typography component="h4">Body Parameters</Typography>
					</AccordionSummary>
					<AccordionDetails></AccordionDetails>
				</CustomAccordion>
				<CustomAccordion>
					<AccordionSummary expandIcon={<ExpandMore />} className={classes.accordion_summary}>
						<Typography component="h4">Query Parameters</Typography>
					</AccordionSummary>
					<AccordionDetails></AccordionDetails>
				</CustomAccordion>
			</Box>
		</Box>
	);
};

export default Endpoints;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		marginBottom: "15px",
		padding: "0 108px",
		lineHeight: "41px",
		width: "100%",
		"& h2": {
			margin: "64px 0 32px 0",
			fontWeight: "bold",
			fontSize: "19px",
			color: theme.palette.grey[100],
		},

		"@media screen and (max-width: 900px)": {
			padding: "44px 32px 24px 32px",

			"& h2": {
				fontSize: "23px",
			},
		},

	"& h3": {
		fontWeight: "bold",
		fontSize: "19px",
		color: theme.palette.grey[100],
	},

	"& h5": {
		margin: "16px 0 40px 0",
		fontSize: "16px",
		color: theme.palette.grey[600],
	},

		"@media screen and (max-width: 428px)": {
			padding: "20px 16px 24px 16px",
			fontSize: "14px",
		},
	},
	search_form: {
		boxShadow: "unset",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.palette.grey[500],
		border: `1px solid ${theme.shadows[1]}`,
		borderRadius: "4px",
		"@media screen and (max-width: 428px)": {
			marginBottom: "64px",
		},
	},
	endpoint_container: {
		cursor: "pointer",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "28px",
		backgroundColor: theme.shadows[2],
		padding: "12px 24px",
	},
	endpoint_method: {
		backgroundColor: theme.shadows[3],
		borderRadius: "3px",
		padding: "4px 10px",
		fontSize: "13px",
		color: theme.shadows[4],
		textTransform: "capitalize",
	},
	endpoint_desc: {
		fontSize: "16px",
		fontWei9ght: 400,
		color: theme.shadows[5],
	},
	accordion_summary: {
		display: "flex",
		flexDirection: "row-reverse",
		alignItems: "center",
		gap: "20px",
		"& h4": {
			fontSize: "16px", 
			color: theme.palette.grey[600],
		},
		"& svg": {
			fontSize: "32px",
		},
	}
	
}));
