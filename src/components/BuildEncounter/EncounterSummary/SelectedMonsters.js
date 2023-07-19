import React, { useContext } from "react";
import Monster from "./Monster";
import styles from "./SelectedMonster.module.css";
import MonsterXp from "../../store/monsterXp-context";

export default function SelectedMonsters() {
  let mtxp = useContext(MonsterXp);
  return (
    <div className={`black__background ${styles.general__style}`}>
      {mtxp.monsterBlock.map((monster, i) => (
        <Monster key={i} monster={monster}></Monster>
      ))}
    </div>
  );
}
