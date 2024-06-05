import MinMaxRoll from "./screen/MinMaxComponent";
import Result from "./screen/Result";
import StringToBeCalculated from "./screen/StringToBeCalculated";

import styles from "./CalculatorScreen.module.css";
export default function CalculatorScreen() {
  return (
    <div className={styles.screen_general_view}>
      <StringToBeCalculated></StringToBeCalculated>
      <MinMaxRoll></MinMaxRoll>
      <Result></Result>
    </div>
  );
}
