import styles from "./PassiveSenses.module.css";
import { useEffect, useState, useContext } from "react";
import CS from "../../../../../store/CS-context";

export default function Senses(props) {
  const [passivePerception, setPassivePerception] = useState(0);
  const cs = useContext(CS);
  useEffect(() => {
    if (props.text === "PASSIVE WIS (PERCEPTION)") {
      const passPerception =
        cs.stats.Wis.proff === true
          ? 10 + cs.stats.Wis.value + parseInt(cs.proficiency)
          : 10 + cs.stats.Wis.value;
      setPassivePerception(passPerception);
    }
    if (props.text === "PASSIVE INT (INVESTIGATION)") {
      const passPerception =
        cs.stats.Int.proff === true
          ? 10 + cs.stats.Int.value + parseInt(cs.proficiency)
          : 10 + cs.stats.Int.value;
      setPassivePerception(passPerception);
    }
    if (props.text === "PASSIVE WIS (INSIGHT)") {
      const passPerception =
        cs.stats.Wis.proff === true
          ? 10 + cs.stats.Wis.value + parseInt(cs.proficiency)
          : 10 + cs.stats.Wis.value;
      setPassivePerception(passPerception);
    }
  }, [props, cs.stats, cs.proficiency]);
  return (
    <div className={styles.sense_main_holder}>
      <div className={styles.value_holder}>{passivePerception}</div>
      <div className={styles.sense_holder}>{props.text}</div>
    </div>
  );
}
