import { useContext } from "react";
import CalculatorContext from "../../../store/calculator-context";

import styles from "./Screen.module.css";

export default function StringToBeCalculated() {
  const calc = useContext(CalculatorContext);

  return (
    <div className={` ${styles.toBeCalculated_style}`}>
      {calc.userCalculatorInputToBeDisplayed}
    </div>
  );
}
