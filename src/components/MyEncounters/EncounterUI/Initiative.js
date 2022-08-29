import React, {useState} from "react";
import styles from "../BattleScreen.module.css";

export default function Initiative() {
  const [initiative, initiativeHanler] = useState(0);

  const initiativeSetter = (event) => {
    initiativeHanler(event.target.value);
  };
  return (
    <>
      <span className={styles.stat_text__style}>INIT:</span>
      <input
        onChange={initiativeSetter}
        className={`${styles.stat_text__style} ${styles.input__style}`}
        value={initiative}
      ></input>
    </>
  );
}
