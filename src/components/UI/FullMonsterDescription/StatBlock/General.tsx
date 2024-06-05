import React from "react";

import styles from "../mainstyling.module.css";

interface GeneralProps {
  saving_throw: string;
  skill: string;
  senses: string;
  con: string[];
  dmg: string[];
  res: string[];
  vul: string[];
  lang: string;
  challenge: {
    rating: number;
    xp: string;
  };
}

const General: React.FC<GeneralProps> = (props)=> {
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

interface GeneralStatsProps {
  name: string;
  stat: string | JSX.Element;
}

const GeneralStats: React.FC<GeneralStatsProps> = ({name,stat}) => {
  return (
    <div className={styles.table__styling}>
      <div className={styles.skills_style}>{name} </div>
      {stat}
    </div>
  );
};
export default General;
export {GeneralStats};