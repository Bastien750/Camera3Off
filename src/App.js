import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Diaporama from "./components/Diaporama";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Diaporama />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
