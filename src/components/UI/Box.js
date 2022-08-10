import React from "react";


import "./Box.css";


const Box = (props) => {
  const cNames = "box_bcc__color box_size " + props.className;
  return <div className={cNames}>{props.children}</div>;
};

export default Box;
