import React, { useContext } from "react";
import CalculatorContext from "../../../../store/calculator-context";

import styles from "./ButtonsStyle.module.css";

interface  DxValueDieProps {
  color: string;
  display: string;
  value: number | 'Roll' | 'C' | '+' | '-' | 'D20' | 'D4' | 'D6' | 'D8' | 'D10' | 'D12' | 'D100' | '*' | '/';
}

const DxValueDie: React.FC<DxValueDieProps> = ({ color, display, value }) => {
  const calc = useContext(CalculatorContext);

  const submitValue = () => {
    calc.clickedDie(value);
  };

  return (
    <div className={styles.die_button_style}>
      <button className={styles.die_span__button} onMouseUp={submitValue} style={{ color: `${color}` }}>
        {display}
      </button>
    </div>
  );
}

export default DxValueDie;