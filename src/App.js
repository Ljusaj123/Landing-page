function App() {
  return (
    <div className="landing-page">
      <div className="landing-page-container">
        <header className="header">
          <div className="header-container">
            <div className="logo-container">
              <h1>Logo</h1>
            </div>
            <nav className="navbar-menu-container">
              <li className="navbar-links"><a href="#" className="navbar-items">Home</a></li>
              <li className="navbar-links"><a href="#" className="navbar-items">About</a></li>
              <li className="navbar-links"><a href="#" className="navbar-items">Services</a></li>
              <button className="btn">Learn more</button>
            </nav>
          </div>
        </header>
        <main className="main">
          <div className="main-container">
            <h1>Lorem ipsum</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Facilis repellat dignissimos, eaque vel, soluta odio tempore 
              quisquam vero repudiandae voluptates illo eveniet quia? Explicabo 
              ullam corporis velit facilis mollitia sunt quis, autem itaque provident 
              deleniti odio assumenda atque accusantium. Id!</h2>
              <button className="btn">Learn more</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
