import React, { useState, useEffect, useContext } from "react";
import CS from "../../../../store/CS-context";
import AutoFocusInputEnterEvent from "../../../../UI/AutoFocusInputEnterEvent";
import styles from "./Stats.module.css";

interface Props {
  text: string;
}

const ComponentInit: React.FC<Props> = (props) => {
  const cs = useContext(CS);
  const [changeValue, setChangeValue] = useState<boolean>(false);
  const [prof, setProf] = useState<string>("0");

  useEffect(() => {
    if (props.text === "PROFICIENCY") {
      setProf(cs.proficiency);
    }
    if (props.text === "SPEED") {
      setProf(cs.speed);
    }
    if (props.text === "INSPIRATION") {
      setProf(cs.inspiration);
    }
  }, [cs.proficiency, cs.speed, cs.inspiration]);

  const settingProff = (val: string): void => {
    setChangeValue(false);
    if (props.text === "PROFICIENCY") {
      cs.proff(val);
    }
    if (props.text === "SPEED") {
      cs.setSpeed(val);
    }
    if (props.text === "INSPIRATION") {
      cs.setInspiration(val);
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
          type="number"
          valuesOnsubmit={(val: string) => settingProff(val)}
          value={prof}
        ></AutoFocusInputEnterEvent>
      )}
    </div>
  );
};

export default ComponentInit;
