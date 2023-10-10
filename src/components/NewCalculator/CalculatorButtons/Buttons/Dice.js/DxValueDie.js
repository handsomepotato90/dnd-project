import { useContext } from "react";
import CalculatorContext from "../../../../store/calculator-context";

import styles from "./ButtonsStyle.module.css";

export default function DxValueDie(props) {
  const {color,display, value } = props;
  const calc = useContext(CalculatorContext);

  const submitValue = () => {
    calc.clickedDie(value);
  };

  return (
    <div className={styles.die_button_style}>
      <button className={styles.die_span__button} onMouseUp={submitValue} style={{ color: `${color}`}}>
        {display}
      </button>
    </div>
  );
}
