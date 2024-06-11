import React from "react";
import ComponentStats from "../ComponentStats";

const MainStats: React.FC = () => {
  return (
    <>
      <ComponentStats text={"STRENGHT"} shortHand={"Str"}></ComponentStats>
      <ComponentStats text={"DEXTERITY"} shortHand={"Dex"}></ComponentStats>
      <ComponentStats text={"CONSTITUTION"} shortHand={"Con"}></ComponentStats>
      <ComponentStats text={"INTELIGENCE"} shortHand={"Int"}></ComponentStats>
      <ComponentStats text={"WISDOM"} shortHand={"Wis"}></ComponentStats>
      <ComponentStats text={"CHARISMA"} shortHand={"Cha"}></ComponentStats>
    </>
  );
};

export default MainStats;
