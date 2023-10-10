import DxValueDie from "./Dice.js/DxValueDie";

import styles from "./Dice.module.css";
export default function StandartButtons() {
  return (
    <div className={styles.stadard_die__keybord}>
      <DxValueDie display={"C"} color="red" value={"C"}></DxValueDie>
      <DxValueDie
        display={<>&divide;</>}
        color="orange"
        value={"/"}
      ></DxValueDie>
      <DxValueDie display={"7"} color="white" value={7}></DxValueDie>
      <DxValueDie display={"8"} color="white" value={8}></DxValueDie>
      <DxValueDie display={"9"} color="white" value={9}></DxValueDie>
      <DxValueDie
        display={<>&times;</>}
        color="orange"
        value={"*"}
      ></DxValueDie>

      <DxValueDie display={"4"} color="white" value={4}></DxValueDie>
      <DxValueDie display={"5"} color="white" value={5}></DxValueDie>
      <DxValueDie display={"6"} color="white" value={6}></DxValueDie>
      <DxValueDie display={"-"} color="orange" value={"-"}></DxValueDie>
      <DxValueDie display={"1"} color="white" value={1}></DxValueDie>
      <DxValueDie display={"2"} color="white" value={2}></DxValueDie>
      <DxValueDie display={"3"} color="white" value={3}></DxValueDie>
      <DxValueDie display={"+"} color="orange" value={"+"}></DxValueDie>
      <DxValueDie display={"0"} color="white" value={0}></DxValueDie>
      <DxValueDie display={"Roll"} color="green" value={"Roll"}></DxValueDie>
    </div>
  );
}
