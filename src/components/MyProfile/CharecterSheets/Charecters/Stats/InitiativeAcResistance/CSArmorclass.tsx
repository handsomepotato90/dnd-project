import React, { useState, useContext } from "react";
import GeneralLookInitiative from "./GeneralLookInitiative";
import CS from "../../../../../store/CS-context";
import AutoFocusInputEnterEvent from "../../../../../UI/AutoFocusInputEnterEvent";
import styles from "./InitiativeAcResistance.module.css";

const CSArmorclass: React.FC = () => {
  const cs = useContext(CS);
  const [newAc, setNewAc] = useState<string>(cs.AC);
  const [changeAc, setChangeAc] = useState(false);
  const changeArmorClass = (val: string) => {
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
            valuesOnsubmit={(val: string | number) =>
              changeArmorClass(val.toString())
            }
            value={newAc}
          ></AutoFocusInputEnterEvent>
        )}
      </div>{" "}
    </GeneralLookInitiative>
  );
};

export default CSArmorclass;
