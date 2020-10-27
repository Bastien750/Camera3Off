import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header">
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
        <h2>Camera3Off</h2>
      </div>
    </header>
  );
}

export default Header;
