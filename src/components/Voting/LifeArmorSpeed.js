import React from "react";

import "./LifeArmorSpeed.css"

export default function LifeArmorSpeed(props) {
  return (
    <div className="life_stiling">
      <div>
        <div className="leader">Armor Class  </div>
        <div className="numbers">{props.armor}</div>
      </div>
      <div>
        <div className="leader">Hit Points  </div>
        <div className="numbers">{props.hp + " (" + props.hd+")"}</div>
      </div>
      <div>
        <div className="leader">Speed  </div>
        <div className="numbers">{"Walk: " + props.speed.walk + " Swim: " + props.speed.swim}</div>
      </div>
    </div>
  );
}
