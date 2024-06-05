import React, { useState } from "react";
import PopUpOnClick from "../../UI/PopUpOnClick";
import styles from "../BattleScreen.module.css";

interface HealthPoolProps {
  onChange:Function;
  hp: number;
  player?: string;
}

const HealthPool: React.FC<HealthPoolProps> = ({onChange, hp, player}) => {
  const [health, healthHandler] = useState<number>(hp);
  const [calculate, calculateHanler] = useState<number>(0);
  const [playerMaxHp, setPcMaxHealth] = useState<number>(hp);
  const [clikedPlayerMaxHealtInput, setCliket] = useState<Boolean>(false);

  const hpTarget = !player ? hp : playerMaxHp;

  const givePlayerHp = () => {
    setCliket(true);
  };
  const setPcHp = (value: Boolean) => {
    setCliket(value);
  };
  const givePlayerHealth = (event: React.ChangeEvent<HTMLInputElement>) => {
    healthHandler(parseInt(event.target.value));
    setPcMaxHealth(parseInt(event.target.value));
  };

  const calculateThis = (event: React.ChangeEvent<HTMLInputElement>) => {
    calculateHanler(parseInt(event.target.value));
  };
  const addNow = () => {
    healthHandler(health + calculate);

    if (health + calculate > hpTarget) {
      healthHandler(hpTarget);
    }
    calculateHanler(0);
  };
  const subtractNow = () => {
    healthHandler(health - calculate);

    if (health - calculate <= 0) {
      onChange(true);
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
            className={`button ${styles.text__style} ${
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
            className={`button ${styles.text__style} ${
              calculate === 0
                ? `${styles.disabled_button}`
                : styles.damage_button
            }`}
          >
            Damage
          </button>

          {player && (
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
    </>
  );
}
export default HealthPool;