import React, { useState } from "react";
import PlayerChoice from "./PlayerChoice/PlayerChoice";
import MonsterLibrary from "./MonsterLibrary/MonsterLibrary";
import EncounterSummary from "./EncounterSummary/EncounterSummary";
import { GroupXpProvider } from "../store/groupXp-context";
import { MonsterXpProvider } from "../store/monsterXp-context";
import SearchWindow from "./SearchWindow/SearchWindow";
import SaveEncounter from "./SaveEncounter/SaveEncounter";
import SearchByName from "./SearchByName/SearchByName";
import NavigationDrawer from "../UI/NavigationDrawer";
import LoadMoreButton from "./MonsterLibrary/LoadMoreButton";
import ConteinerBox from "../UI/ConteinerBox";

import styles from "./BuildEncounter.module.css";

export default function BuildEncounter() {
  const [searchClick, setSearchClick] = useState(false);
  const [playerClick, setPlayerClick] = useState(false);
  const [playerBoxOpen, setPlayerBoxOpen] = useState(false);
  const [difficultyClick, setDifficultyClick] = useState(false);

  const switchPlayerBoxNorlamView = () => {
    setPlayerBoxOpen((current) => !current);
  };
  const openSearch = () => {
    setSearchClick(true);
  };
  const closeSearch = () => {
    setSearchClick(false);
  };
  const openPlayer = () => {
    setPlayerClick(true);
  };
  const closePlayer = () => {
    setPlayerClick(false);
  };
  const openDifficulty = () => {
    setDifficultyClick(true);
  };
  const closeDifficulty = () => {
    setDifficultyClick(false);
  };

  return (
    <GroupXpProvider>
      <MonsterXpProvider>
        {searchClick && (
          <NavigationDrawer
            className={styles.drawer__style}
            onClick={closeSearch}
          >
            <SearchWindow />
          </NavigationDrawer>
        )}
        {playerClick && (
          <NavigationDrawer
            className={styles.drawer__style}
            onClick={closePlayer}
          >
            <PlayerChoice />
          </NavigationDrawer>
        )}
        {difficultyClick && (
          <NavigationDrawer
            className={styles.drawer__style}
            onClick={closeDifficulty}
          >
            <EncounterSummary></EncounterSummary>
          </NavigationDrawer>
        )}
        <div className={styles.flex_box__style}>
          <div className={`black__background ${styles.serch_box__style}`}>
            <SearchWindow></SearchWindow>
          </div>
          <div>
            <ConteinerBox>
              <SaveEncounter />
              <button
                className={`${styles.btn__style__custom} button 
                ${playerBoxOpen ? "red" : "green"}`}
                onClick={switchPlayerBoxNorlamView}
              >
                {playerBoxOpen ? `Close` : `Open`} Player Management
              </button>
              {playerBoxOpen && (
                <div className={styles.party_setup__window}>
                  <PlayerChoice />
                </div>
              )}
            </ConteinerBox>

            <div className={styles.mobile_minimal__vue}>
              <button
                className={styles.drawer_opener__style}
                onClick={openSearch}
              >
                Search
              </button>
              <button
                className={styles.drawer_opener__style}
                onClick={openPlayer}
              >
                Players
              </button>
              <button
                className={styles.drawer_opener__style}
                onClick={openDifficulty}
              >
                Difficulty
              </button>
            </div>
            <SearchByName />
            <ConteinerBox>
              <MonsterLibrary />
            </ConteinerBox>
            <LoadMoreButton></LoadMoreButton>
          </div>
          <div
            className={`${styles.summary_general__style} ${styles.encounter__style}`}
          >
            <EncounterSummary></EncounterSummary>
          </div>
        </div>
      </MonsterXpProvider>
    </GroupXpProvider>
  );
}
