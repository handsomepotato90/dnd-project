import React, { useState, useEffect, useContext } from "react";
import CS from "../../../../store/CS-context";
import styles from "./Stats.module.css";
import AutoFocusInputEnterEvent from "../../../../UI/AutoFocusInputEnterEvent";

interface Props {
  text: string;
  shortHand: string;
}

const ComponentStats: React.FC<Props> = (props) => {
  const cs = useContext(CS);
  const [inputValue, setInputValue] = useState<boolean>(false);
  const [statValue, setStatValue] = useState<number>(
    cs.stats[props.shortHand].value
  );
  const [modifier, setModifier] = useState<number>(
    cs.stats[props.shortHand].modifire ?? 0
  );

  useEffect(() => {
    setStatValue(cs.stats[props.shortHand].value);
  }, [cs.stats, props.shortHand]);

  const changeStat = (val: number): void => {
    const baseStatValue: number = -5;
    const modifierCalc: number = baseStatValue + Math.floor(val / 2);
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
          valuesOnsubmit={(val: string | number) => changeStat(Number(val))}
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
};

export default ComponentStats;
