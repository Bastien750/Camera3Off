import React, { useEffect } from "react";
import { AlbumFetchData } from "./AlbumFetchData";
import "../Album.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function AlbumFetch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main">
      <div className="album">
        <h1>{AlbumFetchData.name}</h1>
        <div className="album-contain">
          {AlbumFetchData.byAlbums.map((album, index) => {
            return (
              <Link
                to={"byalbum/" + album.id}
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
    </div>
  );
}

export default AlbumFetch;
