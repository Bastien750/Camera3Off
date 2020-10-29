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

const proprieties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

function Diaporama() {
  return (
    <div className="containerSlide">
      <Slide {...proprieties}>
        {DiaporamaData.map((item) => {
          <div className="each-slide">
            <div>
              <img src={item.name} alt={item.comment} />
            </div>
          </div>;
        })}
      </Slide>
    </div>
  );
}

export default Diaporama;
