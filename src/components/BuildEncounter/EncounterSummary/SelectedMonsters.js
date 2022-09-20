import React, { useContext } from "react";
import Monster from "./Monster";
import styles from "./SelectedMonster.module.css";
import MonsterXp from "../../store/monsterXp-context";

export default function SelectedMonsters() {
  let mtxp = useContext(MonsterXp);
  console.log(mtxp.monsterBlock);
  return (
    <div className={styles.general__style}>
      {mtxp.monsterBlock.map((monster, i) => (
        <Monster key={i} monster={monster}></Monster>
      ))}
    </div>
  );
}
