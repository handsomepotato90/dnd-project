import React from "react";
import styles from "./OtherProficiencies.module.css";
import Proficiencies from "./Proficiencies";

const OtherProficiencies: React.FC = () => {
  return (
    <div className={styles.other}>
      <Proficiencies text="ARMOUR"></Proficiencies>
      <Proficiencies text="WEAPONS"></Proficiencies>
      <Proficiencies text="TOOLS"></Proficiencies>
      <Proficiencies text="LANGUAGES"></Proficiencies>
    </div>
  );
}

export default OtherProficiencies;
