import { useState } from "react";

import styles from "./Stats.module.css";
import { useEffect } from "react";

export default function ComponentStats(props) {
  const [inputValue, setInputValue] = useState(false);
  const [statValue, setStatValue] = useState(0);
  const [modifier, setModifier] = useState(0);

  useEffect(() => {
    setStatValue(props.value);
  }, [props.value]);

  useEffect(() => {
    const baseStatValue = -5;
    const modifierCalc = baseStatValue + Math.floor(statValue / 2);

    setModifier(modifierCalc);
  }, [props.value, statValue]);

  return (
    <div className={`black__background ${styles.stats_general_box}`}>
      <span>{props.text}</span>
      <span className="red_text">{modifier}</span>
      {inputValue ? (
        <input
          className={`${styles.total_stat}`}
          autoFocus={true}
          onChange={(e) => setStatValue(e.target.value)}
          onBlur={() => setInputValue(false)}
        ></input>
      ) : (
        <div
          onClick={() => setInputValue(true)}
          className={`red_text ${styles.total_stat}`}
        >
          {statValue}
        </div>
      )}
    </div>
  );
}
