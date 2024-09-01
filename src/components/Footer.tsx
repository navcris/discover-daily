import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="footer-container">
      <div className="footer-brand">
        <div className="text" onClick={handleClick}>
          Take me to the Top
        </div>
      </div>
    </div>
  );
};

export default Footer;
