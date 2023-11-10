import { useState, useEffect, useContext } from "react";
import CS from "../../../../store/CS-context";

import styles from "./Stats.module.css";

export default function ComponentInit(props) {
  const cs = useContext(CS);
  const [changeValue, setChangeValue] = useState(false);
  const [prof, setProf] = useState(0);
  useEffect(() => {
    if (props.text === "PROFICIENCY") {
      setProf(cs.proficiency);
    }
    if (props.text === "SPEED") {
      setProf(cs.speed);
    }
  }, [cs.proficiency, cs.speed]);

  const settingProff = () => {
    setChangeValue(false);
    if (props.text === "PROFICIENCY") {
      cs.proff(prof);
    }
    if (props.text === "SPEED") {
      cs.setSpeed(prof);
    }
  };
  return (
    <div className={styles.semi_important_stats}>
      <span>{props.text}</span>
      {!changeValue ? (
        <div
          onClick={() => setChangeValue(true)}
          className={`overflowing ${styles.semi_important_text_style}`}
        >
          {prof}
        </div>
      ) : (
        <input
          type="number"
          className={styles.semi_important_text_style}
          autoFocus={true}
          onChange={(e) => setProf(e.target.value)}
          onBlur={settingProff}
        ></input>
      )}
    </div>
  );
}
