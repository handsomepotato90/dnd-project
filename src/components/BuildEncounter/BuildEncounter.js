import React from "react";
import PlayerChoice from "./PlayerChoice/PlayerChoice";
import MonsterLibrary from "./MonsterLibrary/MonsterLibrary";
import EncounterSummary from "./EncounterSummary/EncounterSummary";
import styles from "./BuildEncounter.module.css";
import { GroupXpProvider } from "../store/groupXp-context";
import { MonsterXpProvider } from "../store/monsterXp-context";
import SearchWindow from "./SearchWindow/SearchWindow";
import SaveEncounter from "./SaveEncounter/SaveEncounter";
import SearchByName from "./SearchByName/SearchByName"

export default function BuildEncounter() {
  return (
    <GroupXpProvider>
      <MonsterXpProvider>
        <div className={styles.flex_box__style}>
            <SearchWindow></SearchWindow>
          <div>
            <SaveEncounter />
            <PlayerChoice />
            <SearchByName />
            <div className={styles.library__style}>
              <MonsterLibrary />
            </div>
          </div>
          <div
            className={`${styles.serch_box__style} ${styles.encounter__style}`}
          >
            <EncounterSummary></EncounterSummary>
          </div>
        </div>
      </MonsterXpProvider>
    </GroupXpProvider>
  );
}
