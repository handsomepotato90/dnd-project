import { useState } from "react";
import ClassLevel from "./ClassLevel";

import styles from "./CharecterComponents.module.css";

export default function NameClassLevel() {
  const defaultNametValue = "Name";

  return (
    <div className={styles.general_charecter_Style}>
      <TextInputSWitch name={defaultNametValue}></TextInputSWitch>
      <ClassLevel></ClassLevel>
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
