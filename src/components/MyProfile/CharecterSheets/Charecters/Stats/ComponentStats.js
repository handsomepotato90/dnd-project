import { useState, useEffect, useContext } from "react";
import CS from "../../../../store/CS-context";
import styles from "./Stats.module.css";

export default function ComponentStats(props) {
  const cs = useContext(CS);
  const [inputValue, setInputValue] = useState(false);
  const [statValue, setStatValue] = useState(cs.stats[props.shortHand].value);
  const [modifier, setModifier] = useState(cs.stats[props.shortHand].modifire);

  useEffect(() => {
    setStatValue(cs.stats[props.shortHand].value);
  }, [cs.stats]);
  const changeStat = () => {
    const baseStatValue = -5;
    const modifierCalc = baseStatValue + Math.floor(statValue / 2);
    setModifier(modifierCalc);
    setInputValue(false);
    cs.statsSetter(props.shortHand, statValue, modifierCalc);
  };
  return (
    <div className={`black__background ${styles.stats_general_box}`}>
      <span>{props.text}</span>
      <span className="red_text overflowing">{modifier}</span>
      {inputValue ? (
        <input
          type="number"
          className={`${styles.total_stat}`}
          autoFocus={true}
          onChange={(e) => setStatValue(e.target.value)}
          onBlur={changeStat}
        ></input>
      ) : (
        <div
          onClick={() => setInputValue(true)}
          className={`overflowing red_text ${styles.total_stat}`}
        >
          {statValue}
        </div>
      )}
    </div>
  );
}
