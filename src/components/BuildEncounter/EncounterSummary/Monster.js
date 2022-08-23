import React from "react";
import styles from "./Monster.module.css";

export default function Monster() {
  return (
    <div className={styles.monster_box__style}>
      <div className={styles.generel_info__style}>
        <div className={styles.first_info_box}>
          <span className={`${styles.monster_name__style}`}>Aboleth</span>
          <span className={styles.desc_behavior}>Large Aberration</span>
        </div>
        <div className={styles.second_info_box}>
          <span className={styles.desc_text__style}>
            CR: <span className={styles.black}>8</span>
          </span>
          <span className={styles.desc_text__style}>
            XP: <span className={styles.black}>1000</span>
          </span>
        </div>
      </div>
      <div>
        <button>X</button>
      </div>
    </div>
  );
}
