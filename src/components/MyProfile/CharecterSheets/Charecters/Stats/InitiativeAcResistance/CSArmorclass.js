import { useState, useContext } from "react";
import GeneralLookInitiative from "./GeneralLookInitiative";
import CS from "../../../../../store/CS-context";
import AutoFocusInputEnterEvent from "../../../../../UI/AutoFocusInputEnterEvent";
import styles from "./InitiativeAcResistance.module.css";

export default function CSArmorclass() {
  const cs = useContext(CS);
  const [newAc, setNewAc] = useState(cs.armorClass);
  const [changeAc, setChangeAc] = useState(false);
  const changeArmorClass = (val) => {
    setChangeAc(false);
    setNewAc(val);
    cs.armorClassSetter(val);
  };
  return (
    <GeneralLookInitiative>
      <span>Armor Class</span>
      <div className={`overflowing ${styles.initiative_value_style}`}>
        {!changeAc ? (
          <span onClick={() => setChangeAc(true)}>{newAc}</span>
        ) : (
          <AutoFocusInputEnterEvent
            type="number"
            valuesTosubmit={changeArmorClass}
            value={newAc}
          ></AutoFocusInputEnterEvent>
        )}
      </div>{" "}
    </GeneralLookInitiative>
  );
}
