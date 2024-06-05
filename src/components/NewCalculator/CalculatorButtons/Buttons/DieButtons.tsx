import DxValueDie from "./Dice/DxValueDie";

import styles from "./Dice.module.css";
export default function DieButtons() {
  return (
    <div className={styles.d_twenty__container}>
      <DxValueDie display={"D20"} color="gold" value={"D20"}></DxValueDie>
      <DxValueDie display={"D4"} color="blue" value={"D4"}></DxValueDie>
      <DxValueDie display={"D6"} color="red" value={"D6"}></DxValueDie>
      <DxValueDie display={"D8"} color="orange" value={"D8"}></DxValueDie>
      <DxValueDie display={"D10"} color="green" value={"D10"}></DxValueDie>
      <DxValueDie display={"D12"} color="purple" value={"D12"}></DxValueDie>
      <DxValueDie display={"D%"} color="grey" value={"D100"}></DxValueDie>
    </div>
  );
}
