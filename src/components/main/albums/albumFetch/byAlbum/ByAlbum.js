import React, { useEffect, useState } from "react";
import "../../Album.css";
import { AlbumData } from "../../AlbumData";
import * as IoIcons from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";

function ByAlbum(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { albumId, byAlbumId } = props.match.params;

  const album = AlbumData.find(({ id }) => id.toString() === albumId);

  const data = album.byAlbums.find(({ id }) => id.toString() === byAlbumId);

  const [id, setId] = useState(1);

  const [fullSizeStyle, setFullSizeStyle] = useState(false);

  const [defaultStyle, setDefaultStyle] = useState(true);

  function handleImage(id) {
    if (id <= data.images.length && id > 0) {
      setId(id);
    } else if (id === 0) {
      setId(data.images.length);
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
        <h1>{data.name}</h1>
        <div
          className="image-container"
          style={{ opacity: defaultStyle ? "1" : "0.3" }}
        >
          {data.images.map((item, index) => {
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
                src={"/images/" + data.images[id - 1].imageName}
                alt={data.images[id - 1].comment}
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
