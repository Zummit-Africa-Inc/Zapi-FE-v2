import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface Props {
  value: number;
  index: number | string
  children: React.ReactNode
  className?: string
}

const TabPanel:React.FC<Props> = ({children, index, value, className}) => {
  return (
    <Box className={className} style={{width:"100%", height:"100%"}} role='tab-panel' hidden={value !== index} id={`simple-tab-${index}`}>
      {value === index && <Box style={{width:"100%", height:"100%", padding: 0}}>{children}</Box>}
    </Box>
  )
}

export default TabPanel