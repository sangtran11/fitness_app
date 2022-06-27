import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import HeroBanners from "../components/HeroBanners";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  return (
    <Box>
      <HeroBanners />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
