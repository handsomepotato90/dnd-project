import React from "react";
import SaveThisCalculation from "./SaveThisCalculation";
import styles from "./Options.module.css";

const Options: React.FC = () => {
  return (
    <div className={styles.general_style_option_buttons}>
      <SaveThisCalculation></SaveThisCalculation>
    </div>
  );
}
export default Options;