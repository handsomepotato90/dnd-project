import React, { useState } from "react";

const CS = React.createContext({
  armorClass: 0,
  proficiency: 0,
  defences: "",
  conditions: "",
  classes: [],
  notes: { ORGS: [], ALLIES: [], ENEMIES: [], TOWNS: [], OTHER: [] },
  characteristics: {},
  stats: {
    Str: { value: 0, proff: false },
    Dex: { value: 0, proff: false },
    Con: { value: 0, proff: false },
    Int: { value: 0, proff: false },
    Wis: { value: 0, proff: false },
    Cha: { value: 0, proff: false },
  },
  skillsProf: {
    Acrobatics: { value: false },
    "Animal Handling": { value: false },
    Arcana: { value: false },
    Athletics: { value: false },
    Deception: { value: false },
    History: { value: false },
    Insight: { value: false },
    Intimidation: { value: false },
    Investigation: { value: false },
    Medicine: { value: false },
    Nature: { value: false },
    Perception: { value: false },
    Performance: { value: false },
    Persuasion: { value: false },
    Religion: { value: false },
    "Sleight of Hand": { value: false },
    Stealth: { value: false },
    Survival: { value: false },
  },
  backNapp: {},
  attunedItems: { first: "", second: "", third: "" },
  spellMods: { Modifire: 0, "Spell Attack": 0, "Save DC": 0 },
  currency: { PP: 0, GP: 0, EP: 0, SP: 0, CP: 0 },
  weapons: [{ type: "", range: "", hit: 0, damage: "" }],
  inventory: "",
  newClass: () => {},
  newNote: () => {},
  backNApp: () => {},
  charData: () => {},
  otherInventory: () => {},
  attuneItem: () => {},
  currencyValue: () => {},
  spellmods: () => {},
  addWeapons: () => {},
  proff: () => {},
  savingThrows: () => {},
  proficiencySet: () => {},
  setingSkills: () => {},
  armorClassSetter: () => {},
});

