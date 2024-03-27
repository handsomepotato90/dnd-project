import { useState, useEffect, useContext } from "react";
import GeneralLookInitiative from "./GeneralLookInitiative.js";
import CS from "../../../../../store/CS-context";

import styles from "./InitiativeAcResistance.module.css";
export default function CSInitiative() {
  const [initiative, setInitiative] = useState(0);
  const cs = useContext(CS);
  useEffect(() => {
    setInitiative(cs.stats.Dex.modifire);
  }, [cs.stats.Dex]);
  return (
    <GeneralLookInitiative>
      <span>Initiative</span>
      <div className={`overflowing ${styles.initiative_value_style}`}>
        {initiative}
      </div>
    </GeneralLookInitiative>
  );
}
