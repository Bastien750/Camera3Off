import React from "react";
import "./Album.css";
import { AlbumData } from "./AlbumData";
import * as AiIcons from "react-icons/ai";

function Album() {
  return (
    <div class="album">
      <h1>Albums</h1>
      <div class="album-contain">
        {AlbumData.map((album, index) => {
          return (
            <div key={index} className="each-album">
              <img src={"/cover/" + album.name} />
              <div class="album-detail">
                <AiIcons.AiOutlineEye />
                <br />
                Voir toutes les photos
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Album;
