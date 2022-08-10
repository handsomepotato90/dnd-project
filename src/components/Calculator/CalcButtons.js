import React from "react";
import Box from "../UI/Box";
import Button from "./Button";

import "./CalcButtons.css";


const CalcButtons = (props) => {
  const buttonValues = [
    {
      id: "4",
      value: "1d4",
    },
    {
      id: "6",
      value: "1d6",
    },
    {
      id: "8",
      value: "1d8",
    },
    {
      id: "10",
      value: "1d10",
    },
    {
      id: "12",
      value: "1d12",
    },
    {
      id: "20",
      value: "1d20",
    },
    {
        id: "100",
        value: "1d100",
      },
      {
        id: "c",
        value: "C",
      },
  ];
  const returningValue = (rolledValue) =>{
        props.onComingResults(rolledValue);
  }
  return (
    <Box className ="small_box__size small_box__color_back">
      {buttonValues.map((button) => (
        <Button onTrytoRoll={returningValue} key = {button.id} buttonText={button} />
      ))}
    </Box>
  );
};

export default CalcButtons;
