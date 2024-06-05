import React, { ReactNode, useState } from "react";

interface HealthContextType {
  maxHp: number;
  currHp: number;
  tempHp: number;
  changeCurrenHp: (hp: number, max?: number) => void;
  modifyHp: (value: number, dmgType: "heal" | "damage") => void
  changeMaxHp: (max: number) => void;
  changeTempHp: (givenHp: number) => void;
}

const HealthContext = React.createContext<HealthContextType>({
  maxHp: 0,
  currHp: 0,
  tempHp: 0,
  changeCurrenHp: () => {},
  modifyHp: () => {},
  changeMaxHp: () => {},
  changeTempHp: () => {},
});

export const HealthCSHProvider = (props: { children: ReactNode; }) => {
  const [tempHitPoints, setTempHp] = useState(0);
  const [newMaxHp, setNewMaxHp] = useState(0);
  const [newCurrHp, setNewCurrHp] = useState(0);

  const changeMaxHp = (max: number) => {
    setNewMaxHp(max);
  };

  const changeCurrenHp = (hp: number, max = 0) => {
    if (hp === -1000) {
      setNewCurrHp(max);
      return;
    }
    setNewCurrHp(hp);
  };

  const changeTempHp = (givenHp: number) => {
    setTempHp(givenHp);
  };
  const modifyHp = (value: number, dmgType: "heal"|"damage") => {
    const changedHp = value;
    let health;
    if (dmgType === "heal") {

      health =
        newCurrHp + changedHp >= newMaxHp
          ? newMaxHp
          : newCurrHp + changedHp;

      setNewCurrHp(health);
    }
    if (dmgType === "damage") {
      let hp = 0;
      if (changedHp >= tempHitPoints) {
        setTempHp(0);
        hp = changedHp - tempHitPoints;
      } else {
        setTempHp(tempHitPoints - changedHp);
      }
      setNewCurrHp(newCurrHp - hp);
    }
  };
  return (
    <HealthContext.Provider
      value={{
        maxHp: newMaxHp,
        currHp: newCurrHp,
        tempHp: tempHitPoints,
        modifyHp: modifyHp,
        changeCurrenHp: changeCurrenHp,
        changeMaxHp: changeMaxHp,
        changeTempHp: changeTempHp,
      }}
    >
      {" "}
      {props.children}
    </HealthContext.Provider>
  );
};

export default HealthContext;
