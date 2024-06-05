import React from "react";
import MonsterStats from "../../../types/MonsterStatsTypes";

import styles from "../mainstyling.module.css";

interface LifeArmorSpeedProps{
  armor: MonsterStats['Armor Class'];
  hp: MonsterStats['Hit Points'];
  speed: MonsterStats['Speed'];
}

const LifeArmorSpeed: React.FC<LifeArmorSpeedProps> = ({ armor, hp, speed }) => {
  return (
    <div className={styles.picture_divide}>
      <div className={styles.life_stiling}>
        <div>
          <div className={styles.leader}>Armor Class: </div>
          <div
            className={styles.numbers}
          >{`${armor.value} ${armor.type}`}</div>
        </div>
        <div>
          <div className={styles.leader}>Hit Points: </div>
          <div
            className={styles.numbers}
          >{`${hp.hp} ${hp.dice}`}</div>
        </div>
        <div>
          <div className={styles.leader}>Speed: </div>
          <div className={styles.numbers}>{speed}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default LifeArmorSpeed;
