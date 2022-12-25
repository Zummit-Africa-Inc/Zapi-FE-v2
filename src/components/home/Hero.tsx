import React from 'react'
import { Stack, Theme, Typography } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

import { Navbar } from '../'

const Hero:React.FC = () => {
  return (
    <Stack direction='column' >
        <Navbar />
    </Stack>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        background: theme.palette.primary.main,
    }
}))

export default Hero