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
    const { setActiveMenu, handleClicked, currentMode, setMode, activeMenu } = useAppContext()
    const { isLoggedIn } = useAppSelector(store => store.auth)
    const classes = useStyles()

  return (
    <Box className={classes.root} onClick={(e: MouseEvent) => e.stopPropagation()} style={{transform: activeMenu ? 'translateX(0)' : 'translateX(-101%)'}}>
        <Stack width='100%' direction='row' justifyContent='end' mb='48px'>
            <FiX onClick={() => setActiveMenu(false)} style={{color: '#FFF',fontSize: '24px',cursor: 'pointer'}} />
        </Stack>
        <Stack width='100%' direction='column' spacing='42px'>
            {LINKS.map((_, index) => (
                <NavLink key={index} to={_.to} onClick={() => setActiveMenu(false)} className={({isActive}) => isActive ? classes.activeLink : classes.inactiveLink}>
                    {_.name}
                </NavLink>
            ))}
        </Stack>
        {!isLoggedIn ? (
            <Stack width='100%' direction='column' spacing='42px' mt='32px' mb='64px'>
                <Button label='Log In' background='transparent' size='small' onClick={() => {setActiveMenu(false); handleClicked('login')}} />
                <Button label='Sign Up' to='/signup' background='secondary' size='small' onClick={() => setActiveMenu(false)} style={{width: '100%'}} />
            </Stack>
        ):(
            <Stack width='100%' direction='column' spacing='42px' mt='32px' mb='64px'>
                <Button label='Dashboard' background='white' size='small' to='/developer/dashboard' onClick={() => setActiveMenu(false)} style={{width: '100%'}} />
                <Button label='Logout' background='secondary' size='small' onClick={() => {setActiveMenu(false); handleClicked('logout')}} style={{width: '100%'}} />
            </Stack>
        )}
        <Stack width='100%' direction='row' justifyContent='end'>
            <Box className={classes.modeToggle}>
                <Box style={{background: currentMode === 'light' ? '#E9EBED':''}}>
                    <Sun fill={currentMode !== 'dark' ? '#000' : '#E9EBED'} onClick={() => setMode('light')} />
                </Box>
                <Box style={{background: currentMode === 'dark' ? '#E9EBED':''}}>
                    <Moon fill={currentMode !== 'light' ? '#000' : '#E9EBED'} onClick={() => setMode('dark')} />
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '70px 38px ',
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'all 500ms ease-in-out',
        boxShadow: '0px 4px 6px 0px rgba(225, 225, 225, 0.5)',
        zIndex: '20 !important',
        [theme.breakpoints.up('laptop')]: {
            display: 'none',
        },
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