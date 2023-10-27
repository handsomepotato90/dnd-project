import { useState, useEffect, useContext } from "react";
import CS from "../../../../../store/CS-context";
import styles from "./Skills.module.css";

export default function Skill(props) {
  const [modifierValue, setModifierValues] = useState(0);
  const [prof, setProf] = useState(false);
  const cs = useContext(CS);

  const changeProf = () => {
    setProf((current) => !current);
    cs.setingSkills(props.skill, prof);
  };
  useEffect(() => {
    if (prof === true) {
      setModifierValues(cs.stats[props.mod].value + parseInt(cs.proficiency));
    } else {
      setModifierValues(cs.stats[props.mod].value);
    }
  }, [props, cs.stats[props.mod], cs.skillsProf, prof, changeProf]);

  return (
    <div className={styles.skill_orientation}>
      <input
        className={styles.radio_button_skills}
        type="radio"
        checked={prof}
        onClick={changeProf}
      ></input>
      <div>{props.mod}</div>
      <div className={styles.border_bot}>{props.skill}</div>
      <button className={styles.border_bot}>{modifierValue}</button>
    </div>
  );
}
