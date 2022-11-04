import React from "react";
import leftArrow from "../../icons/left_arrow.png";
import SmallBox from "../UI/SmallBoX";
import './arrows.css';
const Hide = (props) => {
  const clickedFalse = () => {
    props.onHide(false);
    props.onTouchStart(false);

  };
  return (
    <SmallBox onClick={clickedFalse} onTouchStart={clickedFalse} className="left_arrow" >
      <img className="arrow" src={leftArrow} alt='left arrow'></img>
    </SmallBox>
  );
};

export default Hide;
