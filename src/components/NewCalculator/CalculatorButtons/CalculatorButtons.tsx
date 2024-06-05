import React from "react";
import DieButtons from "./Buttons/DieButtons";
import StandartButtons from "./Buttons/StandartButtons";
import styles from "./CalculatorButtons.module.css";

const CalculatorButtons: React.FC = () => {
  return (
    <div className={styles.calculator_buttons__general_div}>
      <DieButtons />
      <StandartButtons />
    </div>
  );
};

export default CalculatorButtons;
