import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppBar, Stack, Theme } from '@mui/material'
import { createStyles, makeStyles, styled } from '@mui/styles'

import { Button } from '../'
import { zapi } from '../../assets'

const Navbar:React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root}>
      <Link to='/'>
        <img src={zapi} alt="zapi logo" />
      </Link>
      <Stack direction='row' alignItems='center' spacing='40px'>
      </Stack>
      <Stack direction='row' alignItems='center' spacing='40px'>

      </Stack>
    </AppBar>
  )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    height: '88px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'transparent',
    [theme.breakpoints.up('laptop')]: {
      padding: '24px 108px',
    }
  },
  button: {
    width: '99px',
    height: '40px',
    display: 'grid',
    placeItems: 'center',
    background: theme.palette.secondary.main,
    color: '#000',
    padding: '12px 24px',
  }
}))

export default Navbar