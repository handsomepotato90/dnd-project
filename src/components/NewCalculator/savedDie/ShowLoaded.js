import { useContext } from "react";
import CalculatorContext from "../../store/calculator-context";

export default function ShowLoaded() {
  const calc = useContext(CalculatorContext);
  const openPresedWindow = () => {
    calc.changePresetsView(true);
  };

  return <button onClick={openPresedWindow}>Load</button>;
}
