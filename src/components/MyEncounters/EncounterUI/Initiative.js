import React, { useState } from "react";
import AutoRollInitiative from "./AutoRollInitiative";

import styles from "../BattleScreen.module.css";

export default function Initiative(props) {
  const [initiative, initiativeHanler] = useState(props.initiative);

  const initiativeSetter = (event) => {
    initiativeHanler(event.target.value);
  };
  const randomInitiative = (init) => {
    initiativeHanler(init);
  };

  return (
    <div>
      <span className={styles.text__style}>INITIATIVE:</span>
      <div className={styles.input__wraper}>
        <input
          // placeholder={initiative}
          onChange={initiativeSetter}
          className={` ${styles.input__style}`}
          value={initiative}
        ></input>
      </div>
      {props.dexMod ? (
        <AutoRollInitiative
          dexMod={props.dexMod}
          onClick={randomInitiative}
        ></AutoRollInitiative>
      ) : null}
    </div>
  );
}
