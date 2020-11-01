import React from "react";
import Diaporama from "./diaporama/Diaporama";
import Album from "./albums/Album";
import Video from "./video/Video";
import AboutUs from "./aboutUs/AboutUs";
import Instagram from "./instagram/Instagram";
import "./Main.css";

function Main() {
  return (
    <main>
      <Diaporama />
      <Album />
      <Video />
      <AboutUs />
      <Instagram />
    </main>
  );
}

export default Main;
