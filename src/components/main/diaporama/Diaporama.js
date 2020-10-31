import React, { useState, useEffect } from "react";
import "./Diaporama.css";
import { DiaporamaData } from "./DiaporamaData";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

function Diaporama() {
  const [id, setId] = useState(0);
  const [temporaryId, setTemporaryId] = useState(id);

  useEffect(() => {
    setTimeout(() => {
      if (id < DiaporamaData.length - 1) {
        setId(id + 1);
      } else {
        setId(0);
      }
    }, 2600);
  }, [id]);

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
        {DiaporamaData.map((item, index) => {
          return (
            <div
              key={index}
              className="slider"
              style={id === index ? { opacity: 1 } : {}}
            >
              <FaIcons.FaRegWindowMinimize />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Diaporama;
