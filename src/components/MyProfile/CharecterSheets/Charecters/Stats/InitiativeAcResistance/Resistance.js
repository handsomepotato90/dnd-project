import { useState, useEffect, useContext } from "react";
import CS from "../../../../../store/CS-context";

import styles from "./InitiativeAcResistance.module.css";

export default function Resistance() {
  const [defenses, setDefenses] = useState("");
  const [moreDefenses, setMoreDefenses] = useState(false);
  const [conditions, setConditions] = useState("");
  const [moreConditions, setMoreConditions] = useState(false);
  const cs = useContext(CS);

  const conditionsOfChar = () => {
    setMoreConditions(false);
    cs.defencesSetter(defenses);
  };
  const defensesOfChar = () => {
    setMoreDefenses(false);
    cs.conditionsSetter(conditions);
  };
  return (
    <div className={styles.res_box}>
      <div className={styles.res_box_border}>
        <span>Defenses</span>
        {!moreDefenses ? (
          <span onClick={() => setMoreDefenses(true)}>{defenses}</span>
        ) : (
          <textarea
            autoFocus={true}
            onBlur={defensesOfChar}
            onChange={(e) => setDefenses(e.target.value)}
          ></textarea>
        )}
      </div>
      <div>
        <span>Conditions</span>
        {!moreConditions ? (
          <span onClick={() => setMoreConditions(true)}>{conditions}</span>
        ) : (
          <textarea
            autoFocus={true}
            onBlur={conditionsOfChar}
            onChange={(e) => setConditions(e.target.value)}
          ></textarea>
        )}
      </div>
    </div>
  );
}
