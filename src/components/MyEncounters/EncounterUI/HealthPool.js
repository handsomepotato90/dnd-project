import React, { useState } from "react";
import styles from "../BattleScreen.module.css";

export default function HealthPool(props) {
  const [health, healthHandler] = useState(props.hp);
  const [calculate, calculateHanler] = useState(0);

  //   const modifyHealt = (event) => {
  //     healthHandler(event.target.value);
  //   };
  const calculateThis = (event) => {
    calculateHanler(event.target.value);
  };
  const addNow = () => {
    healthHandler(parseInt(health) + parseInt(calculate));
    console.log(health);
    if (parseInt(health) + parseInt(calculate) > props.hp) {
      healthHandler(props.hp);
    }
    calculateHanler(0);
  };
  const subtractNow = () => {
    healthHandler(parseInt(health) - parseInt(calculate));
    console.log(health);

    if (parseInt(health) - parseInt(calculate) <= 0) {
      props.onChange(true);
    }
    calculateHanler(0);
  };
  return (
    <>
      <div>
        <span className={styles.stat_text__style}>HP:</span>
        <span className={styles.stat_text__style}>{`${health}/`}</span>
        <span className={styles.stat_text__style}>{props.hp}</span>
      </div>
      {/* <div> */}
        <button
          onClick={addNow}
          className={`${styles.subm_subt__style} ${styles.add}`}
        >
          Heal
        </button>
        <input
          onChange={calculateThis}
          className={`${styles.stat_text__style} ${styles.input__style}`}
          value={calculate}
        ></input>
        <button
          onClick={subtractNow}
          className={`${styles.subm_subt__style} ${styles.subtract}`}
        >
          Damage
        </button>
      {/* </div> */}
    </>
  );
}
