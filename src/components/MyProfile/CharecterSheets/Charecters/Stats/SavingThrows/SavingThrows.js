import styles from "./SavingThrows.module.css";
import SavingThrowsStats from "./SavingThrowsStats";

export default function SavingThrows(props) {
  return (
    <div className={styles.saving_trows_box}>
      <SavingThrowsStats
        text={"Str"}
        value={14}
        prof={false}
      ></SavingThrowsStats>
      <SavingThrowsStats
        text={"Dex"}
        value={20}
        prof={false}
      ></SavingThrowsStats>
      <SavingThrowsStats
        text={"Con"}
        value={8}
        prof={false}
      ></SavingThrowsStats>
      <SavingThrowsStats
        text={"Int"}
        value={20}
        prof={false}
      ></SavingThrowsStats>
      <SavingThrowsStats
        text={"Wis"}
        value={10}
        prof={false}
      ></SavingThrowsStats>
      <SavingThrowsStats
        text={"Cha"}
        value={26}
        prof={false}
      ></SavingThrowsStats>
    </div>
  );
}
