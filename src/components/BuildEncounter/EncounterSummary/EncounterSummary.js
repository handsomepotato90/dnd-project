import React from "react";
import Difficulty from "./Difficulty";
import SelectedMonsters from "./SelectedMonsters";
import style from "./EncounterSummary.module.css";

export default function EncounterSummary() {
  return (
    <div className={style.summary_general__style}>
      <Difficulty></Difficulty>
      <SelectedMonsters></SelectedMonsters>
    </div>
  );
}
