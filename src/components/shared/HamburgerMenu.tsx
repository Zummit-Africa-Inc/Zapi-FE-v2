import React, { MouseEvent } from 'react'
import { FiX } from 'react-icons/fi'
import { makeStyles } from '@mui/styles'
import { Box, Stack, Theme } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { useAppContext } from '../../contexts/AppProvider'
import { Moon, Sun } from '../../assets/icons'
import { useAppSelector } from '../../hooks'
import { Button } from '../'

const LINKS = [
    { name: 'Home', to: '/' },
    { name: 'API Hub', to: '/api-hub' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Documentation', to: '/documentation' },
]

const HamburgerMenu:React.FC = () => {
    const { setActiveMenu, handleClicked, currentMode, setMode } = useAppContext()
    const { isLoggedIn } = useAppSelector(store => store.auth)
    const classes = useStyles()

  return (
    <Box className={classes.root} onClick={(e: MouseEvent) => e.stopPropagation()}>
        <Stack width='100%' direction='row' justifyContent='end' mb='48px'>
            <FiX onClick={() => setActiveMenu(false)} style={{color: '#FFF',fontSize: '24px',cursor: 'pointer'}} />
        </Stack>
        <Stack width='100%' direction='column' spacing='52px' mb='140px'>
            {LINKS.map((_, index) => (
                <NavLink key={index} to={_.to} onClick={() => setActiveMenu(false)} className={({isActive}) => isActive ? classes.activeLink : classes.inactiveLink}>
                    {_.name}
                </NavLink>
            ))}
        </Stack>
        {!isLoggedIn ? (
            <Stack width='100%' direction='column' spacing='42px' mb='64px'>
                <Button label='Log In' background='transparent' size='small' onClick={() => {setActiveMenu(false); handleClicked('login')}} />
                <Button label='Sign Up' to='/signup' background='secondary' size='small' onClick={() => setActiveMenu(false)} className={classes.fullWidth} />
            </Stack>
        ):(
            <Stack width='100%' direction='column' spacing='42px' mb='64px'>
                <Button label='Dashboard' background='white' size='small' to='/developer/dashboard' onClick={() => setActiveMenu(false)} className={classes.fullWidth} />
                <Button label='Logout' background='secondary' size='small' onClick={() => {setActiveMenu(false); handleClicked('logout')}} className={classes.fullWidth} />
            </Stack>
        )}
        <Stack width='100%' direction='row' justifyContent='end'>
            <Box className={classes.modeToggle}>
                <Box style={{background: currentMode === 'light' ? '#E9EBED':'',color: currentMode === 'light' ? '#000':''}}>
                    <Sun onClick={() => setMode('light')} />
                </Box>
                <Box style={{background: currentMode === 'dark' ? '#E9EBED':'',color: currentMode === 'dark' ? '#000':''}}>
                    <Moon onClick={() => setMode('dark')} />
                </Box>
            </Box>
        </Stack>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '319px',
        height: '100vh',
        background: theme.palette.primary.main,
        padding: '70px 38px',
        [theme.breakpoints.up('laptop')]: {
            display: 'none',
        }
    },
    activeLink: {
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '24px',
        color: theme.palette.secondary.main,
    },
    inactiveLink: {
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#FFF',
        '&:hover': {
          color: theme.palette.grey[300],
        }
    },
    modeToggle: {
        width: '144px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        gap: '',
        border: `1px solid ${theme.palette.background.paper}`,
        borderRadius: '6px',
        padding: '8px 16px',
        '& .MuiBox-root': {
            width: '56px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '3px',
        }
    },
    fullWidth: {
        width: '100%',
    }
}))

export default HamburgerMenu