import React, { useState, useEffect, useContext, useCallback } from "react";
import CS from "../../../../../store/CS-context";
import styles from "./Skills.module.css";

interface SkillProps {
  skill: string;
  mod: string;
}

export default function Skill(props: SkillProps): React.ReactElement {
  const cs = useContext(CS);
  const [modifierValue, setModifierValues] = useState<number>(0);
  const [prof, setProf] = useState<boolean>(cs.skillsProf[props.skill].value);

  const changeProf = useCallback((): void => {
    setProf((current: boolean) => !current);
    cs.setingSkills(props.skill, !prof);
  }, [setProf, props.skill, prof, cs]);
  
  useEffect(() => {
    if (prof === true) {
      setModifierValues(
        (cs.stats[props.mod]?.modifire ?? 0) + cs.proficiency
      );
    } else {
      setModifierValues(cs.stats[props.mod]?.modifire ?? 0);
    }
  }, [props, cs.stats[props.mod], cs.skillsProf, prof, changeProf, cs.proficiency, cs.stats]);
  

  return (
    <div className={styles.skill_orientation}>
      <input
        className={styles.radio_button_skills}
        type="radio"
        readOnly={true}
        checked={prof}
        onClick={changeProf}
      ></input>
      <div>{props.mod}</div>
      <div className={styles.border_bot}>{props.skill}</div>
      <button className={`overflowing ${styles.border_bot}`}>
        {modifierValue}
      </button>
    </div>
  );
}
