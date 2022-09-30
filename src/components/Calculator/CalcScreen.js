import React from "react";

import "./CalcScreen.css";

const CalcScreen = (props) => {
  return (
    <div className="calc_box__style_size">
      <textarea
        className="text_area__size"
        readOnly
        value={props.allNumbers}
      ></textarea>

      <div className="die_sum__size die_style__text">{props.resultsSender}{props.symbol}{props.toAdd}</div>
    </div>
  );
};

export default CalcScreen;
