import { useState, useContext } from "react";
import HealthContext from "../../../../../store/health_CSH-context";
import CS from "../../../../../store/CS-context";
import styles from "./HealthSystem.module.css";

export default function HealthMenagment() {
  const [valueToChangeHealth, setValueToChangeHealth] = useState(0);
  const csh = useContext(HealthContext);
  const cs = useContext(CS);
  
  return (
    <div className={styles.values_calculators_style}>
      <button
        onClick={() => csh.modifyHp(valueToChangeHealth, "heal")}
        className={`green ${styles.buttons_health_mng}`}
      >
        Heal
      </button>
      <input
        onChange={(e) => setValueToChangeHealth(e.target.value)}
        className={`${styles.buttons_health_mng}`}
      ></input>
      <button
        onClick={() => csh.modifyHp(valueToChangeHealth, "damage")}
        className={`red ${styles.buttons_health_mng}`}
      >
        Damage
      </button>
    </div>
  );
}
