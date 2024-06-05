import { useState, useContext, ChangeEvent } from "react";
import CalculatorContext from "../../store/calculator-context";
import { LoginContext } from "../../store/login-context";
import { useHttpClient } from "../../hooks/http-hook";

import styles from "./Options.module.css";

const SaveThisCalculation: React.FC = () => {
  const { sendRequest, isLoading, error } = useHttpClient();
  const [saveDies, setSaveDies] = useState<boolean>(false);
  const [nameOfCalc, setNameOfCalc] = useState<string>("");
  const calc = useContext(CalculatorContext);
  const auth = useContext(LoginContext);

  const nameOfCalculation = (event: ChangeEvent<HTMLInputElement>) => {
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
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/calculator_options/save`,
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
      calc.setCalculations([...responseData.presets]);
    } catch (err) {
      // Handle error, e.g., display error message
    }
  };

  return (
    <div>
      {saveDies ? (
        <>
          <input
            onChange={nameOfCalculation}
            className={styles.name_input_of_saved}
            value={nameOfCalc}
          />
          <button onClick={saveToDbNow} disabled={isLoading}>
            {isLoading ? "SAVING..." : "SAVE"}
          </button>
        </>
      ) : (
        <button onClick={giveNameAndConsentToSaveInformation} disabled={isLoading}>
          {isLoading ? "SAVING..." : "SAVE"}
        </button>
      )}
      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};

export default SaveThisCalculation;
