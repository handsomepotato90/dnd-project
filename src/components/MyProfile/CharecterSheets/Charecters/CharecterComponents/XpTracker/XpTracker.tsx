import React, { useState, useEffect, useContext } from "react";

import ProgressBar from "./ProgressBar";
import CS from "../../../../../store/CS-context";
import {
  getLargestKeyByValueLessThanOrEqualTo,
  getSmallestKeyByValueGreaterThan,
} from "../../../../../UI/FullMonsterDescription/functions";

import styles from "./XpTracker.module.css";

interface XPLevels {
  [level: number]: number;
}

const xp_levels: XPLevels = {
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

const XpTracker: React.FC = () => {
  const cs = useContext(CS);
  const [currentXp, setCurrentXp] = useState(cs.xp);
  const [toNextLevel, setToNextLevel] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [nextLevel, setNextLevel] = useState(0);

  const changeCurrentXp = (value: number) => {
    if (!value) {
      cs.xpSetter(0);
      return;
    }

    cs.xpSetter(value);
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
    setToNextLevel(xp_levels[bigKey as keyof typeof xp_levels] - cs.xp);
  }, [cs.xp]);

  return (
    <div className="xp-tracker-container">
      <div className={styles.xp_tracker_main}>
        <div className={styles.xp_tracker}>
          <span className={`${styles.xp_tracker_text} red_text`}>
            L: <span className={styles.xp_tracker_lvl}>{currentLevel}</span>
          </span>
        </div>
        <div className={styles.xp_tracker}>
          <div className={styles.xp_add_main}>
            <input
              type="number"
              onChange={(e) => setUserInput(parseInt(e.target.value))}
              placeholder={"0"}
            ></input>
            <button
              className={styles.add_xp}
              onClick={() => changeCurrentXp(userInput)}
            >
              Add Xp
            </button>
          </div>
          <ProgressBar
            minValue={xp_levels[currentLevel]}
            maxValue={xp_levels[nextLevel]}
            currentValue={currentXp}
            toNextLVL={toNextLevel}
          ></ProgressBar>
        </div>
      </div>
    </div>
  );
};

export default XpTracker;
