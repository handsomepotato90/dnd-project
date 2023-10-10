import { useContext } from "react";
import CalculatorContext from "../../../store/calculator-context";

import MinMaxRoll from "./MinMaxRoll";

export default function MinMaxComponent() {
  const calc = useContext(CalculatorContext);

  return (
    <div>
      <MinMaxRoll howHigh={"min"} result={calc.minValueToBeRolled}></MinMaxRoll>
      <MinMaxRoll howHigh={"max"} result={calc.maxValueToBeRolled}></MinMaxRoll>
    </div>
  );
}
