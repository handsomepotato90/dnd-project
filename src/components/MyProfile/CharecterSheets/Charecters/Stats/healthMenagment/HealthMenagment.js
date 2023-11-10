import { useState, useEffect, useContext } from "react";
import HealthContext from "../../../../../store/health_CSH-context";
import CS from "../../../../../store/CS-context";
import styles from "./HealthSystem.module.css";

export default function HealthMenagment() {
  const [valueToChangeHealth, setValueToChangeHealth] = useState(0);
  const csh = useContext(HealthContext);
  const cs = useContext(CS);
  useEffect(() => {
    if (cs.fullHeal === true) {
      csh.modifyHp(csh.maxHp, "heal");
      cs.healingDone();
    }
  }, [cs.fullHeal]);
  useEffect(() => {
    if (cs.healForHitDie.is === true) {
      csh.modifyHp(cs.healForHitDie.value, "heal");
    }
  }, [cs.healForHitDie]);
  return (
    <div className={styles.values_calculators_style}>
      <button
        onClick={() => csh.modifyHp(valueToChangeHealth, "heal")}
        className={`green ${styles.buttons_health_mng}`}
      >
        Heal
      </button>
      <input
        type="number"
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