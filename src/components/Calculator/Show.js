import React from "react";
import rightArrow from "../../icons/right_arrow.png";
import SmallBox from "../UI/SmallBoX";
import "./arrows.css"


const Show = (props) => {
  const clickedTrue = () => {
    props.onShow(true);
  };

  return (
    <SmallBox onClick={clickedTrue} className="right_arrow" >
      <img className="arrow" src={rightArrow}  alt='right arrow'></img>
    </SmallBox>
  );
};
export default Show;
