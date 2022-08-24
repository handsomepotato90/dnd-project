import React, {useContext} from "react";
import styles from "./Monster.module.css";
import MonsterXp from "../../store/monsterXp-context";

export default function Monster(props) {
  const mds = useContext(MonsterXp)
  const deleteThisMonster = ()=>{
    mds.DeleteMonster(props.monster.name)
  }
  return (
    <div className={styles.monster_box__style}>
      <div className={styles.generel_info__style}>
        <div className={styles.first_info_box}>
          <span className={`${styles.monster_name__style}`}>{props.monster.name}</span>
          <span className={styles.desc_behavior}>{props.monster.type}</span>
        </div>
        <div className={styles.second_info_box}>
          <span className={styles.desc_text__style}>
            CR: <span className={styles.black}>{props.monster.challenge}</span>
          </span>
          <span className={styles.desc_text__style}>
            XP: <span className={styles.black}>{props.monster.xp}</span>
          </span>
        </div>
      </div>
      <div>
        <button className={styles.delete_this} onClick={deleteThisMonster}>X</button>
      </div>
    </div>
  );
}
