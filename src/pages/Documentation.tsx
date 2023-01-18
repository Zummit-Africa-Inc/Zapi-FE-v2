import React from 'react'
import { Stack, Theme } from "@mui/material";
import { Footer, Loader, Navbar } from "../components";
import Hero from '../components/help/Hero'
import Help from '../components/help/Help';

const Documentation = () => {
  return (
    <Stack>
    <Navbar />
    <Stack>
      <Help />
    </Stack>
    <Footer />
  </Stack>
  )
}

export default Documentation