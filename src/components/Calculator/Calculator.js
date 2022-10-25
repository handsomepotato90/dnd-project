import React, { useState } from "react";
import Box from "../UI/Box";
import CalcButtons from "./CalcButtons";
import CalcScreen from "./CalcScreen";
import "./Calculator.css";

const Calculator = (props) => {
  let [numbersAndDice, setNumbersAndDice] = useState([]);
  let [result, setResult] = useState([]);
  const [calc, setCalc] = useState({
    sym: "",
    number: "",
    sum: 0,
  });
  const performCalculation = (sym, number, result) => {
    let final;
    if (sym === "+") {
      final = result * 1 + number * 1;
    } else if (sym === "-") {
      final = result * 1 - number * 1;
    }
    return final;
  };
  const comingResults = (diceResults, dice, mode) => {
    if (
      (numbersAndDice[numbersAndDice.length - 1] === "+" ||
        numbersAndDice[numbersAndDice.length - 1] === "-") &&
      (diceResults === "+" || diceResults === "-")
    ) {
      setNumbersAndDice([...numbersAndDice.pop()]);
    }
    if (diceResults !== 0 && diceResults !== "=") {
      setNumbersAndDice([...numbersAndDice, dice]);
    }
    if (diceResults !== 0 && diceResults !== "=" && !mode) {
      setResult([...result, diceResults]);

      setCalc({ ...calc, sum: calc.sum * 1 + diceResults * 1 });
    } else if (diceResults !== 0 && mode) {
      if ((diceResults === "+" || diceResults === "-") && calc.number ==='') {
        setCalc({
          ...calc,
          sym: diceResults,
        });
        return;
      } 
      if ((diceResults === "+" || diceResults === "-") && calc.number !=='' && calc.sym !=='') {
        setCalc({
          sym: diceResults,
          number: "",
          sum: performCalculation(calc.sym, calc.number, calc.sum),
        });
        return;
      } 
      if (diceResults === "=" && calc.number ==='') {
        setCalc({
          sym: "",
          number: "",
          sum: calc.sum,
        });
        return;
      }
      if (diceResults === "=" && calc.number !=='') {
        setCalc({
          sym: "",
          number: "",
          sum: performCalculation(calc.sym, calc.number, calc.sum),
        });
      } else {
        calc.sum === "" || calc.sym === ""
          ? setCalc({ ...calc, sum: calc.sum + diceResults * 1 })
          : setCalc({ ...calc, number: calc.number + diceResults });
      }
    } else {
      setResult([]);
      setNumbersAndDice([]);
      setCalc({
        sym: "",
        number: "",
        sum: 0,
      });
    }
  };

  return (
    <Box className="big_box__top_margin big_box__color_back">
      <CalcScreen
        resultsSender={calc.sum}
        allNumbers={numbersAndDice}
        symbol={calc.sym}
        toAdd={calc.number}
      />
      <CalcButtons onComingResults={comingResults} />
      {props.children}
    </Box>
  );
};

export default Calculator;
