import React, { useState, useEffect } from "react";
import "./Diaporama.css";
import { DiaporamaData } from "./DiaporamaData";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

function Diaporama() {
  const [id, setId] = useState(0);
  /*
  useEffect(() => {
    setInterval(() => {
      console.log(id);
      id < 4 ? setId((prevId) => prevId + 1) : setId(0);
    }, 5000);
  }, []);
  */
  function handleChange(id) {
    return setId(id);
  }

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

      <div className="slider-contain">
        <div className="slider" style={id === 0 ? { opacity: 1 } : {}}>
          <AiIcons.AiOutlineMinus onClick={() => handleChange(0)} />
        </div>
        <div className="slider" style={id === 1 ? { opacity: 1 } : {}}>
          <AiIcons.AiOutlineMinus onClick={() => handleChange(1)} />
        </div>
        <div className="slider" style={id === 2 ? { opacity: 1 } : {}}>
          <AiIcons.AiOutlineMinus onClick={() => handleChange(2)} />
        </div>
        <div className="slider" style={id === 3 ? { opacity: 1 } : {}}>
          <AiIcons.AiOutlineMinus onClick={() => handleChange(3)} />
        </div>
        <div className="slider" style={id === 4 ? { opacity: 1 } : {}}>
          <AiIcons.AiOutlineMinus onClick={() => handleChange(4)} />
        </div>
      </div>
      <Link to={DiaporamaData[id].albumPath}>
        <span>Appuyez pour voir +</span>
      </Link>
    </div>
  );
}

/*
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
*/
export default Diaporama;
