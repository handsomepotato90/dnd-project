import { useState, useContext } from "react";
import CalculatorContext from "../../store/calculator-context";
import { LoginContext } from "../../store/login-context";
import { useHttpClient } from "../../hooks/http-hook";

import styles from "./Options.module.css";

export default function SaveThisCalculation() {
  const { sendRequest } = useHttpClient();
  const [saveDies, setSaveDies] = useState(false);
  const [nameOfCalc, setNameOfCalc] = useState("");

  const calc = useContext(CalculatorContext);
  const auth = useContext(LoginContext);

  const nameOfCalculation = (event) => {
    setNameOfCalc(event.target.value);
  };
  const giveNameAndConsentToSaveInformation = () => {
    setSaveDies(true);
  };
  const saveToDbNow = async () => {
    if (calc.userCalculatorInputToBeDisplayed.length === 0) {
      return;
    }
    try {
      setSaveDies(false);
      const resData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/calculator_options/save",
        "POST",
        JSON.stringify({
          id: auth.userId,
          nameOfCalculation: nameOfCalc,
          calculation: calc.userCalculatorInputToBeDisplayed,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
      calc.setCalculations([...resData.presets]);
    } catch (err) {}
  };

  return (
    <div>
      {saveDies && (
        <>
          <input
            onChange={nameOfCalculation}
            className={styles.name_input_of_saved}
            value={nameOfCalc}
          ></input>
          <button onMouseUp={saveToDbNow}>SAVE</button>
        </>
      )}
      {!saveDies && (
        <button onMouseUp={giveNameAndConsentToSaveInformation}>SAVE</button>
      )}
    </div>
  );
}
