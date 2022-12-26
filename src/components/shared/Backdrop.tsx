import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface Props {
    children: React.ReactNode
    onClose: () => void
    className?: string
}

const Backdrop:React.FC<Props> = ({children, onClose, className}) => {
    const classes = useStyles()

  return (
    <Box className={`${classes.root} ${className}`} onClick={onClose}>
        {children}
    </Box>
  )
}

const useStyles = makeStyles({
    root: {
        width: '100vw',
        height: '100vh',
        background: "rgba(225, 225, 225, 0.3)",
        backdropFilter: "blur(2px)",
        zIndex: '50 !important',
        position: 'fixed',
        overflowY: 'scroll',
        top: 0,
        left: 0,
    }
})

export default Backdrop