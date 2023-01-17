import React from 'react'
import { Stack, Theme } from "@mui/material";
import { Footer, Loader, Navbar } from "../components";
import Hero from '../components/help/Hero'

const Documentation = () => {
  return (
    <Stack>
    <Navbar />
    <Stack>
      <Hero />
    </Stack>
    <Footer />
  </Stack>
  )
}

export default Documentation