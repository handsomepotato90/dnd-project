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

  const showPresetDieFormulas = () => {
    setPresets((current) => !current);
  };

  const isDraggableDisabled = size.width !== undefined && size.width > 800;

  return (
    <Draggable disabled={!isDraggableDisabled} bounds="#root">
      <div className={styles.calculator_load}>
        <CalculatorProvider>
          <div className={styles.calculator_main__div}>
            <CalculatorScreen />
            <Options />
            <CalculatorButtons />
          </div>
          <div className={styles.preset_bar}>
            <button
              className={styles.preset_button}
              onClick={showPresetDieFormulas}
            >
              {presets ? "<" : ">"}
            </button>
            {presets && <UseSavedCalculations />}
          </div>
        </CalculatorProvider>
      </div>
    </Draggable>
  );
}
