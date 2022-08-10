import React from "react";
import NameAndAlignment from "./NameAndAlignment";
import "./FullMonsterDescription.css";
import LifeArmorSpeed from "./LifeArmorSpeed"

export default function FullMonsterDescription(props) {
  console.log(props.monsterStats.strength);
  return (
    <div className="box_design">
      <div className="first_half">
        <NameAndAlignment
          name={props.monsterStats.name}
          size={props.monsterStats.size}
          type={props.monsterStats.type}
          alignment={props.monsterStats.alignment}
        />
        <LifeArmorSpeed 
                armor = {props.monsterStats.armor_class}
                hp = {props.monsterStats.hit_points}
                hd = {props.monsterStats.hit_dice}
                speed = {props.monsterStats.speed}
        />


      </div>
      <div className="second_half">Second Half</div>
    </div>
  );
}
