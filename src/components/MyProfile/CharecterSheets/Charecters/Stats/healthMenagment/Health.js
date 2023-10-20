import { useState, useContext } from "react";
import HealthContext from "../../../../../store/health_CSH-context";

import styles from "./HealthSystem.module.css";
export default function Health(props) {
  const [needToChangeMaxHp, setNeedToChangeMaxHp] = useState(false);
  const csh = useContext(HealthContext);

  return (
    <div className={styles.health_managment}>
      <div className={styles.health_text}>
        <span>Curr</span>
        <span>Max</span>
      </div>
      <div className={styles.health_value_style}>
        <span>{csh.currHp}</span>
        <span>/</span>
        {!needToChangeMaxHp ? (
          <span onClick={() => setNeedToChangeMaxHp(true)}>{csh.maxHp}</span>
        ) : (
          <input
            autoFocus={true}
            onChange={(e) => {
              csh.changeMaxHp(e.target.value);
            }}
            onBlur={() => setNeedToChangeMaxHp(false)}
          ></input>
        )}
      </div>
    </div>
  );
}
