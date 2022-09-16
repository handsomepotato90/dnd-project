import React, { useState, useContext } from "react";
import Select from "react-select";
import styles from "./SearchWindow.module.css";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useHttpClient } from "../../hooks/http-hook";
import MonsterXp from "../../store/monsterXp-context";

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
  { value: "evil", label: "Any Evil Alighnment" },
  { value: "good", label: "Any Good Alighnment" },
  { value: "chaotic", label: "Any Chaotic Alighnment" },
  { value: "lawful", label: "Any Lawful Alighnment" },
  { value: "any", label: "Any" },
];
const condition = [
  { value: "Blinded", label: "Blinded" },
  { value: "Charmed", label: "Charmed" },
  { value: "Deafened", label: "Deafened" },
  { value: "Exhaustion", label: "Exhaustion" },
  { value: "Frightened", label: "Frightened" },
  { value: "Grappled", label: "Grappled" },
  { value: "Incapacitated", label: "Incapacitated" },
  { value: "Invisible", label: "Invisible" },
  { value: "Paralyzed", label: "Paralyzed" },
  { value: "Petrified", label: "Petrified" },
  { value: "Poisoned", label: "Poisoned" },
  { value: "Prone", label: "Prone" },
  { value: "Restrained", label: "Restrained" },
  { value: "Stunned", label: "Stunned" },
  { value: "Unconscious", label: "Unconscious" },
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
  { value: "Any", label: "Any" },
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];
export default function SearchWindow() {
  const [rating, ratingHandler] = useState({ min: 0, max: 30 });
  const [armor, armorHandler] = useState({ min: 0, max: 50 });
  const [health, healthHandler] = useState({ min: 0, max: 1500 });
  const mxp = useContext(MonsterXp);
  const [monsterTypes, setMonsterTypeState] = useState({
    types: [],
    alignment: [],
    condition: [],
    damage: [],
    legendary: 'Any',
    resistance: [],
    vulnerability: [],
  });
  const { sendRequest } = useHttpClient();

  const newRating = (value) => {
    ratingHandler({ min: value.value.min, max: value.value.max });
  };
  const newArmor = (value) => {
    armorHandler({ min: value.value.min, max: value.value.max });
  };
  const newHealth = (value) => {
    healthHandler({ min: value.value.min, max: value.value.max });
  };
  const getType = (event, action) => {
    if (action.name === "legendary") {
      setMonsterTypeState({ ...monsterTypes, [action.name]: event.value });
    } else {
      monsterTypes[action.name] = [];
      Object.entries(event).forEach(([key, value]) => {
        monsterTypes[action.name].push(value.value);
      });
      setMonsterTypeState({
        ...monsterTypes,
        [action.name]: [...monsterTypes[action.name]],
      });
    }
  };
  const searchDb = async () => {
    try {
      const resData = await sendRequest(
        "http://localhost:5000/build_encounter",
        "POST",
        JSON.stringify({
          rating,
          armor,
          health,
          monsterTypes,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(mxp.monsters);
      mxp.setMonsters(resData);
    } catch (err) {}
  };

  return (
    <>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Monster Type</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={monsterType}
          isMulti
          name="types"
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
          name="alignment"
          onChange={getType}
        ></Select>
      </div>

      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Condition Immunity</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={condition}
          isMulti
          name="condition"
          onChange={getType}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Damage Immunity</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={damageIm}
          isMulti
          name="damage"
          onChange={getType}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Is Legendary</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={legendary}
          name="legendary"
          defaultValue={[legendary[0]]}
          onChange={getType}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Resistance</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={damageIm}
          isMulti
          name="resistance"
          onChange={getType}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Vulnerability</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={damageIm}
          isMulti
          name="vulnerability"
          onChange={getType}
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
          maxValue={1500}
          minValue={0}
          step={5}
          value={health}
          onChange={(value) => newHealth({ value })}
        />
      </div>
      <button className={styles.search_btn_style} onClick={searchDb}>
        {" "}
        Apply Search
      </button>
    </>
  );
}
