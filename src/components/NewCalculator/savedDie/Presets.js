import { useContext } from "react";
import CalculatorContext from "../../store/calculator-context";

export default function Presets(props) {
  const calc = useContext(CalculatorContext);

  const rollPreset = () => {
    calc.PresetsCalculator(props.formula);
  };

  return (
    <div onClick={rollPreset}>
      <span>{props.title}</span>
      {/* <span>{props.formula}</span> */}
    </div>
  );
}
