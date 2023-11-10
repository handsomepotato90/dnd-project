import ComponentStats from "./ComponentStats";
import ComponentInit from "./ComponentInit";
import HpAndHpManagment from "./HpAndHpManagment";

import styles from "./Stats.module.css";
export default function Stats(props) {
  return (
    <>
      <div className={styles.important_stats_stats_holder}>
        <ComponentStats text={"STRENGHT"} shortHand={"Str"}></ComponentStats>
        <ComponentStats text={"DEXTERITY"} shortHand={"Dex"}></ComponentStats>
        <ComponentStats
          text={"CONSTITUTION"}
          shortHand={"Con"}
        ></ComponentStats>
        <ComponentStats text={"INTELIGENCE"} shortHand={"Int"}></ComponentStats>
        <ComponentStats text={"WISDOM"} shortHand={"Wis"}></ComponentStats>
        <ComponentStats text={"CHARISMA"} shortHand={"Cha"}></ComponentStats>
      </div>
      <div className={styles.semi_important}>
        <ComponentInit text={"PROFICIENCY"}></ComponentInit>
        <ComponentInit text={"SPEED"}></ComponentInit>
      </div>
      <div>
        <HpAndHpManagment></HpAndHpManagment>
      </div>
    </>
  );
}
