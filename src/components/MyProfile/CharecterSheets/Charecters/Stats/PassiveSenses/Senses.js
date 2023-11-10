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
          ? 10 + cs.stats.Wis.modifire + parseInt(cs.proficiency)
          : 10 + cs.stats.Wis.modifire;
      setPassivePerception(passPerception);
    }
    if (props.text === "PASSIVE INT (INVESTIGATION)") {
      const passPerception =
        cs.stats.Int.proff === true
          ? 10 + cs.stats.Int.modifire + parseInt(cs.proficiency)
          : 10 + cs.stats.Int.modifire;
      setPassivePerception(passPerception);
    }
    if (props.text === "PASSIVE WIS (INSIGHT)") {
      const passPerception =
        cs.stats.Wis.proff === true
          ? 10 + cs.stats.Wis.modifire + parseInt(cs.proficiency)
          : 10 + cs.stats.Wis.modifire;
      setPassivePerception(passPerception);
    }
  }, [props, cs.stats, cs.proficiency]);
  return (
    <div className={styles.sense_main_holder}>
      <div className={`overflowing ${styles.value_holder}`}>{passivePerception}</div>
      <div className={styles.sense_holder}>{props.text}</div>
    </div>
  );
}
