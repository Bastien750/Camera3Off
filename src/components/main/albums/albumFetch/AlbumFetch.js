import React, { useEffect } from "react";
import { AlbumData } from "../AlbumData";
import "../Album.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function AlbumFetch(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { albumId } = props.match.params;

  const urlId = albumId; //Trouver l'ID depouis l'URL

  const data = AlbumData.find(({ id }) => id.toString() === urlId); // Si l'URL = 1, on charge ByAlbumData

  return (
    <main>
      <div>
        <h1>{data.name}</h1>
        <div className="album">
          <div className="album-contain" style={{ marginBottom: "70px" }}>
            {data.byAlbums.map((album, index) => {
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
                  <img
                    src={"/cover/byAlbum/" + album.imageName}
                    alt={album.comment}
                  />
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
    </main>
  );
}

export default AlbumFetch;
