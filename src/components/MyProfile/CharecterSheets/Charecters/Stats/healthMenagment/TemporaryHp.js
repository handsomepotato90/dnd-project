import { useState, useContext } from "react";
import HealthContext from "../../../../../store/health_CSH-context";
import AutoFocusInputEnterEvent from "../../../../../UI/AutoFocusInputEnterEvent";
import styles from "./HealthSystem.module.css";

export default function TemporaryHp() {
  const [giveThp, setGiveThp] = useState(false);
  const [tmp, setTmp] = useState(0);
  const chp = useContext(HealthContext);
  const changeTemp = (val) => {
    setGiveThp(false);
    setTmp(val)
    chp.changeTempHp(val);
  };
  return (
    <div className={styles.temp_hp_style_general}>
      <span>Temp HP</span>
      {!giveThp ? (
        <span onClick={() => setGiveThp(true)}>{chp.tempHp}</span>
      ) : (
        <AutoFocusInputEnterEvent
          valuesTosubmit={changeTemp}
          value={tmp}
        ></AutoFocusInputEnterEvent>
      )}
    </div>
  );
}
