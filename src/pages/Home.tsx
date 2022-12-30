import React from 'react'
import { Stack } from '@mui/material'

import { Brands, Hero, Navbar, PricingSection } from '../components'

const Home = () => {
  return (
    <Stack direction='column'>
      <Navbar />
      <Hero />
      <Brands />
      <PricingSection />
    </Stack>
  )
}

export default Home