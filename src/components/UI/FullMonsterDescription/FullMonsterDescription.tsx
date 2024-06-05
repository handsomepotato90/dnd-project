import React from "react";
import styles from "./mainstyling.module.css";
import Actions from "./Actions";
import StatBlock from "./StatBlock/StatBlock";
import Border from "../Border";
import MonsterStats from "../../types/MonsterStatsTypes"; // Importing default export without curly braces

interface FullMonsterDescriptionProps {
  onClick: () => void;
  monsterStats: MonsterStats;
}

const FullMonsterDescription: React.FC<FullMonsterDescriptionProps> = ({ onClick, monsterStats }) => {
  const stopClick = () => {
    if (window.getSelection()?.type !== "Range") {
      onClick(false);
    }
  };

  return (
    <div className={styles.big_box}>
      <Border />

      <div onClick={stopClick} className={styles.box_design}>
        <div className={styles.first_half}>
          <StatBlock monsterStats={monsterStats} />
        </div>

        <div className={styles.second_half}>
          <Actions name="Actions" actions={monsterStats.Actions} />
          {monsterStats["Legendary Actions"] && (
            <Actions
              name="Legendary Actions"
              actions={monsterStats["Legendary Actions"]}
            />
          )}
          {monsterStats.Reactions && (
            <Actions name="Reactions" actions={monsterStats.Reactions} />
          )}
        </div>

        <div className={styles.image_half}>
          {monsterStats.img_url && (
            <img src={monsterStats.img_url} alt="monster" />
          )}
          {monsterStats.Characteristics && ( // Check if Characteristics is not undefined
            <div
              dangerouslySetInnerHTML={{
                __html: monsterStats.Characteristics,
              }}
            ></div>
          )}
        </div>
      </div>
      <Border />
    </div>
  );
};
export default FullMonsterDescription;
