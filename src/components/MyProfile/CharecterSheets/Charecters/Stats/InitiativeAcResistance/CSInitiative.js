import { useState, useEffect, useContext } from "react";
import CS from "../../../../../store/CS-context";

import styles from "./InitiativeAcResistance.module.css";
export default function CSInitiative() {
  const [initiative, setInitiative] = useState(0);
  const cs = useContext(CS);
  useEffect(() => {
    setInitiative(cs.stats.Dex.value);
  }, [cs.stats.Dex]);
  return (
    <div className={styles.general_look_initiative}>
      <span>Initiative</span>
      <div className={styles.initiative_value_style}>{initiative}</div>
    </div>
  );
}
