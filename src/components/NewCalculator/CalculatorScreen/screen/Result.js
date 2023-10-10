import { useContext } from "react";
import CalculatorContext from "../../../store/calculator-context";

import styles from "./Screen.module.css";

export default function Result() {
  const calc = useContext(CalculatorContext);

  return (
    <div className={styles.result_general}>
      <span>{calc.RolledValue}</span>
    </div>
  );
}
