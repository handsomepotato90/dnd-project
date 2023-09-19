import React from "react";
import styles from "./mainstyling.module.css";
import Actions from "./Actions";
import StatBlock from "./StatBlock/StatBlock";
import Border from "../Border";
export default function FullMonsterDescription(props) {
  const stopClick = () => {
    if (window.getSelection().type !== "Range") {
      props.onClick(false);
    }
  };
  return (
    <div className={styles.big_box}>
      <Border />

      <div onClick={stopClick} className={styles.box_design}>
        <div className={styles.first_half}>
          <StatBlock monsterStats={props.monsterStats} />
        </div>

        <div className={styles.second_half}>
          <Actions name="Actions" actions={props.monsterStats.Actions} />
          {props.monsterStats["Legendary Actions"] && (
            <Actions
              name="Legendary Actions"
              actions={props.monsterStats["Legendary Actions"]}
            />
          )}
          {props.monsterStats.Reactions && (
            <Actions name="Reactions" actions={props.monsterStats.Reactions} />
          )}
        </div>

        <div className={styles.image_half}>
          {props.monsterStats.img_url && (
            <img src={props.monsterStats.img_url} alt="monster"></img>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: props.monsterStats.Characteristics,
            }}
          ></div>
        </div>
      </div>
      <Border />
    </div>
  );
}
