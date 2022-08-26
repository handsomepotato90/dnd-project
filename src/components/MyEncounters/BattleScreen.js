import React from "react";
import styles from "./BattleScreen.module.css";
import MonsterBattleBox from "./MonsterBattleBox";
const fullStats = [
  {
    name: "Aboleth",
    img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/11/1000/1000/636238825975375671.jpeg",
    hp: "135 (18d10 + 36)",
    AC: "19 (Natural Armor)",
    speed: "40 ft., fly 80 ft., swim 40 ft. ",
  },
  {
    name: "Adult Green Dragon",
    img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/26/1000/1000/636238962276510242.jpeg",
    hp: "207 (18d12 + 90)",
    AC: "19 (Natural Armor)",
    speed: "40 ft., fly 80 ft., swim 40 ft. ",
    dmgImm: "Poison",
    conImm: "Poisoned",
  },
  {
    name: "Awakened Shrub",
    img: "https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg",
    hp: "10 (3d6)",
    AC: "9",
    speed: "20 ft. ",
    dmgRes: "Piercing",
    dmgVul: "Fire",
  },
];

export default function BattleScreen() {
  return (
    <div className={styles.display__style}>
      {fullStats.map((stats, i) => (
        <MonsterBattleBox key={i} stats={stats}></MonsterBattleBox>
      ))}
    </div>
  );
}

