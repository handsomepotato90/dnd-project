import React, { useState } from "react";

const HealthContext = React.createContext({
  maxHp: 0,
  currHp: 0,
  tempHp: 0,
  modifyHp: () => {},
  changeMaxHp: () => {},
  changeTempHp: () => {},
});

export const HealthCSHProvider = (props) => {
  const [tempHitPoints, setTempHp] = useState(0);
  const [newMaxHp, setNewMaxHp] = useState(0);
  const [newCurrHp, setNewCurrHp] = useState(0);

  const changeMaxHp = (max) => {
    setNewCurrHp(max);
    setNewMaxHp(max);
  };
  const changeTempHp = (givenHp) => {
    console.log(givenHp);
    setTempHp(givenHp);
  };
  const modifyHp = (value, dmgType) => {
    console.log(typeof newCurrHp);
    console.log(typeof value);

    let health;
    if (dmgType === "heal") {
      health =
        parseInt(newCurrHp) + parseInt(value) >= newMaxHp
          ? newMaxHp
          : parseInt(newCurrHp) + parseInt(value);
      setNewCurrHp(health);
    }
    if (dmgType === "damage") {
      let hp;
      if (value >= tempHitPoints) {
        setTempHp(0);
        hp = value - tempHitPoints;
      } else {
        setTempHp(tempHitPoints - value);
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
