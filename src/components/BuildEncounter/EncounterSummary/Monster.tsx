import { useContext } from "react";
import styles from "./Monster.module.css";
import MonsterXp from "../../store/monsterXp-context";
import ImageComponent from "../../UI/ImageComponent";

interface Monster {
  name: string,
  url: string,
  type: string,
  challenge: number,
  xp: number
}

interface MonsterProps {
    monster: Monster
}

const Monster: React.FC<MonsterProps> = ({monster}) => {
  const mds = useContext(MonsterXp);
  const deleteThisMonster = () => {
    mds.DeleteMonster(monster.name);
  };

  return (
    <div className={styles.monster_box__style}>
      <div className={styles.generel_info__style}>
        <ImageComponent
          size="small"
          src={monster.url}
          alt="monster"
        ></ImageComponent>
        <div className={styles.first_info_box}>
          <span className={`${styles.monster_name__style} overflowing`}>
            {monster.name}
          </span>
          <span className={styles.desc_behavior}>{monster.type}</span>
        </div>
        <div className={styles.second_info_box}>
          <span className={styles.desc_text__style}>
            CR: <span className={styles.black}>{monster.challenge}</span>
          </span>
          <span className={styles.desc_text__style}>
            XP: <span className={styles.black}>{monster.xp}</span>
          </span>
        </div>
      </div>
      <div>
        <button className={styles.delete_this} onClick={deleteThisMonster}>
          X
        </button>
      </div>
    </div>
  );
}
export default Monster;