import React from "react";

import "./Button.css";

const DiceButton = (props) => {
  const rollDice = (dice) => {
    let rand = Math.random();
    let result = Math.floor(rand * parseInt(dice) + 1);
    return result;
  };

  const calculateDiceRoll = (event) => {
    if (!props.mode) {
      if (event.target.innerText !== "C") {
        const buttonValue = event.target.innerText.split("d");
        let result = rollDice(buttonValue[1]);
        props.onTrytoRoll(result,`${result}(${event.target.innerText})`);
      } else {
        props.onTrytoRoll(0);
      }
    } else {
      switch (event.target.innerHTML) {
        case "C":
          props.onTrytoRoll(0,0);
          break;
        case "+":
          props.onTrytoRoll("+","+");
          break;
        case "-":
          props.onTrytoRoll("-","-");
          break;
        case "=":
          props.onTrytoRoll("=",'');
          break;
        default:
          props.onTrytoRoll(event.target.innerHTML,event.target.innerHTML);
      }
    }
  };

  return (
    <button
      onClick={calculateDiceRoll}
      onTouchStart={calculateDiceRoll}
      className="calc_button__size calc_button__font_size"
      value={props.button}
    >
      {props.buttonText}
    </button>
  );
};
export default DiceButton;
