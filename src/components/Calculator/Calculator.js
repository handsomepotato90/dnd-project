import React, { useState } from "react";
import Box from "../UI/Box";
import CalcButtons from "./CalcButtons";
import CalcScreen from "./CalcScreen";

import "./Calculator.css";

const Calculator = () => {
  let [result, setResult] = useState([]);
  const [calc, setCalc] = useState({
    sym: "",
    number: "",
    sum: "",
  });
  const performCalculation = (sym, number, result) => {
    let final;
    console.log(sym);
    if (sym === "+") {
      final = result * 1 + number * 1;
    } else if (sym === "-") {
      final = result * 1 - number * 1;
    }
    console.log(final);
    return final;
  };
  const comingResults = (diceResults, mode) => {
    if (diceResults!== 0 && !mode) {
      setResult([...result, diceResults]);


      //////////////////////////////this needs  work!!!!!!!!!!
      let element = 0;
     for (let index = 0; index < result.length; index++) {
       element = element + result[index]*1;
     }
      setCalc({ ...calc, sum:element });
      /////////////////////////////////////////////////////////
    } else if (diceResults !== 0 && mode) {
      if (diceResults === "+" || diceResults === "-") {
        setCalc({
          ...calc,
          sym: diceResults,
        });
      } else if (diceResults === "=") {
        setCalc({
          sym: "",
          number: "",
          sum: performCalculation(calc.sym, calc.number, calc.sum),
        });
      } else {
        calc.sum === "" || calc.sym === ""
          ? setCalc({ ...calc, sum: calc.sum + diceResults })
          : setCalc({ ...calc, number: calc.number + diceResults });
      }
    } else {
      setResult([]);
    }
  };
  console.log(calc);

  return (
    <Box className="big_box__top_margin big_box__color_back">
      <CalcScreen
        resultsSender={calc.sum}
        allNumbers={result}
        symbol={calc.sym}
        toAdd={calc.number}
      />
      <CalcButtons onComingResults={comingResults} />
    </Box>
  );
};

export default Calculator;
