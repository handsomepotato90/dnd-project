import styles from "../SavingThrows/SavingThrows.module.css";
import Senses from "./Senses";


export default function PassiveSenses() {
  return (
    <div className={styles.saving_trows_box}>
      <Senses text="PASSIVE WIS (PERCEPTION)"></Senses>
      <Senses text="PASSIVE INT (INVESTIGATION)"></Senses>
      <Senses text="PASSIVE WIS (INSIGHT)"></Senses>
    </div>
  );
}
