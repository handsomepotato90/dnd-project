import React from "react";
import leftArrow from "../../icons/left_arrow.png";
import SmallBox from "../UI/SmallBoX";
import './arrows.css';
const Hide = (props) => {
  const clickedFalse = () => {
    props.onHide(false);
  };
  return (
    <SmallBox className="left_arrow" >
      <img className="arrow" src={leftArrow} onClick={clickedFalse} alt='left arrow'></img>
    </SmallBox>
  );
};

export default Hide;
