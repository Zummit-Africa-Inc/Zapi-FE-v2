import React from 'react'
import { Stack } from '@mui/material'

import { Hero, Navbar } from '../components'
import Brands from '../components/home/Brands'

const Home = () => {
  return (
    <Stack direction='column'>
      <Navbar />
      <Hero />
      <Brands />
    </Stack>
  )
}

export default Home