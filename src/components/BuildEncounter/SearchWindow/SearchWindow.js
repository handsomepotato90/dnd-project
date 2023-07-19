import React, { useState, useContext, useEffect } from "react";
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
  { value: "Bludgeoning", label: "Bludgeoning" },
  { value: "Piercing", label: "Piercing" },
  { value: "Slashing", label: "Slashing" },
  { value: "Lightning", label: "Lightning" },
  { value: "Thunder", label: "Thunder" },
  { value: "Grappled", label: "Grappled" },
  { value: "Poison", label: "Poison" },
  { value: "Cold", label: "Cold" },
  { value: "Radiant", label: "Radiant" },
  { value: "Fire", label: "Fire" },
  { value: "Necrotic", label: "Necrotic" },
  { value: "Acid", label: "Acid" },
  { value: "Psychic", label: "Psychic" },
  { value: "Force", label: "Force" },
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
      mxp.setMonsterTypeState({
        ...mxp.monsterTypes,
        [action.name]: event.value,
      });
    } else {
      mxp.monsterTypes[action.name] = [];
      Object.entries(event).forEach(([key, value]) => {
        mxp.monsterTypes[action.name].push(value.value);
      });
      mxp.setMonsterTypeState({
        ...mxp.monsterTypes,
        [action.name]: [...mxp.monsterTypes[action.name]],
      });
    }
  };
  useEffect(() => {
    const searchDb = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/build_encounter",
          "POST",
          JSON.stringify({
            rating,
            armor,
            health,
            monsterTypes: mxp.monsterTypes,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        mxp.setMonsters(resData);
      } catch (err) {}
    };
    searchDb();
  }, [sendRequest, mxp.monsterTypes, health, armor, rating]);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#151516",
    }),
    option: (provided,state) => ({
      ...provided,
      color:  state.isFocused ? 'white' : 'black'
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
  };

  return (
    <>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Monster Type</span>
        <Select
          className={styles.search_bar__stayle}
          backgroundColor="black"
          isSearchable={true}
          options={monsterType}
          isMulti
          name="types"
          onChange={getType}
          styles={customStyles}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#999",

            },
          })}
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
          styles={customStyles}
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
          styles={customStyles}
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
          styles={customStyles}
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
          styles={customStyles}
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
          styles={customStyles}
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
          styles={customStyles}
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
    </>
  );
}
