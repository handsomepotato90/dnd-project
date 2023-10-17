import { useContext, useEffect } from "react";
import CalculatorContext from "../../store/calculator-context";
import { LoginContext } from "../../store/login-context";
import { useHttpClient } from "../../hooks/http-hook";

import styles from "./Options.module.css";
import Presets from "./Presets";

export default function UseSavedCalculations() {
  const { sendRequest } = useHttpClient();
  const calc = useContext(CalculatorContext);
  const auth = useContext(LoginContext);
  const formulas = calc.presetCalculations;
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/calculator_options/load`,
          "POST",
          JSON.stringify({
            id: auth.userId,
          }),
          {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          }
        );
        
        calc.setCalculations(resData.presets.calculatorSaves);
      } catch (err) {}
    };
    if (formulas.length === 0) {
      fetchFriends();
    }
  }, []);
  return (
    <div className={styles.load_presets}>
      {formulas.map((preset, i) => (
        <Presets
          title={preset.calculationName}
          id={auth.userId}
          formula={preset.formula}
          presetId ={preset._id}
          key={i}
        ></Presets>
      ))}
    </div>
  );
}
