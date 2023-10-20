import { useState, useEffect, useContext } from "react";
import HealthContext from "../../../../../store/health_CSH-context";

import styles from "./HealthSystem.module.css";

export default function TemporaryHp() {
  const [giveThp, setGiveThp] = useState(false);
  const chp = useContext(HealthContext);
  console.log(chp);
  return (
    <div className={styles.temp_hp_style_general}>
      <span>Temp HP</span>
      {!giveThp ? (
        <span onClick={() => setGiveThp(true)}>{chp.tempHp}</span>
      ) : (
        <input
          autoFocus={true}
          onBlur={() => setGiveThp(false)}
          onChange={(e) => chp.changeTempHp(e.target.value)}
        ></input>
      )}
    </div>
  );
}
