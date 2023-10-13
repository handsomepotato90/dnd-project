import { useState } from "react";
import Draggable from "react-draggable";
import useWindowSize from "../hooks/screensize-hook";
import { CalculatorProvider } from "../store/calculator-context";
import CalculatorScreen from "./CalculatorScreen/CalculatorScreen";
import CalculatorButtons from "./CalculatorButtons/CalculatorButtons";
import Options from "./savedDie/Options";
import UseSavedCalculations from "./savedDie/UseSavedCalculations";

import styles from "./Calculator.module.css";

export default function Calculator() {
  const [presets, setPresets] = useState(false);
  const size = useWindowSize();
  const showPretsetDieFormulas = () => {
    setPresets((current) => !current);
  };
  return (
    <Draggable disabled={size.width > 800 ? false : true} bounds="#root">
      <div className={styles.calculator_load}>
        <CalculatorProvider>
          <div className={styles.calculator_main__div}>
            <CalculatorScreen></CalculatorScreen>
            <Options></Options>
            <CalculatorButtons></CalculatorButtons>
          </div>
          <div className={styles.preset_bar}>
            <button
              className={styles.preset_button}
              onClick={showPretsetDieFormulas}
            >
              {presets ? "<" : ">"}
            </button>
            {presets && <UseSavedCalculations></UseSavedCalculations>}
          </div>
        </CalculatorProvider>
      </div>
    </Draggable>
  );
}
