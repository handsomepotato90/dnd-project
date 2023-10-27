import { useState, useEffect, useContext } from "react";
import CS from "../../../../../store/CS-context";

import styles from "./InitiativeAcResistance.module.css";

export default function CSArmorclass() {
  const [newAc, setNewAc] = useState(0);
  const [changeAc, setChangeAc] = useState(false);
  const cs = useContext(CS);
  const changeArmorClass = () => {
    setChangeAc(false);
    cs.armorClassSetter(newAc);
  };
  return (
    <div className={styles.general_look_initiative}>
      <span>Armor Class</span>
      <div className={styles.initiative_value_style}>
        {!changeAc ? (
          <span onClick={() => setChangeAc(true)}>{newAc}</span>
        ) : (
          <input
            autoFocus={true}
            onBlur={changeArmorClass}
            onChange={(e) => setNewAc(e.target.value)}
          ></input>
        )}
      </div>{" "}
    </div>
  );
}
