import React, { ChangeEvent, FormEvent, MouseEvent, SyntheticEvent, useEffect, useState } from "react";
import { Card, Rating, Typography, Box, Button, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

import { useHttpRequest } from "../../hooks";
import { ButtonSpinner } from "../../components";

import { StarRounded, StarOutlineRounded } from "@mui/icons-material";

interface Props {
  apiId: string | undefined
  onClose: () => void
};

const core_url = "VITE_CORE_URL";

const RatingComponent:React.FC<Props> = ({apiId, onClose}) => {
  const {error, loading, sendRequest} = useHttpRequest();
  const [rating, setRating] = useState<number | null>(0);
  const [review, setReview] = useState<string>("");
  const classes = useStyles();
  const cookies = new Cookies();


  const handleRating = async(e: FormEvent) => {
	e.preventDefault()
	if(!rating) return toast.error('Please add a rating')
	if(!review) return toast.error('Please add a comment')
	const headers = {
	  'Content-Type': "application/json",
	  'X-Zapi-Auth-Token': `Bearer ${cookies.get("accessToken")}`
	}
	const profileId = cookies.get("profileId");
	const payload = {review, rating, reviewer: profileId}
	try {
	  const data = await sendRequest(
		`/api/rate-api/${profileId}/${apiId}`, 
		"post", 
		core_url, 
		payload, 
		headers
	)
	  if(data === undefined) return
	  toast.success("Rating Added Successfully!");
	} catch (error: any) {}
	
    return () => onClose();
  }
  
  useEffect(() => {
	error && toast.error(`${error}`)
  },[error])

  return (
	<Box className={classes.backdrop} onClick={() => onClose()}>
	  <Box className={classes.container} onClick={(e: MouseEvent) => e.stopPropagation()}>
		<Typography component="h2">
		  Rate API
		</Typography>
		<Box component="form" onSubmit={handleRating} className={classes.form}>
		  <Box className={classes.control}>
			<Rating 
				emptyIcon={<StarOutlineRounded className={classes.emptyIcon} />} 
				icon={<StarRounded/>} 
				precision={1} 
				defaultValue={1}
				size={'medium'}
				value={rating} 
				onChange={(e: SyntheticEvent, value: number | null) => setRating(value)} 
			/>
		  </Box>
		  
		  <Box 
			component="textarea" 
			rows={3} 
			placeholder="Leave a comment" 
			value={review} 
			onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value)} 
			className={classes.textarea} 
		  />
		  
		  <Box className={classes.button_container}>
			<Button variant={'outlined'} type="button" onClick={() => onClose()} className={classes.cancel}>
			  Cancel
			</Button>
			<Button variant={'contained'} type="submit" className={classes.submit}>
			  {loading ? <ButtonSpinner /> : "Submit"}
			</Button>
		  </Box>
		</Box>
	  </Box>
	</Box>
  )
}

export default RatingComponent;

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
	width: "100vw",
	height: "100vh",
	display: "grid",
	placeItems: "center",
	position: "fixed",
	top: 0,
	left: 0,
	backgroundColor: theme.shadows[12],
	backdropFilter: "blur(2px)",
	zIndex: 70,
  },
  container: {
	backgroundColor: theme.palette.grey[500],
	borderRadius: "10px",
	boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.11)",
	padding: "34px 32px",
	width: "548px",
	// height: "453px",

	"& h2": {
	  marginBottom: "32px",
	  fontSize: "19px",
	  fontWeight: "700",
	  lineHeight: "23px",
	  color: theme.palette.grey[100],
	},
	
    "@media screen and (max-width: 548px)": {
		borderRadius: "0",
		width: "100%",
		height: "100%",
	},
  },
  form: {
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
  },
  control: {
	display: "flex",
	alignItems: "center",
	gap: "1rem",
	width: "fit-content",
  },
  emptyIcon: {
	color: theme.shadows[13]
  },
  textarea: {
	outline: "none",
	resize: "none",
	background: "none",
	marginBottom: "32px",
	border: "1px solid #BEC2C8",
	borderRadius: "10px",
	padding: "16px",
	width: "484px",
	height: "193px",
	
    "@media screen and (max-width: 548px)": {
		width: "100%",
	},
  },
  button_container: {
	display: "flex",
	alignItems: "center",
	alignSelf: "flex-end",
	gap: "1rem",
	
	"& .MuiButton-root": {
		fontWeight: 600,
		fontSize: "14px",
		textTransform: "capitalize",
		borderRadius: "4px",
		width: "92px",
		height: "41px",
	},
  },
  cancel: {
	border: "1px solid #929AA3 !important",
	color: "#929AA3 !important",
  },
  submit: {
	border: "unset",
	backgroundColor: theme.shadows[9],
	color: `${theme.palette.background.default} !important`,
	transition: "0.5s all ease-in-out cubic-bezier(0.075, 0.82, 0.165, 1)",
  },

}));
