import React, { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="landing-page">
      <div className="landing-page-container">
        <header className="header">
          <div className="header-container">
            <div className="logo-container">
              <h1>Logo</h1>
            </div>
          </div>
        </header>
        <NavBar navbar={navbar} setNavbar={setNavbar} />
        <main className="main">
          <div className="main-container">
            <h1>Lorem ipsum</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              repellat dignissimos, eaque vel, soluta odio tempore quisquam vero
              repudiandae voluptates illo eveniet quia? Explicabo ullam corporis
              velit facilis mollitia sunt quis, autem itaque provident deleniti
              odio assumenda atque accusantium. Id!
            </h2>
            <button className="btn">Learn more</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
