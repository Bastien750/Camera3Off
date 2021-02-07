import React, { useEffect, useState } from "react";
import "../../Album.css";
import { ByAlbumData } from "./ByAlbumData";
import * as IoIcons from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";

function ByAlbum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [id, setId] = useState(1);

  const [fullSizeStyle, setFullSizeStyle] = useState(false);

  const [defaultStyle, setDefaultStyle] = useState(true);

  function handleImage(id) {
    if (id <= ByAlbumData.images.length && id > 0) {
      setId(id);
    } else if (id == 0) {
      setId(ByAlbumData.images.length);
    } else {
      setId(1);
    }
    setFullSizeStyle(true);
    setDefaultStyle(false);
  }

  function handleClose() {
    setFullSizeStyle(false);
    setDefaultStyle(true);
  }

  return (
    <main>
      <div style={{ marginBottom: "70px" }}>
        <h1>{ByAlbumData.name}</h1>
        <div
          className="image-container"
          style={{ opacity: defaultStyle ? "1" : "0.3" }}
        >
          {ByAlbumData.images.map((item, index) => {
            return (
              <div key={index} className="each-image">
                <img
                  src={"/images/" + item.imageName}
                  alt={item.comment}
                  onClick={() => handleImage(item.id)}
                />
              </div>
            );
          })}
        </div>
        <OutsideClickHandler onOutsideClick={handleClose}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="full-size"
              style={{ display: fullSizeStyle ? "flex" : "none" }}
            >
              <IoIcons.IoIosArrowBack onClick={() => handleImage(id - 1)} />
              <img
                src={"/images/" + ByAlbumData.images[id - 1].imageName}
                alt={ByAlbumData.images[id - 1].comment}
              />
              <IoIcons.IoIosArrowForward onClick={() => handleImage(id + 1)} />
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </main>
  );
}

export default ByAlbum;
