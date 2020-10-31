import React from "react";
import Diaporama from "./diaporama/Diaporama";
import Album from "./albums/Album";
import "./Main.css";

function Main() {
  return (
    <main>
      <Diaporama />
      <Album />
    </main>
  );
}

export default Main;
