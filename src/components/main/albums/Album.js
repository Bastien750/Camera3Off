import React from "react";
import { Link } from "react-router-dom";
import "./Album.css";
import { AlbumData } from "./AlbumData";
import * as AiIcons from "react-icons/ai";

function Album() {
  return (
    <div className="album">
      <h1 id="albums">Albums</h1>
      <div className="album-contain">
        {AlbumData.map((album, index) => {
          return (
            <Link
              to={"/album/" + album.id + "/"}
              key={index}
              className="each-album"
            >
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
                <span className="album-title">{album.name.toUpperCase()}</span>
              </div>
              <img src={"/cover/" + album.imageName} alt={album.comment} />
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
