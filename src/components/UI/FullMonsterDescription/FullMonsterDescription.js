import React from "react";
import styles from "./mainstyling.module.css";
import Actions from "./Actions";
import Legendary from "./Legendary";
import Reactions from "./Reactions"
import StatBlock from "./StatBlock"
export default function FullMonsterDescription(props) {
  return (
    <div onClick={() =>props.onClick(false)} className={styles.box_design}>
      <div className={styles.first_half}>
        <StatBlock monsterStats ={props.monsterStats} />

       {props.monsterStats["Legendary Actions"] === true || props.monsterStats.Reactions === true ?  <Actions actions={props.monsterStats.Actions}  /> : ""}



      </div>
      <div className={styles.second_half}>
        {props.monsterStats["Legendary Actions"] === true || props.monsterStats.Reactions === true ? "" : <Actions actions={props.monsterStats.Actions} />}
        {props.monsterStats["Legendary Actions"] ? <Legendary legendary={props.monsterStats["Legendary Actions"]} /> : "" }
        {props.monsterStats.Reactions ? <Reactions reaction = {props.monsterStats.Reactions}/>: ""}
      </div>
    </div>
  );
}
