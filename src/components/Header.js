import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <h1>Logo</h1>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
