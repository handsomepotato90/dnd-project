import React, { useState } from "react";
import Select from "react-select";
import styles from "./SearchWindow.module.css";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const monsterType = [
  { value: "aberration", label: "Aberration" },
  { value: "beast", label: "Beast" },
  { value: "celestial", label: "Celestial" },
  { value: "construct", label: "Construct" },
  { value: "dragon", label: "Dragon" },
  { value: "elemental", label: "Elemental" },
  { value: "fey", label: "Fey" },
  { value: "fiend", label: "Fiend" },
  { value: "giant", label: "Giant" },
  { value: "humanoid", label: "Humanoid" },
  { value: "monstrosity", label: "Monstrosity" },
  { value: "ooze", label: "Ooze" },
  { value: "plant", label: "Plant" },
  { value: "undead", label: "Undead" },
];
const alignment = [
  { value: "lawful good", label: "Lawful Good" },
  { value: "neutral good", label: "Neutral Good" },
  { value: "chaotic good", label: "Chaotic Good" },
  { value: "lawful neutral", label: "Lawful Neutral" },
  { value: "neutral", label: "Neutral" },
  { value: "chaotic neutral", label: "Chaotic Neutral" },
  { value: "lawful evil", label: "Lawful Evil" },
  { value: "neutral evil", label: "Neutral Evil" },
  { value: "chaotic evil", label: "Chaotic Evil" },
  { value: "unaligned", label: "Unaligned" },
  { value: "any evil alighnment", label: "Any Evil Alighnment" },
  { value: "any good alighnment", label: "Any Good Alighnment" },
  { value: "any chaotic alighnment", label: "Any Vhaotic Alighnment" },
  { value: "any lawful alighnment", label: "Any Lawful Alighnment" },
  { value: "any", label: "Any" },
];
const condition = [
  { value: "blinded", label: "Blinded" },
  { value: "charmed", label: "Charmed" },
  { value: "deafened", label: "Deafened" },
  { value: "exhaustion", label: "Exhaustion" },
  { value: "frightened", label: "Frightened" },
  { value: "grappled", label: "Grappled" },
  { value: "incapacitated", label: "Incapacitated" },
  { value: "invisible", label: "Invisible" },
  { value: "paralyzed", label: "Paralyzed" },
  { value: "petrified", label: "Petrified" },
  { value: "poisoned", label: "Poisoned" },
  { value: "prone", label: "Prone" },
  { value: "restrained", label: "Restrained" },
  { value: "stunned", label: "Stunned" },
  { value: "unconscious", label: "Unconscious" },
];
const damageIm = [
  { value: "bludgeoning", label: "Bludgeoning" },
  { value: "piercing", label: "Piercing" },
  { value: "slashing", label: "Slashing" },
  { value: "lightning", label: "Lightning" },
  { value: "thunder", label: "Thunder" },
  { value: "grappled", label: "Grappled" },
  { value: "poison", label: "Poison" },
  { value: "cold", label: "Cold" },
  { value: "radiant", label: "Radiant" },
  { value: "fire", label: "Fire" },
  { value: "necrotic", label: "Necrotic" },
  { value: "acid", label: "Acid" },
  { value: "psychic", label: "Psychic" },
  { value: "force", label: "Force" },
];
const legendary = [
  { value: "yes", label: "YES" },
  { value: "no", label: "NO" },
];
export default function SearchWindow() {
  const [rating, ratingHandler] = useState({ min: 0, max: 30 });
  const [armor, armorHandler] = useState({ min: 0, max: 50 });
  const [health, healthHandler] = useState({ min: 0, max: 2000 });
  let [monsterTypes,setMonsterTypeState] = useState([]);

  const newRating = (value) => {
    ratingHandler({ min: value.value.min, max: value.value.max });
  };
  const newArmor = (value) => {
    armorHandler({ min: value.value.min, max: value.value.max });
  };
  const newHealth = (value) => {
    healthHandler({ min: value.value.min, max: value.value.max });
  };

 const getType = (event) =>{
    monsterTypes=[];
    for (const key in event) {
        monsterTypes.push(event[key].value)
        setMonsterTypeState([...monsterTypes])
    }
 }
 console.log(monsterTypes)

  return (
    <>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Monster Type</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={monsterType}
          isMulti
          onChange={getType}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Alignment</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={alignment}
          isMulti
        ></Select>
      </div>

      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Condition Immunity</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={condition}
          isMulti
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Damage Immunity</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={damageIm}
          isMulti
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Is Legendary</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={legendary}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Resistance</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={damageIm}
          isMulti
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Vulnerability</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={damageIm}
          isMulti
        ></Select>
      </div>

      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Challenge Rating</span>
        <InputRange
          disabled={false}
          maxValue={30}
          minValue={0}
          value={rating}
          onChange={(value) => newRating({ value })}
        />
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Armor Class</span>
        <InputRange
          disabled={false}
          maxValue={50}
          minValue={0}
          value={armor}
          onChange={(value) => newArmor({ value })}
        />
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Average HP</span>
        <InputRange
          disabled={false}
          maxValue={2000}
          minValue={0}
          step={5}
          value={health}
          onChange={(value) => newHealth({ value })}
        />
      </div>
      <button className={styles.search_btn_style}> Apply Search</button>
    </>
  );
}
