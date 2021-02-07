import React from "react";
import Navbar from "./navbar/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header">
        <Navbar />
        <Link to="/" className="home-link">
          <h2>C3F</h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
