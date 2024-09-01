import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./NavBar.css";
import { Link } from "react-router-dom";
import React, { ReactNode } from "react";
import { useState } from "react";

interface NavBarProps {
  children: ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark fixed-top"
        id="custom-navbar-css"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="\discover daily.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            ></img>{" "}
            Discover Daily
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="custom-text-bg-dark"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Discover Daily
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default NavBar;
