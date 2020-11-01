import React from "react";
import "../../Album.css";
import { ByAlbumData } from "./ByAlbumData";

function ByAlbum() {
  return (
    <main>
      <div>
        <h1>{ByAlbumData.name}</h1>
        <div className="image-container">
          {ByAlbumData.images.map((item, index) => {
            return (
              <div className="each-image">
                <img src={"/images/" + item.imageName} alt={item.comment} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default ByAlbum;
