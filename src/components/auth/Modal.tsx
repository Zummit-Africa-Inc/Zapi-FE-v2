import React from "react";
import { makeStyles} from "@mui/styles";
import { Backdrop, Box, Button, Theme, Typography } from "@mui/material";

interface Props {
    message: string
    onClose: () => void
    onConfirm: () => void
}

const Modal = ({message, onClose, onConfirm}:Props) => {
    const classes = useStyles();
    
  return (
    <Box className={classes.backdrop}>
        <Box className={classes.modal}>
            <Typography
                sx={{fontSize: 20, fontWeight: 700, margin: "8px 0 80px", textAlign: "center"}}>
                {message}
            </Typography>
            <Box className={classes.flex}>
                <Button
                    className={classes.button}
                    onClick={() => onClose()}>
                    continue
                </Button>
                <Button
                    className={classes.button}
                    onClick={() => onConfirm()}>
                    go to dashboard
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
    backdrop: {
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "1000000 !important", 
        position: "fixed",
        top: 0,
        left: 0,
    },
    modal: {
        width: "500px",
        maxWidth: "95%",
        background: "#FFF",
        borderRadius: "6px",
        padding: "24px 16px",
    },
    flex: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    button: {
        "&.MuiButton-root": {
            background: theme.palette.primary.main,
            color: "#FFF",
            fontWeight: 700,
            fontFamily: "var(--body-font)",
            "&:hover": {
                background: `${theme.palette.primary.main}95`,
            }
        }
    },
}));

export default Modal