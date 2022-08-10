import React from "react";

import "./NewsBox.css";

export default function NewsBox(props) {
  const cNames = "news_box_bcc__color news_box_size " + props.className;

  return (
    <div className={cNames} style={props.style}>
      {props.children}
    </div>
  );
}
