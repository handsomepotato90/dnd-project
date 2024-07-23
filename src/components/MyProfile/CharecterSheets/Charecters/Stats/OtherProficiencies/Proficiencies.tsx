import React, { useState, useEffect, useContext } from "react";
import styles from "./OtherProficiencies.module.css";
import CS from "../../../../../store/CS-context";

const Proficiencies: React.FC<{ text: string }> = (props) => {
  const [moreArmours, setMoreArmours] = useState(false);
  const [armor, setArmor] = useState("None");
  const cs = useContext(CS);

  useEffect(() => {
    setArmor(cs.otherProff[props.text]);
  }, [cs.otherProff]);

  const setOtherProf = () => {
    setMoreArmours(false);
    if (armor.trim() === "") {
      cs.setOtherProficiency(props.text, "NONE");
      setArmor("NONE");
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
};

export default Proficiencies;
