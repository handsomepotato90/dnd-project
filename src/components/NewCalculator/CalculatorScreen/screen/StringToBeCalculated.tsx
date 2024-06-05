import React, { useContext } from "react";
import CalculatorContext from "../../../store/calculator-context";

import styles from "./Screen.module.css";

const StringToBeCalculated: React.FC = () => {
  const calc = useContext(CalculatorContext);

  return (
    <div className={` ${styles.toBeCalculated_style}`}>
      {calc.userCalculatorInputToBeDisplayed}
    </div>
  );
}
export default StringToBeCalculated;