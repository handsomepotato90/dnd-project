import { useState, useEffect, useContext } from "react";
import CS from "../../../../store/CS-context";
import styles from "./Stats.module.css";
import AutoFocusInputEnterEvent from "../../../../UI/AutoFocusInputEnterEvent";
export default function ComponentStats(props) {
  const cs = useContext(CS);
  const [inputValue, setInputValue] = useState(false);
  const [statValue, setStatValue] = useState(cs.stats[props.shortHand].value);
  const [modifier, setModifier] = useState(cs.stats[props.shortHand].modifire);

  useEffect(() => {
    setStatValue(cs.stats[props.shortHand].value);
  }, [cs.stats]);
  const changeStat = (val) => {
    const baseStatValue = -5;
    const modifierCalc = baseStatValue + Math.floor(val / 2);
    setModifier(modifierCalc);
    setInputValue(false);
    cs.statsSetter(props.shortHand, val, modifierCalc);
  };
  return (
    <div className={`black__background ${styles.stats_general_box}`}>
      <span>{props.text}</span>
      <span className="red_text overflowing">{modifier}</span>
      {inputValue ? (
        <AutoFocusInputEnterEvent
          type="number"
          valuesTosubmit={changeStat}
          value={statValue}
        ></AutoFocusInputEnterEvent>
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
