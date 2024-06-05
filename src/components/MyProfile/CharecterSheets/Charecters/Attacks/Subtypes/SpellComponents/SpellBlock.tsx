import { useState } from "react";
import SpellLevels from "./SpellLevels";
import SpellContent from "./SpellContent";

import styles from "./SpellComponents.module.css";

export default function SpellBlock() {
  const [spellLevel, setSpellLevel] = useState("Can");
  const spellLevelToDisplay = (lvl:string) => {
    setSpellLevel(lvl);
  };

  return (
    <>
      <div className={styles.spells_orientation}>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"Can"}></SpellLevels>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"1st"}></SpellLevels>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"2nd"}></SpellLevels>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"3rd"}></SpellLevels>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"4th"}></SpellLevels>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"5th"}></SpellLevels>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"6th"}></SpellLevels>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"7th"}></SpellLevels>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"8th"}></SpellLevels>
        <SpellLevels onClick={spellLevelToDisplay} lvl={"9th"}></SpellLevels>
      </div>
      <SpellContent display={spellLevel}></SpellContent>
    </>
  );
}
