import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const [footer, setFooter] = useState(false);
  const handleClick = () => {
    window.scroll(0, 0);
  };

  const checkScreen = () => {
    if (window.innerWidth <= 600) {
      setFooter(true);
    } else {
      setFooter(false);
    }
  };

  useEffect(() => {
    checkScreen();
  }, []);

  window.addEventListener("resize", checkScreen);

  return footer == false ? (
    <div className="footer-container">
      <div className="footer-brand">
        <div className="text" onClick={handleClick}>
          Take me to the Top
        </div>
      </div>
    </div>
  ) : (
    <div className="footer-container">
      <div className="footer-brand">
        <div className="About">
          <Link to="/about" className="custom-link">
            About
          </Link>
        </div>

        <div className="text" onClick={handleClick}>
          Take me to the Top
        </div>
      </div>
    </div>
  );
};

export default Footer;
