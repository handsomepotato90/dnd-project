import React from "react";

import "./Button.css";

const DiceButton = (props) => {
  const rollDice = (dice) => {
    let rand = Math.random();
    let result = Math.floor(rand * parseInt(dice) + 1);
    return result;
  };

  const calculateDiceRoll = (event) => {
    // console.log(parseInt(event.target.innerText))
    if (!props.mode) {
      if (event.target.innerText !== "C") {
        const buttonValue = event.target.innerText.split("d");
        let result = rollDice(buttonValue[1]);
        props.onTrytoRoll(result);
      } else {
        props.onTrytoRoll(0);
      }
    } else {
      switch (event.target.innerHTML) {
        case "C":
          props.onTrytoRoll(0);
          break;
        case "+":
          props.onTrytoRoll("+");
          break;
        case "-":
          props.onTrytoRoll("-");
          break;
        case "=":
          props.onTrytoRoll("=");
          break;
        default:
          props.onTrytoRoll(event.target.innerHTML);
      }
    }
  };

  return (
    <button
      onClick={calculateDiceRoll}
      className="calc_button__size calc_button__font_size"
      value={props.button}
    >
      {props.buttonText}
    </button>
  );
};
export default DiceButton;
