import React from "react";
import Draggable from "react-draggable";
import useWindowSize from "../hooks/screensize-hook"
import "./Box.css";

const Box = (props) => {
  const size = useWindowSize();
  const cNames = "box_bcc__color box_size " + props.className;
  return ( 
    <Draggable disabled={size.width > 800 ?  false : true} bounds="#root">
      <div className={cNames}>{props.children}</div>
    </Draggable>
  );
};

export default Box;
