import React from "react";
import styles from "./Difficulty.module.css";

export default function Difficulty() {
  return (
    <div className={styles.difficulty_box__style}>
      <div className={styles.main_text__style}>
        <span>ENCOUNTER SUMMARY</span>
      </div>
      <div className={styles.xp_box__style}>
        <div>
          <span>DIFFICULTY</span>
          <span>0</span>

          <span>TOTAL XP</span>
          <span>0</span>
        </div>

        <div>
          <span>EASY:</span>
          <span>0</span>

          <span>MEDIUM:</span>
          <span>0</span>

          <span>HARD:</span>
          <span>0</span>

          <span>DEADLY:</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
