import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="\earth.mp4" autoPlay loop muted playsInline />
      <h1>Discover Daily</h1>
      <p>Explore. Learn. Discover.</p>
    </div>
  );
}

export default HeroSection;
