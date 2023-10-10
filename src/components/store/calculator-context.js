import React, { useState } from "react";
import {
  calculateArrayWithD,
  calculateMinimumRoll,
  calculateMaximumRoll,
} from "./calculator_functions";

const CalculatorContext = React.createContext({
  userCalculatorInputToBeDisplayed: [],
  minValueToBeRolled: 0,
  maxValueToBeRolled: 0,
  RolledValue: 0,
  clickedDie: () => {},
});

export const CalculatorProvider = (props) => {
  const [valueOfDice, setValueOfDice] = useState([]);
  const [result, setResult] = useState(0);
  const [minResult, setMinResult] = useState(0);
  const [maxResult, setMaxResult] = useState(0);

  const clickedDie = (die) => {
    if (die === "Roll") {
      let value = calculateArrayWithD(valueOfDice);
      let minValue = calculateMinimumRoll(valueOfDice);
      let maxValue = calculateMaximumRoll(valueOfDice);
      setResult(Math.floor(value));
      setMinResult(Math.floor(minValue));
      setMaxResult(Math.floor(maxValue));

      return;
    }
    if (die === "C") {
      setValueOfDice([]);
      return;
    }
    setValueOfDice([...valueOfDice, die]);
  };

  return (
    <CalculatorContext.Provider
      value={{
        userCalculatorInputToBeDisplayed: valueOfDice,
        minValueToBeRolled: minResult,
        maxValueToBeRolled: maxResult,
        RolledValue: result,
        clickedDie: clickedDie,
      }}
    >
      {" "}
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
