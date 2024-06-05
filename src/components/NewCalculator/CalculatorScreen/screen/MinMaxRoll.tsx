import React from "react";
import styles from "./Screen.module.css"

interface MinMaxRollProps {
  howHigh: string;
  result: number;
}

const MinMaxRoll: React.FC<MinMaxRollProps> = ({ howHigh, result }) => {
  return (
    <div className={styles.min_max_general}>
      <span>{result}</span>
      <span>{howHigh}</span>
    </div>
  );
}

export default MinMaxRoll;