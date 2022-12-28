import React from 'react'
import { Stack } from '@mui/material'

import { Brands, Hero, Navbar } from '../components'

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