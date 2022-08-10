import React, { useState } from "react";
import Box from "../UI/Box";
import CalcButtons from "./CalcButtons";
import CalcScreen from "./CalcScreen";

import "./Calculator.css";

const Calculator = () => {
        let sum = 0;
  let [result, CalcFun] = useState([]);
  const comingResults = (diceResults) => {
    console.log(diceResults)
    if(diceResults !== 0){
      CalcFun([...result, diceResults]);
    }else{
      CalcFun([]);
    }
    
  };
  result.forEach(element => {
        sum += element;
  });


  return (
    <Box className="big_box__top_margin big_box__color_back">
      <CalcScreen resultsSender={sum} allNumbers={result} />
      <CalcButtons onComingResults={comingResults} />
     
    </Box>
  );
};

export default Calculator;
