import { useState, useEffect, useContext } from "react";
import CS from "../../../../store/CS-context";
import AutoFocusInputEnterEvent from "../../../../UI/AutoFocusInputEnterEvent";
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

  const settingProff = (val) => {
    setChangeValue(false);
    if (props.text === "PROFICIENCY") {
      cs.proff(val);
    }
    if (props.text === "SPEED") {
      cs.setSpeed(val);
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
        <AutoFocusInputEnterEvent
          valuesTosubmit={settingProff}
          value={prof}
        ></AutoFocusInputEnterEvent>
      )}
    </div>
  );
}
