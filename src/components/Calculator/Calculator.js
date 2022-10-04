import React, { useState } from "react";
import Box from "../UI/Box";
import CalcButtons from "./CalcButtons";
import CalcScreen from "./CalcScreen";

import "./Calculator.css";

const Calculator = (props) => {
  let [result, setResult] = useState([]);
  const [calc, setCalc] = useState({
    sym: "",
    number: "",
    sum: 0,
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

      setCalc({ ...calc, sum: (calc.sum*1) + (diceResults*1) });
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
          ? setCalc({ ...calc, sum: calc.sum + (diceResults*1) })
          : setCalc({ ...calc, number: calc.number + diceResults });
      }
    } else {
      setResult([]);
      setCalc({
        sym: "",
        number: "",
        sum: 0,
      })
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
      {props.children}
    </Box>
  );
};

export default Calculator;
