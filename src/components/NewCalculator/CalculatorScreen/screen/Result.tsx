import React, { useContext } from "react";
import CalculatorContext from "../../../store/calculator-context";

import styles from "./Screen.module.css";

const Result: React.FC = () => {
  const calc = useContext(CalculatorContext);

  return (
    <div className={styles.result_general}>
      <span>{calc.RolledValue}</span>
    </div>
  );
}
export default Result;