import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
