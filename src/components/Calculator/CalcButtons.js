import React, { useState } from "react";
import Box from "../UI/Box";
import DiceButton from "./DiceButton";
import Button from "../form-elements/Button";
import "./CalcButtons.css";
const values = [
  ["d4",'d6',"d8"],
  ["d10","d12","d20"],
  ["d100","C"],
];
const calculatorButtons = [
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "="],
  [0, "C"],
];

const CalcButtons = (props) => {
  const [mode, setMode] = useState(false);
  const [buttons, setButtons] = useState(values);
  

  const returningValue = (rolledValue) => {
    props.onComingResults(rolledValue,mode);
  };

  const switchCalculator = () => {
    if (!mode) {
      setButtons([...calculatorButtons]);
    } else {
      setButtons([...values]);
    }
    setMode((prevMode) => !prevMode);
  };

  return (
    <Box
      className={`small_box__size small_box__color_back ${
        mode ? "calc__style" : "dice__style"
      }`}
    >
      {buttons.flat().map((button) => (
        <DiceButton
          onTrytoRoll={returningValue}
          key={button.id}
          buttonText={button}
          mode={mode}
        />
      ))}
      <Button className="style" inverse onClick={switchCalculator}>
        {" "}
        SWITCH TO {mode ? "Dice" : "Calc"}
      </Button>
    </Box>
  );
};

export default CalcButtons;
