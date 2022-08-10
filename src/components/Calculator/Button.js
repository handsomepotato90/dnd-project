import React from "react";

import "./Button.css";

const Button = (props) => {
  const rollDice = (dice) => {
    let rand = Math.random();
    let result = Math.floor(rand * parseInt(dice) + 1 );
    return result;
  };

  const calculateDiceRoll = (event) => {
    if(event.target.innerText !== "C"){
      const buttonValue = event.target.innerText.split("d");
      let result = rollDice(buttonValue[1]);
      props.onTrytoRoll(result);
    }else{
      props.onTrytoRoll(0);
    }
    
  };
  
  return (
    <button
      onClick={calculateDiceRoll}
      className="calc_button__size calc_button__font_size"
    >
      {props.buttonText.value}
    </button>
  );
};
export default Button;
