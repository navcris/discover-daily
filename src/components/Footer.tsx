import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="footer-container">
      <div className="footer-brand">
        <div className="text" onClick={handleClick} id="footer-text">
          Take me to the Top
        </div>
      </div>
    </div>
  );
};

export default Footer;
