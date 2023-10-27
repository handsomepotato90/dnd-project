import { useState, useEffect } from "react";

import styles from "./Actions.module.css";
export default function ActionsWeapons(props) {
  console.log(props);
  return (
    <div className={`${styles.weapon_style} ${styles.wepons_desinghn}`}>
      <span className={styles.normal_text_weapon}>{props.type}</span>
      <span className={styles.normal_text_weapon}>{props.range}</span>
      <button className={styles.dice_trow}>{props.hit}</button>
      <button className={styles.dice_trow}>{props.damage}</button>
    </div>
  );
}
