/** @jsxImportSource jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import SliderContent from "./SliderContent";
import { DiaporamaData } from "./DiaporamaData";
import Arrow from "./Arrow";
import Dots from "./Dots";

/**
 * @function Slider
 */
const Slider = () => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  function nextSlide() {
    if (activeIndex === props.DiaporamaData.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  }

  function prevSlide() {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.DiaporamaData.length - 1) * getWidth(),
        activeIndex: props.DiaporamaData.length - 1,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  }

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.DiaporamaData.length}
      >
        {props.DiaporamaData.map((slide, i) => (
          <Slide key={i} content={"/images/" + slide.name} />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={props.DiaporamaData} activeIndex={activeIndex} />
    </div>
  );
};

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;
export default Slider;
