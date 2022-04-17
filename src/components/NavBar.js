import React, { useState } from "react";
import List from "../const/List";

function NavBar() {
  const [list] = useState(List);

  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <nav className="navbar-container">
      <div
        className={
          navbar ? "navbar-menu-container active" : "navbar-menu-container"
        }
      >
        {list.map((li, index) => {
          return (
            <li className="navbar-links" key={index}>
              <a href="/" className="navbar-items">
                {li}
              </a>
            </li>
          );
        })}
      </div>
      <div className="navbar-hamburger" onClick={showNavbar}>
        <li
          className={
            navbar ? "navbar-hamburger-line open" : "navbar-hamburger-line"
          }
        ></li>
        <li
          className={
            navbar ? "navbar-hamburger-line open" : "navbar-hamburger-line"
          }
        ></li>
        <li
          className={
            navbar ? "navbar-hamburger-line open" : "navbar-hamburger-line"
          }
        ></li>
      </div>
    </nav>
  );
}

export default NavBar;
