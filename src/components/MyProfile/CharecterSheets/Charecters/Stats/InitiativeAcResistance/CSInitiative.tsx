import React, { useState, useEffect, useContext } from "react";
import GeneralLookInitiative from "./GeneralLookInitiative";
import CS from "../../../../../store/CS-context";

import styles from "./InitiativeAcResistance.module.css";

const CSInitiative: React.FC = () => {
  const [initiative, setInitiative] = useState(0);
  const cs = useContext(CS);

  useEffect(() => {
    setInitiative(cs.stats.Dex.modifire ?? 0);
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

export default CSInitiative;