export const CSProvider = (props) => {
  const [armorClass, setArmorClass] = useState(0);
  const [proficiency, setPorficincy] = useState(0);
  const [defenses, setDefenses] = useState("");
  const [conditions, setConditions] = useState(0);
  const [stats, setStats] = useState({});
  const [weapons, setWeapons] = useState([]);
  const [classes, setClasses] = useState([]);
  const [notes, setNotes] = useState({
    ORGS: [],
    ALLIES: [
      {
        _id: "#OHD&*(@YE!@I#",
        title: "My Friend",
        value: "some Strange text that a PC addet",
        time: "2.11.2023 16:03",
      },
      {
        _id: "#5436@YE!@I#",
        title: "My Friend second",
        value: "some Strange text that a PC addet",
        time: "2.11.2023 16:03",
      },
    ],
    ENEMIES: [
      {
        _id: "#5451255!@I#",
        title: "My Enemy",
        value: "some Strange text that a PC addet",
        time: "2.11.2023 16:03",
      },
    ],
    TOWNS: [],
    OTHER: [],
  });
  const [inventory, setInventory] = useState("");
  const [backNapp, setBackNapp] = useState({ BACKGROUND: "", APPEARANCE: "" });
  const [characteristics, setCharacteristics] = useState({
    ALIGNMENT: "-",
    GENDER: "-",
    EYES: "-",
    SIZE: "-",
    HEIGHT: "-",
    FAITH: "-",
    HAIR: "-",
    SKIN: "-",
    AGE: "-",
    WEIGHT: "-",
  });
  const [attunedItems, setAttunedItems] = useState({
    first: "",
    second: "",
    third: "",
  });
  const [currency, setCurrency] = useState({
    PP: 0,
    GP: 0,
    EP: 0,
    SP: 0,
    CP: 0,
  });
  const [spellMods, setSpellMods] = useState({
    MODIFIER: 0,
    "SPELL ATTACK": 0,
    "SAVE DC": 0,
  });
  const [skills, setSkills] = useState({
    Acrobatics: { value: false },
    "Animal Handling": { value: false },
    Arcana: { value: false },
    Athletics: { value: false },
    Deception: { value: false },
    History: { value: false },
    Insight: { value: false },
    Intimidation: { value: false },
    Investigation: { value: true },
    Medicine: { value: false },
    Nature: { value: false },
    Perception: { value: false },
    Performance: { value: false },
    Persuasion: { value: false },
    Religion: { value: false },
    "Sleight of Hand": { value: false },
    Stealth: { value: false },
    Survival: { value: false },
  });

  // ############################ Functions ##############################
  const newClass = (cl, lvl) => {
    if (classes.length === 0) {
      setClasses([...classes, { class: cl, level: lvl }]);
      return;
    }
    for (let i = 0; i < classes.length; i++) {
      const element = classes[i];
      if (element.class === cl) {
        classes.splice(i, 1);
        setClasses([...classes, { class: cl, level: lvl }]);
      } else {
        setClasses([...classes, { class: cl, level: lvl }]);
      }
    }
  };
  const backNApp = (title, text) => {
    backNapp[title] = text;
    setBackNapp(backNapp);
  };
  const charData = (char, value) => {
    characteristics[char] = value;
    setCharacteristics(characteristics);
  };
  const otherInventory = (text) => {
    setInventory(text);
  };
  const attuneItem = (number, item) => {
    attunedItems[number] = item;
    setAttunedItems(attunedItems);
  };
  const currencyValue = (curr, value) => {
    currency[curr] = value;
    setCurrency(currency);
  };
  const spellmods = (mod, value) => {
    spellMods[mod] = value;
    setSpellMods(spellMods);
  };
  const addWeapons = (type, range, hit, damage) => {
    setWeapons([
      ...weapons,
      { type: type, range: range, hit: hit, damage: damage },
    ]);
  };
  const newNote = (types, section, title, value, time, id) => {
    if (types === "DELETE") {
      for (let i = 0; i < notes[section].length; i++) {
        const element = notes[section][i];
        if (element._id === id) {
          notes[section].splice(i, 1);
        }
      }
      setNotes((prevState) => ({
        ...prevState,
        [section]: [...notes[section]],
      }));
    }
    if (types === "UPDATE") {
      for (let i = 0; i < notes[section].length; i++) {
        const element = notes[section][i];
        if (element._id === id) {
          notes[section].splice(i, 1);
        }
      }
      notes[section] = [
        ...notes[section],
        { _id: id, title: title, value: value, time: time },
      ];
      setNotes((prevState) => ({
        ...prevState,
        [section]: [...notes[section]],
      }));
    }
    if (types === "ADD") {
      console.log(id);
      let obj = [
        ...notes[section],
        { _id: id, title: title, value: value, time: time },
      ];
      setNotes((prevState) => ({ ...prevState, [section]: [...obj] }));
    }
  };
  const defencesSetter = (def) => {
    setDefenses(def);
  };
  const conditionsSetter = (con) => {
    setConditions(con);
  };
  const armorClassSetter = (ac) => {
    setArmorClass(ac);
  };
  const proff = (p) => {
    setPorficincy(p);
  };
  const setingSkills = (text, status) => {
    skills[text] = { value: status };
    setSkills(skills);
  };

  const savingThrows = (text, stat, proff) => {
    stats[text] = { value: stat, proff: proff };
    setStats(stats);
  };
  const proficiencySet = (text, status) => {
    stats[text] = { value: stats[text].value, proff: status };
    setStats(stats);
  };
  return (
    <CS.Provider
      value={{
        proficiency: proficiency,
        stats: stats,
        skillsProf: skills,
        armorClass: armorClass,
        defences: defenses,
        conditions: conditions,
        weapons: weapons,
        spellMods: spellMods,
        currency: currency,
        attunedItems: attunedItems,
        inventory: inventory,
        characteristics: characteristics,
        backNapp: backNapp,
        notes: notes,
        classes: classes,
        newClass: newClass,
        newNote: newNote,
        backNApp: backNApp,
        charData: charData,
        otherInventory: otherInventory,
        attuneItem: attuneItem,
        currencyValue: currencyValue,
        addWeapons: addWeapons,
        spellmods: spellmods,
        proff: proff,
        savingThrows: savingThrows,
        proficiencySet: proficiencySet,
        setingSkills: setingSkills,
        armorClassSetter: armorClassSetter,
        defencesSetter: defencesSetter,
        conditionsSetter: conditionsSetter,
      }}
    >
      {" "}
      {props.children}
    </CS.Provider>
  );
};

export default CS;
