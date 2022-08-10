import React from "react";
import rightArrow from "../../icons/right_arrow.png";
import SmallBox from "../UI/SmallBoX";
import "./arrows.css"


const Show = (props) => {
  const clickedTrue = () => {
    props.onShow(true);
  };

  return (
    <SmallBox className="right_arrow" >
      <img className="arrow" src={rightArrow} onClick={clickedTrue} alt='right arrow'></img>
    </SmallBox>
  );
};
export default Show;
