import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  label: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  className?: string
  to?: string
  icon?: any
}

const ButtonBase:React.FC<Props> = ({label, className, icon, onClick, to, type}) => {

  if(to) {
    return (
      <Link to={to} className={className}>
        {icon} {label}
      </Link>
    )
  }

  return (
    <Button type={type} onClick={onClick} className={className}>
      {icon} {label}
    </Button>
  )
}

export default ButtonBase