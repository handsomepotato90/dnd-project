import React, { useState } from "react";
import styles from "../BattleScreen.module.css";

export default function HealthPool(props) {
  const [health, healthHandler] = useState(props.hp);
  const [calculate, calculateHanler] = useState(0);
  const [playerMaxHp,setPcMaxHealth] = useState(props.hp)
  const [clikedPlayerMaxHealtInput,setCliket] = useState(false)

  const hpTarget = !props.player ? props.hp : playerMaxHp

  const givePlayerHp = () =>{
    setCliket(true)
  }
  const setPcHp = () =>{
    setCliket(false)
  }
  const givePlayerHealth = (event) =>{
    healthHandler(event.target.value)
    setPcMaxHealth(event.target.value)
  }

  const calculateThis = (event) => {
    calculateHanler(event.target.value);
  };
  const addNow = () => {
    console.log(health)
    console.log(calculate)
    healthHandler(parseInt(health) + parseInt(calculate));
    console.log(health)

    if (parseInt(health) + parseInt(calculate) > hpTarget) {
      healthHandler(hpTarget)
    }
    calculateHanler(0);
  };
  const subtractNow = () => {
    healthHandler(parseInt(health) - parseInt(calculate));

    if (parseInt(health) - parseInt(calculate) <= 0) {
      props.onChange(true);
    }
    calculateHanler(0);
  };
  return (
    <>
      <div className={styles.health__styling}>
        <span className={`${styles.stat_text__style}}`}>HP: </span>
        {(<span className={styles.stat_text__style}>{`${health} / `}</span>)} 
       {(!clikedPlayerMaxHealtInput ? <span onClick={props.player && givePlayerHp } className={styles.stat_text__style}>{hpTarget}</span> : <input autoFocus="true" onBlur={setPcHp} onChange={givePlayerHealth} value={playerMaxHp}></input>)}
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
