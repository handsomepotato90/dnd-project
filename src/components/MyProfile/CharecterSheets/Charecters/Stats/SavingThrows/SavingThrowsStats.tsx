import React, { useEffect, useState, useContext } from "react";
import CS from "../../../../../store/CS-context";
import styles from "./SavingThrows.module.css";

interface Props {
  text: string;
  prof: boolean;
}

const SavingThrowsStats: React.FC<Props> = (props) => {
  const profName = props.text;
  const cs = useContext(CS);
  const [value, setValue] = useState(cs.stats[profName].modifire);
  const [proff, setProff] = useState(cs.stats[profName].proff);

  const setProf = () => {
    setProff((current) => !current);
    cs.proficiencySet(props.text, !proff);
  };

  useEffect(() => {
    if (proff === true) {
      setValue((cs.stats[profName].modifire ?? 0) + cs.proficiency);
    } else {
      setValue(cs.stats[profName].modifire);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cs.stats[profName].modifire, cs.proficiency, setProf]);

  return (
    <div className={styles.saving_box}>
      <input
        className={styles.button_radio}
        type="radio"
        readOnly={true}
        onClick={setProf}
        checked={proff}
      ></input>
      <div className={styles.saving_text}>{props.text}</div>
      <div className={`overflowing ${styles.saving_value_holder}`}>{value}</div>
    </div>
  );
};

export default SavingThrowsStats;
