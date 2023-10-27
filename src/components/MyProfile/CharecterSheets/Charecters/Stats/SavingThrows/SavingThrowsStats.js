import { useEffect, useState, useContext } from "react";
import CS from "../../../../../store/CS-context";
import styles from "./SavingThrows.module.css";

export default function SavingThrowsStats(props) {
  const [value, setValue] = useState(0);
  const [proff, setProff] = useState(false);
  const profName = props.text;
  const cs = useContext(CS);

  useEffect(() => {
    const baseStatValue = -5;
    const modifierCalc = baseStatValue + Math.floor(props.value / 2);
    cs.savingThrows(props.text, modifierCalc, proff);
  }, [props.value]);

  const setProf = () => {
    setProff((current) => !current);
    cs.proficiencySet(props.text, !proff);
  };

  useEffect(() => {
    if (proff === true) {
      setValue(cs.stats[profName].value + parseInt(cs.proficiency));
    } else {
      setValue(cs.stats[profName].value);
    }
  }, [cs.stats, proff]);

  return (
    <div className={styles.saving_box}>
      <input
        className={styles.button_radio}
        type="radio"
        onClick={setProf}
        checked={proff}
      ></input>
      <div className={styles.saving_text}>{props.text}</div>
      <div className={styles.saving_value_holder}>{value}</div>
    </div>
  );
}
