import { useState } from "react";
import styles from "./CharecterComponents.module.css";

export default function NameClassLevel() {
  const defaultNametValue = "Name";
  const defaultClasstValue = "Class";
  const defaultLeveltValue = "Level 1";

  return (
    <div className={styles.general_charecter_Style}>
      <TextInputSWitch name={defaultNametValue}></TextInputSWitch>
      <TextInputSWitch name={defaultClasstValue}></TextInputSWitch>
      <TextInputSWitch name={defaultLeveltValue}></TextInputSWitch>
    </div>
  );
}

export const TextInputSWitch = (props) => {
  const [switchMode, setSwitchMode] = useState(false);
  
  return !switchMode ? (
    <span onMouseUp={() => setSwitchMode(true)}>{props.name}</span>
  ) : (
    <input
      placeholder=""
      autoFocus={true}
      onBlur={() => setSwitchMode(false)}
    ></input>
  );
};
