import { useState, useContext } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import InputRange from "react-input-range";
import { useHttpClient } from "../../hooks/http-hook";
import MonsterXp from "../../store/monsterXp-context";
import jsonObject from "./searchebles.json";
import { CSSProperties } from 'react';

import styles from "./SearchWindow.module.css";
import "react-input-range/lib/css/index.css";

interface CustomStyles {
  [key: string]: (base: CSSProperties, state: any) => CSSProperties;
}

interface RatingArmorHealth {
  min: number;
  max: number;
}

interface Events {
  value: boolean | "Any";
  label: "Yes" | "No" | "Any";
}

interface SelectOption {
  value: string;
  label: string;
}

const SearchWindow = (): JSX.Element => {
  const [rating, ratingHandler] = useState<RatingArmorHealth>({ min: 0, max: 30 });
  const [armor, armorHandler] = useState<RatingArmorHealth>({ min: 0, max: 50 });
  const [health, healthHandler] = useState<RatingArmorHealth>({ min: 0, max: 1500 });
  const mxp = useContext(MonsterXp);

  const { sendRequest } = useHttpClient();

  const newRating = (value: RatingArmorHealth) => {
    ratingHandler({ min: value.min, max: value.max });
  };
  const newArmor = (value: RatingArmorHealth) => {
    armorHandler({ min: value.min, max: value.max });
  };
  const newHealth = (value: RatingArmorHealth) => {
    healthHandler({ min: value.min, max: value.max });
  };

  const isLegendary = (newValue: SingleValue<Events>) => {
    if (newValue) {
      mxp.setMonsterTypeState({
        ...mxp.monsterTypes,
        legendary: newValue.value,
      });
    }
  };

  const getType = (newValue: MultiValue<SelectOption>, name: string) => {
    if (name) {
      const updatedMonsterTypes = {
        ...mxp.monsterTypes,
        [name]: newValue.map(option => option.value)
      };
      mxp.setMonsterTypeState(updatedMonsterTypes);
    }
  };

  const searchDatabase = async () => {
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
    } catch (err) { }
  };

  const customStyles: CustomStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#151516",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? 'white' : 'black'
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
          isSearchable={true}
          options={jsonObject.monsterType}
          isMulti
          name="types"
          onChange={(newValue, actionMeta) => {
            if (actionMeta.name) {
              getType(newValue, actionMeta.name);
            }
          }}
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
          options={jsonObject.alignment}
          isMulti
          name="alignment"
          onChange={(newValue, actionMeta) => {
            if (actionMeta.name) {
              getType(newValue, actionMeta.name);
            }
          }}
          styles={customStyles}
        ></Select>
      </div>

      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Condition Immunity</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={jsonObject.condition}
          isMulti
          name="condition"
          onChange={(newValue, actionMeta) => {
            if (actionMeta.name) {
              getType(newValue, actionMeta.name);
            }
          }}
          styles={customStyles}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Damage Immunity</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={jsonObject.damageIm}
          isMulti
          name="damage"
          onChange={(newValue, actionMeta) => {
            if (actionMeta.name) {
              getType(newValue, actionMeta.name);
            }
          }}
          styles={customStyles}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Is Legendary</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={jsonObject.legendary}
          name="legendary"
          defaultValue={[jsonObject.legendary[0]]}
          onChange={(newValue) => isLegendary(newValue as SingleValue<Events>)}
          styles={customStyles}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Resistance</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={jsonObject.damageIm}
          isMulti
          name="resistance"
          onChange={(newValue, actionMeta) => {
            if (actionMeta.name) {
              getType(newValue, actionMeta.name);
            }
          }}
          styles={customStyles}
        ></Select>
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Vulnerability</span>
        <Select
          className={styles.search_bar__stayle}
          isSearchable={true}
          options={jsonObject.damageIm}
          isMulti
          name="vulnerability"
          onChange={(newValue, actionMeta) => {
            if (actionMeta.name) {
              getType(newValue, actionMeta.name);
            }
          }}
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
          onChange={(value) => newRating(value as RatingArmorHealth)}
        />
      </div>
      <div className={styles.gerenl_scroll__style}>
        <span className={styles.text__style}>Armor Class</span>
        <InputRange
          disabled={false}
          maxValue={50}
          minValue={0}
          value={armor}
          onChange={(value) => newArmor(value as RatingArmorHealth)}
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
          onChange={(value) => newHealth(value as RatingArmorHealth)}
        />
      </div>
      <button className={`${styles.search_btn_style} button green`} onClick={searchDatabase}> Search </button>
    </>
  );
};

export default SearchWindow;
