import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <div>
      <div className="about-hero-container">
        <img className="about-main-img" src={"./public/classroom.jpg"}></img>
        <div className="about-title-container">
          <h1 className="about-main-title">About</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
