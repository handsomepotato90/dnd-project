import React from "react";
import NameAndAlignment from "./NameAndAlignment";
import styles from "./mainstyling.module.css";
import LifeArmorSpeed from "./LifeArmorSpeed"

export default function FullMonsterDescription(props) {
  console.log(props.monsterStats.strength);
  return (
    <div className={styles.box_design}>
      <div className={styles.first_half}>
        <NameAndAlignment
          name={props.monsterStats.name}
          meta={props.monsterStats.meta}
        />
        <LifeArmorSpeed 
                armor = {props.monsterStats['Armor Class']}
                hp = {props.monsterStats["Hit Points"]}
                speed = {props.monsterStats.Speed}
        />


      </div>
      <div className={styles.second_half}>Second Half</div>
    </div>
  );
}
