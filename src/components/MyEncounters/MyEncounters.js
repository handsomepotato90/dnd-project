import React from "react";
import EncounterBox from "./EncounterBox";
import styles from "./MyEncounters.module.css";
const encounters = [
  {
    name: "Babys first fight",
    id: "37d7da91e7834755defe1cd9f631eac5",
    monsters: [
      {
        name: "Aboleth",
        img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/11/1000/1000/636238825975375671.jpeg",
      },
      { name: "Green Dragon" },
      { name: "Zombie" },
    ],
  },

  {
    name: "Real shit",
    id: "b8ad3db8949b002f3b83e711a4365d1f",
    monsters: [
      {
        name: "Acolyte",
        img: "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      },
      { name: "Zombie" },
      { name: "Zombie" },
    ],
  },
];

export default function MyEncounters() {
  return (
    <div className={styles.my_encounters__style}>

      {encounters.map((encounter, i) => (
        <EncounterBox
          key={i}
          name={encounter.name}
          monsters={encounter.monsters.name}
          img={encounter.monsters[0].img}
          id={encounter.id}
        ></EncounterBox>
      ))}
    </div>
  );
}
