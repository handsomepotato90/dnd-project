import { useState, useEffect, useContext } from "react";
import CS from "../../../../../store/CS-context";

import styles from "./InitiativeAcResistance.module.css";

export default function CSArmorclass() {
  const cs = useContext(CS);
  const [newAc, setNewAc] = useState(cs.armorClass);
  const [changeAc, setChangeAc] = useState(false);
  const changeArmorClass = () => {
    setChangeAc(false);
    cs.armorClassSetter(newAc);
  };
  return (
    <div className={styles.general_look_initiative}>
      <span>Armor Class</span>
      <div className={`overflowing ${styles.initiative_value_style}`}>
        {!changeAc ? (
          <span onClick={() => setChangeAc(true)}>{newAc}</span>
        ) : (
          <input
            type="number"
            autoFocus={true}
            onBlur={changeArmorClass}
            onChange={(e) => setNewAc(e.target.value)}
          ></input>
        )}
      </div>{" "}
    </div>
  );
}
