import React from "react";
import styles from "../mainstyling.module.css";

export default function General(props) {
  return (
    <React.Fragment>
      <GeneralStats
        name="Saving Throws:"
        stat={props.saving_throw}
      ></GeneralStats>
      <GeneralStats name="Skills:" stat={props.skill}></GeneralStats>
      <GeneralStats name="Senses:" stat={props.senses}></GeneralStats>
      <GeneralStats
        name="Condition Immunities: "
        stat={props.con}
      ></GeneralStats>
      <GeneralStats name="Damage Immunities: " stat={props.dmg}></GeneralStats>
      <GeneralStats name="Damage Resistances: " stat={props.res}></GeneralStats>
      <GeneralStats
        name="Damage Vulnerabilities: "
        stat={props.vul}
      ></GeneralStats>
      <GeneralStats name="Languages: " stat={props.lang}></GeneralStats>
      <GeneralStats
        name="Challenge: "
        stat={`${props.challenge.rating} ${props.challenge.xp}`}
      ></GeneralStats>
    </React.Fragment>
  );
}

const GeneralStats = (props) => {
  return (
    <div className={styles.table__styling}>
      <div className={styles.skills_style}>{props.name} </div>
      {props.stat}
    </div>
  );
};
