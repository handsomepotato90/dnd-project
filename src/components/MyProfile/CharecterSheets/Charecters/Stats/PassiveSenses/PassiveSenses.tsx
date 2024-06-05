import React from "react";
import styles from "../SavingThrows/SavingThrows.module.css";
import Senses from "./Senses";

const PassiveSenses: React.FC = () => {
  return (
    <div className={styles.saving_trows_box}>
      <Senses text="PASSIVE WIS (PERCEPTION)"></Senses>
      <Senses text="PASSIVE INT (INVESTIGATION)"></Senses>
      <Senses text="PASSIVE WIS (INSIGHT)"></Senses>
    </div>
  );
}

export default PassiveSenses;
