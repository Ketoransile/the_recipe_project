import React from "react";
import "./Header.css";

function Header() {
  const handleSearch = (data, error) => {
    console.log("Search result:", data);
    if (error) {
      console.error("Error:", error);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">My Recipe Website</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#recipes">Recipes</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <div className="search-form"></div>
    </header>
  );
}

export default Header;
