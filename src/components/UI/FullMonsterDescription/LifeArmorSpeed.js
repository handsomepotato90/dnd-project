import React from "react";

import styles from "./mainstyling.module.css";

export default function LifeArmorSpeed(props) {
  return (
    <div className={styles.picture_divide}>
      <div className={styles.life_stiling}>
        <div>
          <div className={styles.leader}>Armor Class </div>
          <div className={styles.numbers}>{`${props.armor.value} ${props.armor.type}`}</div>
        </div>
        <div>
          <div className={styles.leader}>Hit Points </div>
          <div className={styles.numbers}>{`${props.hp.hp} ${props.hp.dice}`}</div>
        </div>
        <div>
          <div className={styles.leader}>Speed </div>
          <div className={styles.numbers}>{props.speed}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
