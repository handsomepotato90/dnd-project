import { useState } from "react";
import SpellLevels from "./SpellLevels";
import SpellContent from "./SpellContent";

import styles from "./SpellComponents.module.css";

const spellList = [
  {
    name: "Abi-Dalzim's Horrid Wilting",
    desc: "<p>You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 10d8 necrotic damage on a failed save, or half as much damage on a successful one.You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p><p>This spells damage increases by 1d6 when you reach 5th Level (2d6), 11th level (3d6) and 17th level (4d6).</p>",
    page: "ee pc 15",
    range: "150 feet",
    components: "V, S, M",
    material: "A bit of sponge.",
    ritual: "no",
    duration: "Instantaneous",
    concentration: "no",
    casting_time: "1 action",
    level: "8th-level",
    school: "Necromancy",
    class: "Sorcerer, Wizard",
  },
  {
    name: "Absorb Elements",
    desc: "<p>The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.</p>",
    higher_level:
      "<p>When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.</p>",
    page: "ee pc 15",
    range: "Self",
    components: "S",
    ritual: "no",
    duration: "1 round",
    concentration: "no",
    casting_time: "1 action",
    level: "1st-level",
    school: "Abjuration",
    class: "Druid, Ranger, Wizard",
  },
  {
    name: "Acid Splash",
    desc: "<p>You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.</p> <p>This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</p>",
    page: "phb 211",
    range: "60 feet",
    components: "V, S",
    ritual: "no",
    duration: "Instantaneous",
    concentration: "no",
    casting_time: "1 action",
    level: "Cantrip",
    school: "Conjuration",
    class: "Sorcerer, Wizard",
  },
];

export default function SpellBlock() {
  const [spellLevel, setSpellLevel] = useState("Can");
  const spellLevelToDisplay = (lvl) => {
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
      <SpellContent display={spellLevel} spellList={spellList}></SpellContent>
    </>
  );
}
