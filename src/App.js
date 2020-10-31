import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AlbumFetch from "./components/main/albums/albumFetch/AlbumFetch";
import ByAlbum from "./components/main/albums/albumFetch/byAlbum/ByAlbum";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route name="Home" path="/" exact component={Main} />
          <Route name="Album" path="/album/:id" exact component={AlbumFetch} />
          <Route
            name="ByAlbum"
            path="/album/:id/byalbum/:id"
            component={ByAlbum}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
