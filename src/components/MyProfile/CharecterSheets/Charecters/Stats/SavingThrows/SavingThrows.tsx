import React from "react";
import styles from "./SavingThrows.module.css";
import SavingThrowsStats from "./SavingThrowsStats";

const SavingThrows: React.FC = () => {
  return (
    <div className={styles.saving_trows_box}>
      <SavingThrowsStats text={"Str"} prof={false}></SavingThrowsStats>
      <SavingThrowsStats text={"Dex"} prof={false}></SavingThrowsStats>
      <SavingThrowsStats text={"Con"} prof={false}></SavingThrowsStats>
      <SavingThrowsStats text={"Int"} prof={false}></SavingThrowsStats>
      <SavingThrowsStats text={"Wis"} prof={false}></SavingThrowsStats>
      <SavingThrowsStats text={"Cha"} prof={false}></SavingThrowsStats>
    </div>
  );
}

export default SavingThrows;
