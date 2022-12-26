import React from 'react'
import { Button, Theme } from '@mui/material'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles } from '@mui/styles'

interface Props {
  label: string
  background: 'primary' | 'secondary' | 'transparent' | 'white'
  size: 'small' | 'large'
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  className?: string
  to?: string
  icon?: JSX.Element
}

const ButtonBase:React.FC<Props> = ({label, background, size, icon, onClick, to, type}) => {
  const classes = useStyles()

  const bgColors = {
    "primary": "#081F4A",
    "secondary": "#FFEA00",
    "white": "#FFF",
    "transparent": "transparent",
  }

  const textColors = {
    "primary": "#FFF",
    "secondary": "#000",
    "white": "#081F4A",
    "transparent": "#FFF",
  }

  const paddings = {
    "small": "12px",
    "large": "16px",
  }

  if(to) {
    return (
      <Link to={to} className={classes.root} style={{background: bgColors[background], color: textColors[background], padding: paddings[size], maxWidth: size === 'small' ? '99px' : '176px'}}>
        {label} {icon}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes.root} style={{background: bgColors[background], color: textColors[background], padding: paddings[size], maxWidth: size === 'small' ? '99px' : '176px'}}>
      {label} {icon}
    </button>
  )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12.17px',
    fontWeight: 500,
    fontSize: '16px',
    fontFamily: 'var(--body-font)',
    textTransform: 'capitalize',
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
}))

export default ButtonBase