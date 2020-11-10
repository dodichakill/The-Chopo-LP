import React from "react";

import Logo from "assets/images/logo.svg";

import { NavLink } from "react-router-dom";
import Btn from "elements/Button";
export default function Header(props) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <NavLink to="/">
                <img src={Logo} alt="Cube" width="32" height="32" />
              </NavLink>
            </h1>
          </div>
          <button id="header-nav-toggle" className="header-nav-toggle">
            <span className="screen-reader">Menu</span>
            <span className="hamburger">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <nav id="header-nav" className="header-nav">
            <div className="header-nav-inner">
              <ul className="list-reset text-xxs header-nav-right">
                <li>
                  <NavLink to="#">Home</NavLink>
                </li>
                <li>
                  <NavLink to="#">Features</NavLink>{" "}
                </li>
                <li>
                  <NavLink to="#">Pricing</NavLink>
                </li>
                <li>
                  <NavLink to="#">Showcase</NavLink>
                </li>
              </ul>
              <ul className="list-reset header-nav-right">
                <li>
                  <Btn isPrimary isSmall isWideMobile>
                    Sign Up
                  </Btn>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
