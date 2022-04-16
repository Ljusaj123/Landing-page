import React from "react";

function NavBar() {
  const showNavbar = ({ navbar, setNavbar }) => {
    setNavbar((prev) => !prev);
  };
  return (
    <>
      <nav
        className={
          NavBar ? "navbar-menu-container active" : "navbar-menu-container"
        }
      >
        <li className="navbar-links">
          <a href="/" className="navbar-items">
            Home
          </a>
        </li>
        <li className="navbar-links">
          <a href="/" className="navbar-items">
            About
          </a>
        </li>
        <li className="navbar-links">
          <a href="/" className="navbar-items">
            Services
          </a>
        </li>
        <li className="navbar-links">
          <a href="/" className="navbar-items">
            Contact
          </a>
        </li>
      </nav>
      <div className="navbar-hamburger" onClick={showNavbar}>
        <li
          className={
            NavBar ? "navbar-hamburger-line open" : "navbar-hamburger-line"
          }
        ></li>
        <li
          className={
            NavBar ? "navbar-hamburger-line open" : "navbar-hamburger-line"
          }
        ></li>
        <li
          className={
            NavBar ? "navbar-hamburger-line open" : "navbar-hamburger-line"
          }
        ></li>
      </div>
    </>
  );
}

export default NavBar;
