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
    </Stack>
  );
};

export default Home;
