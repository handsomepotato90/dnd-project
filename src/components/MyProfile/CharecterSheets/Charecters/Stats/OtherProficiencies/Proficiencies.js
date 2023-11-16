import { useState, useEffect, useContext } from "react";
import styles from "./OtherProficiencies.module.css";
import CS from "../../../../../store/CS-context";

export default function Proficiencies(props) {
  const [moreArmours, setMoreArmours] = useState(false);
  const [armor, setArmor] = useState("None");
  const cs = useContext(CS);
  useEffect(() => {
    setArmor(cs.otherProficiency[props.text]);
  }, [cs.otherProficiency]);
  const setOtherProf = () => {
    setMoreArmours(false);
    if (armor.trim() === "") {
      cs.setOtherProficiency(props.text, "NONE");
      setArmor("NONE")
    } else {
      cs.setOtherProficiency(props.text, armor);
    }
  };
  return (
    <div>
      <div className={`red_text ${styles.main_text}`}>{props.text}</div>
      {!moreArmours ? (
        <div className={styles.items_text} onClick={() => setMoreArmours(true)}>
          {armor}
        </div>
      ) : (
        <input
          autoFocus={true}
          onBlur={setOtherProf}
          onChange={(e) => setArmor(e.target.value)}
        ></input>
      )}
    </div>
  );
}
