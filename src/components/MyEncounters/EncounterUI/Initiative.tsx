import React, { useState } from "react";
import AutoRollInitiative from "./AutoRollInitiative";

import styles from "../BattleScreen.module.css";

interface InitiativeProps {
  initiative: number;
  dexMod: string | void;
}

const Initiative: React.FC<InitiativeProps> = ({ initiative, dexMod }) => {
  const [initiativeActual, setInitiativeActual] = useState<number>(initiative);

  const initiativeSetter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setInitiativeActual(value);
    }
  };

  const randomInitiative = (init: number) => {
    setInitiativeActual(init);
  };

  return (
    <div>
      <label htmlFor="initiativeInput" className={styles.text__style}>
        INITIATIVE:
      </label>
      <div className={styles.input__wraper}>
        <input
          id="initiativeInput"
          type="number"
          onChange={initiativeSetter}
          className={` ${styles.input__style}`}
          value={initiativeActual}
        />
      </div>
      {dexMod ? (
        <AutoRollInitiative
          dexMod={dexMod.toString()} 
          onClick={randomInitiative}
        />
      ) : null}
    </div>
  );
};

export default Initiative;
