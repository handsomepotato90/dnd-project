import React, {useContext} from "react";
import styles from "./Difficulty.module.css";
import GroupXp from "../../store/groupXp-context";
export default function Difficulty() {
    let ctx = useContext(GroupXp);
    console.log(ctx)
  return (

    <div className={styles.difficulty_box__style}>
      <div className={styles.main_text__style}>
        <span>ENCOUNTER SUMMARY</span>
      </div>
      <div className={styles.xp_box__style}>
        <div>
          <span className={`${styles.titles__styles} ${styles.monster_xp__style}`}>DIFFICULTY</span>
          <span className={styles.content__styles}>HARD</span>

          <span className={`${styles.titles__styles} ${styles.monster_xp__style}`}>TOTAL XP</span>
          <span className={styles.content__styles}>0 XP</span>
        </div>

        <div>
          <span className={styles.titles__styles}>
            EASY:<span className={styles.content__styles}>{ctx.theChallengeLadder.easy} XP</span>
          </span>
          <span className={styles.titles__styles}>
            MEDIUM:<span className={styles.content__styles}>{ctx.theChallengeLadder.medium} XP</span>
          </span>
          <span className={styles.titles__styles}>
            HARD:<span className={styles.content__styles}>{ctx.theChallengeLadder.hard} XP</span>
          </span>
          <span className={styles.titles__styles}>
            DEADLY:<span className={styles.content__styles}>{ctx.theChallengeLadder.deadly} XP</span>
          </span>
        </div>
      </div>
    </div>
  );
}
