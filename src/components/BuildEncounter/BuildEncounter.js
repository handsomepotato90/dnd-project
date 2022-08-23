import React from "react";
import PlayerChoice from "./PlayerChoice/PlayerChoice";
import MonsterLibrary from "./MonsterLibrary/MonsterLibrary";
import EncounterSummary from "./EncounterSummary/EncounterSummary";
import styles from "./BuildEncounter.module.css";
import { GroupXpProvider } from "../store/groupXp-context";

export default function BuildEncounter() {
  return (
    <GroupXpProvider >
      <div className={styles.flex_box__style}>
        <div className={styles.serch_box__style}></div>
        <div>
          <PlayerChoice />
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
    </GroupXpProvider>
  );
}
