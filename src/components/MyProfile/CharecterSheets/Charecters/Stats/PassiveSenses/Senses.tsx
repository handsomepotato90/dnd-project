import React, { useEffect, useState, useContext } from "react";
import styles from "./PassiveSenses.module.css";
import CS from "../../../../../store/CS-context";

const Senses: React.FC<{ text: string }> = (props) => {
  const [passivePerception, setPassivePerception] = useState<number>(0);
  const cs = useContext(CS);
  const wisMod = 10 + (cs.stats.Wis.modifire ?? 0);
  const intMod = 10 + (cs.stats.Int.modifire ?? 0);

  useEffect(() => {
    if (props.text === "PASSIVE WIS (PERCEPTION)" || props.text === "PASSIVE WIS (INSIGHT)") {
      const passPerception =
        cs.stats.Wis.proff === true
          ? wisMod + cs.proficiency
          : wisMod;
      setPassivePerception(passPerception);
    }
    if (props.text === "PASSIVE INT (INVESTIGATION)") {
      const passPerception =
        cs.stats.Int.proff === true
          ? intMod + cs.proficiency
          : intMod;
      setPassivePerception(passPerception);
    }
  }, [props, cs.stats, cs.proficiency, wisMod, intMod]);

  return (
    <div className={styles.sense_main_holder}>
      <div className={`overflowing ${styles.value_holder}`}>{passivePerception}</div>
      <div className={styles.sense_holder}>{props.text}</div>
    </div>
  );
};

export default Senses;
