import ComponentStats from "./ComponentStats";
import ComponentInit from "./ComponentInit";
import HpAndHpManagment from "./HpAndHpManagment";

import styles from "./Stats.module.css";
export default function Stats(props) {
  return (
    <>
      <div className={styles.important_stats_stats_holder}>
        <ComponentStats text={"STRENGHT"} value={14}></ComponentStats>
        <ComponentStats text={"DEXTERITY"} value={20}></ComponentStats>
        <ComponentStats text={"CONSTITUTION"} value={8}></ComponentStats>
        <ComponentStats text={"INTELIGENCE"} value={20}></ComponentStats>
        <ComponentStats text={"WISDOM"} value={10}></ComponentStats>
        <ComponentStats text={"CHARISMA"} value={26}></ComponentStats>
      </div>
      <div className={styles.semi_important}>
        <ComponentInit text={"PROFICIENCY"} value={"2"}></ComponentInit>
        <ComponentInit text={"SPEED"} value={`30ft.`}></ComponentInit>
      </div>
      <div>
        <HpAndHpManagment></HpAndHpManagment>
      </div>
    </>
  );
}
