import React, { ReactNode } from "react";
import styles from "./InitiativeAcResistance.module.css";

const GeneralLookInitiative: React.FC<{ children: ReactNode }> = (props) => {
  return <div className={styles.general_look_initiative}>{props.children}</div>;
};

export default GeneralLookInitiative;
