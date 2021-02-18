import React from "react";
import ReactGA from "react-ga"; //Google Analytics
import "./App.css";
import "./components/main/Main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AlbumFetch from "./components/main/albums/albumFetch/AlbumFetch";
import ByAlbum from "./components/main/albums/albumFetch/byAlbum/ByAlbum";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-ZT22JRMMLS");
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route
            name="Album"
            path="/album/:albumId"
            exact
            component={AlbumFetch}
          />
          <Route
            name="ByAlbum"
            path="/album/:albumId/byalbum/:byAlbumId"
            component={ByAlbum}
          />
          <Route name="Home" path="/" component={Main} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
