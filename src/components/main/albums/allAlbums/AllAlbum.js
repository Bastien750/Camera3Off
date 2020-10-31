import React from "react";
import { Link } from "react-router-dom";
import "./AllAlbum.css";
import { AlbumData } from "./AllAlbumData";
import * as AiIcons from "react-icons/ai";

function Album() {
  return (
    <div class="album">
      <h1>Albums</h1>
      <div class="album-contain">
        {AlbumData.map((album, index) => {
          return (
            <Link to={"/" + album.name} key={index} className="each-album">
              <div
                className="album-detail"
                style={{
                  top: 0,
                  fontSize: "1.8em",
                  display: "inherit",
                  marginTop: "40px",
                  fontWeight: "bold",
                }}
              >
                {album.name.toUpperCase()}
              </div>
              <img src={"/cover/" + album.imageName} />
              <div className="album-detail">
                <AiIcons.AiOutlineEye />
                <br />
                Voir toutes les photos
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Album;
