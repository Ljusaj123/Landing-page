import React, { useState } from "react";
import List from "../const/List";

function NavBar() {
  const [list] = useState(List);

  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => {
    setNavbar((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <nav
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
      </nav>
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
    </div>
  );
}

export default NavBar;
