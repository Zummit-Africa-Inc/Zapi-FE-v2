import React from "react";
import { Stack } from "@mui/material";

import {
  AiModels,
  Brands,
  Discover,
  Features,
  Hero,
  Market,
  Navbar,
  Pricing,
  Blog,
  GettingStarted,
  Footer,
} from "../components";

const Home = () => {
  return (
    <Stack direction="column">
      <Navbar />
      <Hero />
      <Brands />
      <AiModels />
      <Discover />
      <Features />
      <Market />
      <Pricing />
      <Blog />
      <GettingStarted />
      <Footer />
    </Stack>
  );
};

export default Home;
