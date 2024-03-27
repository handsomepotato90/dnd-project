import { useState, useContext } from "react";
import GeneralLookInitiative from "./GeneralLookInitiative";
import AutoFocusInputEnterEvent from "../../../../../UI/AutoFocusInputEnterEvent";
import CS from "../../../../../store/CS-context";

import styles from "./InitiativeAcResistance.module.css";

export default function SpecialResource() {
  const cs = useContext(CS);
  const [statSpecial, setAmount] = useState(cs.specialStat);
  const [changeValue, setAmountToEnter] = useState(false);
  const [name, setName] = useState(cs.specialName);
  const [openField, setOpenField] = useState(false);

  const changeSpecial = (val) => {
    setAmountToEnter(false);
    setAmount(val);
    cs.setSpecialStat(val);
  };
  const changeSpecialName = (val) => {
    setOpenField(false);
    setName(val);
    cs.setSpecialName(val);
  };

  return (
    <GeneralLookInitiative>
      {!openField ? (
        <span onClick={() => setOpenField(true)}>{name}</span>
      ) : (
        <AutoFocusInputEnterEvent
          type="text"
          valuesTosubmit={changeSpecialName}
          value={name}
        ></AutoFocusInputEnterEvent>
      )}
      <div className={`overflowing ${styles.initiative_value_style}`}>
        {!changeValue ? (
          <span onClick={() => setAmountToEnter(true)}>{statSpecial}</span>
        ) : (
          <AutoFocusInputEnterEvent
            type="number"
            valuesTosubmit={changeSpecial}
            value={statSpecial}
          ></AutoFocusInputEnterEvent>
        )}
      </div>
    </GeneralLookInitiative>
  );
}
