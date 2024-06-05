import React from "react";
import Difficulty from "./Difficulty";
import SelectedMonsters from "./SelectedMonsters";

const EncounterSummary: React.FC = () => {
  return (
    <>
      <Difficulty></Difficulty>
      <SelectedMonsters></SelectedMonsters>
    </>
  );
}

export default EncounterSummary;
