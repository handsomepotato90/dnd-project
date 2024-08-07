import React, { useState, useContext } from "react";
import GeneralLookInitiative from "./GeneralLookInitiative";
import AutoFocusInputEnterEvent from "../../../../../UI/AutoFocusInputEnterEvent";
import CS from "../../../../../store/CS-context";

import styles from "./InitiativeAcResistance.module.css";

const SpecialResource: React.FC = () => {
  const cs = useContext(CS);
  const [statSpecial, setAmount] = useState(cs.specialStat);
  const [changeValue, setAmountToEnter] = useState(false);
  const [name, setName] = useState(cs.specialName);
  const [openField, setOpenField] = useState(false);

  const changeSpecial = (val: number) => {
    setAmountToEnter(false);
    setAmount(val);
    cs.setSpecialStat(val);
  };
  const changeSpecialName = (val: string) => {
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
          valuesOnsubmit={(val: string | number) =>
            changeSpecialName(val.toString())
          }
          value={name}
        ></AutoFocusInputEnterEvent>
      )}
      <div className={`overflowing ${styles.initiative_value_style}`}>
        {!changeValue ? (
          <span onClick={() => setAmountToEnter(true)}>{statSpecial}</span>
        ) : (
          <AutoFocusInputEnterEvent
            type="number"
            valuesOnsubmit={(val: string | number) =>
              changeSpecial(Number(val))
            }
            value={statSpecial}
          ></AutoFocusInputEnterEvent>
        )}
      </div>
    </GeneralLookInitiative>
  );
};

export default SpecialResource;
