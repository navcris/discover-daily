import React from "react";
import HeroSection from "../HeroSection";
import Card from "../Card";
import AllCards from "../AllCards";
import { json } from "react-router-dom";
import Footer from "../Footer";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AllCards></AllCards>
      <Footer></Footer>
    </>
  );
};

export default Home;
