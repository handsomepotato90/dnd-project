import { useContext } from "react";
import styles from "./Difficulty.module.css";
import "./DifficultyBar.css";
import GroupXp from "../../store/groupXp-context";
import MonsterXp from "../../store/monsterXp-context";
import DifficultyBar from "./DifficultyBar";

export default function Difficulty() {
  let ctx = useContext(GroupXp);
  let mxp = useContext(MonsterXp);
  
  let difficultiText = "None";
  let diff = "";
  let color = "";
  if (ctx.theChallengeLadder.easy === 0 || mxp.monsterChallengeLadder === 0) {
    diff = "";
    difficultiText = "None";
  } else if (ctx.theChallengeLadder.easy >= mxp.monsterChallengeLadder) {
    diff = "easy easy_position";
    difficultiText = "Easy";
    color = " green_text";
  } else if (
    ctx.theChallengeLadder.easy < mxp.monsterChallengeLadder &&
    ctx.theChallengeLadder.medium >= mxp.monsterChallengeLadder
  ) {
    diff = "medium medium_position";
    difficultiText = "Medium";
    color = " aqua_text";
  } else if (
    ctx.theChallengeLadder.medium < mxp.monsterChallengeLadder &&
    ctx.theChallengeLadder.hard >= mxp.monsterChallengeLadder
  ) {
    diff = "hard hard_position";
    difficultiText = "Hard";
    color = " orange_text";
  } else if (
    ctx.theChallengeLadder.hard < mxp.monsterChallengeLadder &&
    ctx.theChallengeLadder.deadly >= mxp.monsterChallengeLadder
  ) {
    diff = "deadly deadly_position";
    difficultiText = "Deadly";
    color = " red_text";
  } else if (ctx.theChallengeLadder.deadly < mxp.monsterChallengeLadder) {
    diff = "imposible imposible_position";
    difficultiText = "IMPOSSIBLE";
    color = " imposible_text";
  }

  return (
    <div className={`black__background ${styles.difficulty_box__style}`}>
      <div className={styles.main_text__style}>
        <span>ENCOUNTER SUMMARY</span>
      </div>
      <div className={styles.xp_box__style}>
        <div>
          <span
            className={`${styles.titles__styles} ${styles.monster_xp__style}`}
          >
            DIFFICULTY
          </span>
          <span className={`${styles.content__styles} ${color}`}>
            {difficultiText}
          </span>

          <span
            className={`${styles.titles__styles} ${styles.monster_xp__style}`}
          >
            TOTAL XP
          </span>
          <span className={styles.content__styles}>
            {mxp.monsterChallengeLadder} XP
          </span>
        </div>

        <div>
          <span className={styles.titles__styles}>
            EASY:
            <span className={styles.content__styles}>
              {ctx.theChallengeLadder.easy} XP
            </span>
          </span>

          <span className={styles.titles__styles}>
            MEDIUM:
            <span className={styles.content__styles}>
              {ctx.theChallengeLadder.medium} XP
            </span>
          </span>

          <span className={styles.titles__styles}>
            HARD:
            <span className={styles.content__styles}>
              {ctx.theChallengeLadder.hard} XP
            </span>
          </span>
          <span className={styles.titles__styles}>
            DEADLY:
            <span className={styles.content__styles}>
              {ctx.theChallengeLadder.deadly} XP
            </span>
          </span>
        </div>
      </div>

      <DifficultyBar className={diff}></DifficultyBar>
    </div>
  );
}
