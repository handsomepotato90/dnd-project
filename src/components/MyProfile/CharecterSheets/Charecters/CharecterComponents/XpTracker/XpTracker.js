import { useState, useEffect, useContext } from "react";

import ProgressBar from "./ProgressBar";
import CS from "../../../../../store/CS-context";
import {
  getLargestKeyByValueLessThanOrEqualTo,
  getSmallestKeyByValueGreaterThan,
} from "../../../../../UI/FullMonsterDescription/functions";
import styles from "./XpTracker.module.css";
const xp_levels = {
  1: 0,
  2: 300,
  3: 900,
  4: 2700,
  5: 6500,
  6: 14000,
  7: 23000,
  8: 34000,
  9: 48000,
  10: 64000,
  11: 85000,
  12: 100000,
  13: 120000,
  14: 140000,
  15: 165000,
  16: 195000,
  17: 225000,
  18: 265000,
  19: 305000,
  20: 355000,
};
export default function XpTracker() {
  const cs = useContext(CS);
  const [currentXp, setCurrentXp] = useState(cs.xp);
  const [toNextLevel, setToNextLevel] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [nextLevel, setNextLevel] = useState(0);

  const changeCurrentXp = (value) => {
    if (!value) {
      cs.xpSetter(0);
      return;
    }

    cs.xpSetter(parseInt(value));
  };

  useEffect(() => {
    setCurrentXp(cs.xp);
    let smallKey = getLargestKeyByValueLessThanOrEqualTo(xp_levels, cs.xp);
    let bigKey = getSmallestKeyByValueGreaterThan(xp_levels, cs.xp);

    if (smallKey === null) {
      smallKey = currentLevel;
    }

    if (bigKey === null) {
      bigKey = nextLevel;
    }

    setCurrentLevel(smallKey);
    setNextLevel(bigKey);
    setToNextLevel(xp_levels[bigKey] - cs.xp);
  }, [cs.xp]);

  return (
    <div className={styles.xp_tracker}>
      <span className={`${styles.xp_tracker_text} red_text`}>
        You are LVL{" "}
        <span className={styles.xp_tracker_lvl}>{currentLevel}</span>
      </span>
      <input
        type="number"
        onBlur={(e) => changeCurrentXp(e.target.value)}
        placeholder={0}
      ></input>

      <ProgressBar
        minValue={xp_levels[currentLevel]}
        maxValue={xp_levels[nextLevel]}
        currentValue={currentXp}
        toNextLVL={toNextLevel}
      ></ProgressBar>
    </div>
  );
}
