import Skill from "./Skill";

import styles from "./Skills.module.css";
export default function Skills() {
  return (
    <div className={styles.giant_skill_block}>
      <div className={styles.general_description}>
        <span>PROF</span>
        <span>MOD</span>
        <span>SKILL</span>
        <span>BONUS</span>
      </div>
      <Skill mod={"Dex"} skill={"Acrobatics"}></Skill>
      <Skill mod={"Wis"} skill={"Animal Handling"}></Skill>
      <Skill mod={"Int"} skill={"Arcana"}></Skill>
      <Skill mod={"Str"} skill={"Athletics"}></Skill>
      <Skill mod={"Cha"} skill={"Deception"}></Skill>
      <Skill mod={"Int"} skill={"History"}></Skill>
      <Skill mod={"Wis"} skill={"Insight"}></Skill>
      <Skill mod={"Cha"} skill={"Intimidation"}></Skill>
      <Skill mod={"Int"} skill={"Investigation"}></Skill>
      <Skill mod={"Wis"} skill={"Medicine"}></Skill>
      <Skill mod={"Int"} skill={"Nature"}></Skill>
      <Skill mod={"Wis"} skill={"Perception"}></Skill>
      <Skill mod={"Cha"} skill={"Performance"}></Skill>
      <Skill mod={"Cha"} skill={"Persuasion"}></Skill>
      <Skill mod={"Int"} skill={"Religion"}></Skill>
      <Skill mod={"Dex"} skill={"Sleight of Hand"}></Skill>
      <Skill mod={"Dex"} skill={"Stealth"}></Skill>
      <Skill mod={"Wis"} skill={"Survival"}></Skill>
    </div>
  );
}
