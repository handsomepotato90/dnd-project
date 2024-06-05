import React, { useState, ReactNode } from "react";
import {
  calculateArrayWithD,
  calculateMinimumRoll,
  calculateMaximumRoll,
} from "./calculator_functions";

interface CalculatorProviderProps {
  children: ReactNode;
}
interface savedCalculationsTypes {
  calculationName: string,
  formula: string[],
  _id: string,
}

interface CalculatorContextType {
  userCalculatorInputToBeDisplayed: (number | string)[];
  minValueToBeRolled: number;
  maxValueToBeRolled: number;
  RolledValue: number;
  presetCalculations: savedCalculationsTypes[];
  setCalculations: (collectionOfCalculations:savedCalculationsTypes[]) => void;
  clickedDie: (die: number | string) => void;
  PresetsCalculator: (preset: (string|number)[]) => void;
}

const CalculatorContext = React.createContext<CalculatorContextType>({
  userCalculatorInputToBeDisplayed: [],
  minValueToBeRolled: 0,
  maxValueToBeRolled: 0,
  RolledValue: 0,
  presetCalculations: [],
  setCalculations: () => {},
  clickedDie: () => {},
  PresetsCalculator: () => {},
});

export const CalculatorProvider: React.FC<CalculatorProviderProps> = ({
  children,
}: CalculatorProviderProps) => {
  const [valueOfDice, setValueOfDice] = useState<(number | string)[]>([]);
  const [result, setResult] = useState<number>(0);
  const [minResult, setMinResult] = useState<number>(0);
  const [maxResult, setMaxResult] = useState<number>(0);
  const [savedCalculations, setSavedCalculations] = useState<savedCalculationsTypes[]>([]);
  
  const clickedDie = (die: number | string) => {
    if (die === "Roll") {
      const value = calculateArrayWithD(valueOfDice);
      const minValue = calculateMinimumRoll(valueOfDice);
      const maxValue = calculateMaximumRoll(valueOfDice);
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

  const PresetsCalculator = (preset: (string|number)[]) => {
    setValueOfDice(preset);
    const value = calculateArrayWithD(preset);
    const minValue = calculateMinimumRoll(preset);
    const maxValue = calculateMaximumRoll(preset);
    setResult(Math.floor(value));
    setMinResult(Math.floor(minValue));
    setMaxResult(Math.floor(maxValue));
    return;
  };
  const setCalculations = (collectionOfCalculations: savedCalculationsTypes[]) => {
    setSavedCalculations(collectionOfCalculations);
  };

  return (
    <CalculatorContext.Provider
      value={{
        userCalculatorInputToBeDisplayed: valueOfDice,
        minValueToBeRolled: minResult,
        maxValueToBeRolled: maxResult,
        RolledValue: result,
        presetCalculations: savedCalculations,
        setCalculations: setCalculations,
        clickedDie: clickedDie,
        PresetsCalculator: PresetsCalculator,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
