import { useState } from "react";
import styles from "./OtherProficiencies.module.css";

export default function Proficiencies(props) {
  const [moreArmours, setMoreArmours] = useState(false);
  const [armor, setArmor] = useState("None");
  return (
    <div>
      <div className={styles.main_text}>{props.text}</div>
      {!moreArmours ? (
        <div className={styles.items_text} onClick={() => setMoreArmours(true)}>{armor}</div>
      ) : (
        <input
          autoFocus={true}
          onBlur={() => setMoreArmours(false)}
          onChange={(e) => setArmor(e.target.value)}
        ></input>
      )}
    </div>
  );
}
