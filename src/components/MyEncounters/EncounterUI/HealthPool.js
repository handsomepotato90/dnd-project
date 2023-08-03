import React, { useState } from "react";
import PopUpOnClick from "../../UI/PopUpOnClick";
import styles from "../BattleScreen.module.css";

export default function HealthPool(props) {
  const [health, healthHandler] = useState(props.hp);
  const [calculate, calculateHanler] = useState(0);
  const [playerMaxHp, setPcMaxHealth] = useState(props.hp);
  const [clikedPlayerMaxHealtInput, setCliket] = useState(false);

  const hpTarget = !props.player ? props.hp : playerMaxHp;

  const givePlayerHp = () => {
    setCliket(true);
  };
  const setPcHp = (value) => {
    setCliket(value);
  };
  const givePlayerHealth = (event) => {
    healthHandler(event.target.value);
    setPcMaxHealth(event.target.value);
  };

  const calculateThis = (event) => {
    calculateHanler(event.target.value);
  };
  const addNow = () => {
    healthHandler(parseInt(health) + parseInt(calculate));

    if (parseInt(health) + parseInt(calculate) > hpTarget) {
      healthHandler(hpTarget);
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
      <div
        className={`${styles.text__style} ${styles.health__styling}`}
        onClick={givePlayerHp}
      >
        <span>HP: </span>
        {
          <span>
            {`${health} / `}
            <span>{hpTarget}</span>
          </span>
        }
      </div>
      {/* <div> */}
      {clikedPlayerMaxHealtInput && (
        <PopUpOnClick onBlur={setPcHp}>
          <button
            onClick={addNow}
            disabled={calculate === 0 ? true : false}
            className={`${styles.button__style} ${styles.text__style} ${
              calculate === 0 ? `${styles.disabled_button}` : styles.heal_button
            }`}
          >
            Heal
          </button>
          <div className={styles.input__wraper}>
            <input
              onChange={calculateThis}
              className={` ${styles.input__style}`}
              value={calculate}
            ></input>
          </div>
          <button
            onClick={subtractNow}
            disabled={calculate === 0 ? true : false}
            className={`${styles.button__style} ${styles.text__style} ${
              calculate === 0
                ? `${styles.disabled_button}`
                : styles.damage_button
            }`}
          >
            Damage
          </button>

          {props.player && (
            <>
              <span className={`${styles.text__style}`}>MAX HP OVERRIDE</span>
              <div className={styles.input__wraper}>
                <input
                  onChange={givePlayerHealth}
                  value={playerMaxHp}
                  className={`${styles.input__style}`}
                ></input>
              </div>
            </>
          )}
        </PopUpOnClick>
      )}

      {/* </div> */}
    </>
  );
}
