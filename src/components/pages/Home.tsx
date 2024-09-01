import React from "react";
import HeroSection from "../HeroSection";
import Card from "../Card";
import AllCards from "../AllCards";
import { json } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AllCards></AllCards>
    </>
  );
};

export default Home;
