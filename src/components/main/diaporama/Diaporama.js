import React, { useState, useEffect } from "react";
import "./Diaporama.css";
import { DiaporamaData } from "./DiaporamaData";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

/*function Diaporama() {
  const [id, setId] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log(id);
      id !== 4 ? setId((prevId) => prevId + 1) : setId(0);
    }, 5000);
  }, []);
  return (
    <div className="diaporama">
      <div className="decoration">
        <span>+</span>
        <span>+</span>
        <span>+</span>
      </div>
      <img
        src={"/images/" + DiaporamaData[id].name}
        alt={DiaporamaData[id].comment}
      />
      <Link to={DiaporamaData[id].albumPath}>
        <span>Appuyez pour voir +</span>
      </Link>
    </div>
  );
}*/

function Diaporama() {
  const proprieties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };
  return (
    <div className="diaporama">
      <div className="containerSlide">
        <Slide {...proprieties}>
          {DiaporamaData.map((item, index) => {
            return (
              <div className="each-slide">
                <div>
                  <img src={"/images/" + item.name} alt={item.comment} />
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
}

export default Diaporama;
