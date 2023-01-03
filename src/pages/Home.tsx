import React from "react";
import { Stack } from "@mui/material";

import { PricingSection } from '../components'
import {
  AiModels,
  Brands,
  Discover,
  Features,
  Hero,
  Market,
  Navbar,
} from "../components";

const Home = () => {
  return (
    <Stack direction="column">
      <Navbar />
      <Hero />
      <Brands />
      <PricingSection />
      <AiModels />
      <Discover />
      <Features />
      <Market />
    </Stack>
  );
};

export default Home;
