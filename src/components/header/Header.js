import React from "react";
import Navbar from "./navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header">
        <Navbar />
        <h2>C3F</h2>
      </div>
    </header>
  );
}

export default Header;
