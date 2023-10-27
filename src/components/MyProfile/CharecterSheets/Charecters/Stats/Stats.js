import ComponentStats from "./ComponentStats";
import ComponentInit from "./ComponentInit";
import HpAndHpManagment from "./HpAndHpManagment";


import styles from "./Stats.module.css";
export default function Stats(props) {


  return (
    <>
      <div className={styles.important_stats_stats_holder}>
        <ComponentStats text={"Strength"} value={14}></ComponentStats>
        <ComponentStats text={"Dexterity"} value={20}></ComponentStats>
        <ComponentStats text={"Constitution"} value={8}></ComponentStats>
        <ComponentStats text={"Inteligence"} value={20}></ComponentStats>
        <ComponentStats text={"Wisdom"} value={10}></ComponentStats>
        <ComponentStats text={"Charisma"} value={26}></ComponentStats>
      </div>
      <div className={styles.semi_important}>
        <ComponentInit text={"Proficiency"} value={"2"}></ComponentInit>
        <ComponentInit text={"Speed"} value={`30ft.`}></ComponentInit>
      </div>
      <div>
        <HpAndHpManagment></HpAndHpManagment>
      </div>
    </>
  );
}
