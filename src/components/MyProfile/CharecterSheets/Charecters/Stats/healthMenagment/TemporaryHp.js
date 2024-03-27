import { useState, useEffect, useContext } from "react";
import HealthContext from "../../../../../store/health_CSH-context";
import CS from "../../../../../store/CS-context";
import AutoFocusInputEnterEvent from "../../../../../UI/AutoFocusInputEnterEvent";
import styles from "./HealthSystem.module.css";

export default function TemporaryHp() {
  const [giveThp, setGiveThp] = useState(false);
  const [tmp, setTmp] = useState(0);
  const csh = useContext(HealthContext);
  const cs = useContext(CS);

  const changeTemp = (val) => {
    setGiveThp(false);
    setTmp(val);
    csh.changeTempHp(val);
  };

  useEffect(() => {
    cs.tempHpSetter(csh.tempHp);
  }, [csh.tempHp, cs]);

  return (
    <div className={styles.temp_hp_style_general}>
      <span>Temp HP</span>
      {!giveThp ? (
        <span onClick={() => setGiveThp(true)}>{csh.tempHp}</span>
      ) : (
        <AutoFocusInputEnterEvent
          type="number"
          valuesTosubmit={changeTemp}
          value={tmp}
        ></AutoFocusInputEnterEvent>
      )}
    </div>
  );
}
