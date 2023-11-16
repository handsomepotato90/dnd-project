import React, { useState } from "react";

const CS = React.createContext({
  armorClass: 0,
  proficiency: 0,
  maxHp: 0,
  defences: "",
  conditions: "",
  classes: [],
  meta: [{ name: "", bg: "", al: "" }],
  healForHitDie: { value: 0, is: false },
  notes: { ORGS: [], ALLIES: [], ENEMIES: [], TOWNS: [], OTHER: [] },
  characteristics: {},
  stats: {},
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
  fullHeal: false,
  speed: 0,
  otherProficiency: {},
  spells: {},
  spellSetter: () => {},
  setOtherProficiency: () => {},
  metaSetter: () => {},
  maxHpSetter: () => {},
  setSpeed: () => {},
  statsSetter: () => {},
  logRestNow: () => {},
  healFor: () => {},
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
  const CSheet = JSON.parse(localStorage.getItem("charSheet"));
  const [armorClass, setArmorClass] = useState(
    CSheet ? parseInt(CSheet.AC) : 0
  );
  const [proficiency, setPorficincy] = useState(
    CSheet ? parseInt(CSheet.proficiency) : 0
  );
  const [defenses, setDefenses] = useState(
    CSheet?.defences ? CSheet.defences : ""
  );
  const [conditions, setConditions] = useState(
    CSheet?.conditions ? CSheet.conditions : ""
  );
  const [speed, setErSpeed] = useState(
    CSheet?.speed ? parseInt(CSheet.speed) : 0
  );
  const [maxHp, setMaxHp] = useState(
    CSheet?.hp_max ? parseInt(CSheet.hp_max) : 0
  );
  const [meta, setMeta] = useState(
    CSheet
      ? CSheet.meta
      : {
          name: "Name",
          bg: "Background",
          al: "Alignment",
        }
  );
  const [stats, setStats] = useState(
    CSheet
      ? CSheet.stats
      : {
          Str: { value: 10, modifire: 0, proff: false },
          Dex: { value: 10, modifire: 0, proff: false },
          Con: { value: 10, modifire: 0, proff: false },
          Int: { value: 10, modifire: 0, proff: false },
          Wis: { value: 10, modifire: 0, proff: false },
          Cha: { value: 10, modifire: 0, proff: false },
        }
  );
  const [weapons, setWeapons] = useState(CSheet?.weapons ? CSheet.weapons : []);
  const [classes, setClasses] = useState(CSheet ? CSheet.classes : []);
  const [healForHitDie, setHealForHitDie] = useState({});
  const [fullHeal, setFullHeal] = useState(false);
  const [notes, setNotes] = useState(
    CSheet?.notes
      ? CSheet.notes
      : {
          ORGS: [],
          ALLIES: [],
          ENEMIES: [],
          TOWNS: [],
          OTHER: [],
        }
  );
  const [inventory, setInventory] = useState(
    CSheet?.inventory ? CSheet.inventory : ""
  );
  const [backNapp, setBackNapp] = useState(
    CSheet?.background_appearance
      ? CSheet.background_appearance
      : { BACKGROUND: "", APPEARANCE: "" }
  );
  const [characteristics, setCharacteristics] = useState(
    CSheet?.characteristics
      ? CSheet.characteristics
      : {
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
        }
  );
  const [attunedItems, setAttunedItems] = useState(
    CSheet?.attuned_items
      ? CSheet.attuned_items
      : {
          first: "",
          second: "",
          third: "",
        }
  );
  const [currency, setCurrency] = useState(
    CSheet?.currency
      ? CSheet.currency
      : {
          PP: 0,
          GP: 0,
          EP: 0,
          SP: 0,
          CP: 0,
        }
  );
  const [spellMods, setSpellMods] = useState(
    CSheet?.spell_mod
      ? CSheet.spell_mod
      : {
          MODIFIER: 0,
          "SPELL ATTACK": 0,
          "SAVE DC": 0,
        }
  );
  const [skills, setSkills] = useState(
    CSheet
      ? CSheet.skills
      : {
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
        }
  );
  const [otherProficiency, setProficiency] = useState(
    CSheet?.otherProff
      ? CSheet.otherProff
      : {
          ARMOUR: "NONE",
          WEAPONS: "NONE",
          TOOLS: "NONE",
          LANGUAGES: "NONE",
        }
  );
  const [spells, setSpells] = useState(
    CSheet?.spells
      ? CSheet.spells
      : {
          "1st": { slots: 0, spells: [], spell_ids: [] },
          "2nd": { slots: 0, spells: [], spell_ids: [] },
          "3rd": { slots: 0, spells: [], spell_ids: [] },
          "4th": { slots: 0, spells: [], spell_ids: [] },
          "5th": { slots: 0, spells: [], spell_ids: [] },
          "6th": { slots: 0, spells: [], spell_ids: [] },
          "7th": { slots: 0, spells: [], spell_ids: [] },
          "8th": { slots: 0, spells: [], spell_ids: [] },
          "9th": { slots: 0, spells: [], spell_ids: [] },
          Can: { slots: 0, spells: [], spell_ids: [] },
        }
  );

  // ############################ Functions ##############################
  const removeSpell = (id, spell, lvl) => {
    const indexOfId = spells[lvl].spell_ids.indexOf(id);
    const indexOfSpell = spells[lvl].spells.indexOf(spell);
    if (indexOfId > -1) {
      spells[lvl].spell_ids.splice(indexOfId, 1);
    }
    if (indexOfSpell > -1) {
      spells[lvl].spells.splice(indexOfSpell, 1);
    }
    setSpells(spells);
  };
  const addSpells = (level, spell) => {
    let lvl;
    switch (level) {
      case 0:
        lvl = "Can";
        break;
      case 1:
        lvl = `1st`;
        break;
      case 2:
        lvl = `2nd`;
        break;
      case 3:
        lvl = `3rd`;
        break;
      default:
        lvl = `${level}th`;
    }
    spells[lvl].spells.push(spell);
    spells[lvl].spell_ids.push(spell._id);
    setSpells(spells, spells[lvl]);
  };
  const spellSetter = (val, acc) => {
    if (acc === "add") {
      spells[val].slots = spells[val].slots + 1;
      setSpells(spells, spells[val]);
    }
    if (acc === "remove") {
      spells[val].slots = spells[val].slots - 1;
      setSpells(spells, spells[val]);
    }
  };
  const setOtherProficiency = (key, value) => {
    otherProficiency[key] = value;
    setProficiency(otherProficiency);
  };
  const metaSetter = (name, val) => {
    meta[name] = val;

    setMeta(meta);
  };
  const maxHpSetter = (hp) => {
    setMaxHp(hp);
  };

  const setSpeed = (s) => {
    setErSpeed(s);
  };
  const healingDone = () => {
    setFullHeal(false);
  };
  const logRestNow = () => {
    const newArray = [];
    for (let i = 0; i < classes.length; i++) {
      const element = classes[i];
      element.hitDie = element.level;
      newArray.push(element);
    }
    setFullHeal(true);
    setClasses([...newArray]);
  };
  const healFor = (cl, hitDie, heal) => {
    for (let i = 0; i < classes.length; i++) {
      const element = classes[i];
      if (element.class === cl) {
        element.hitDie = hitDie;
        const newArray = classes;
        setClasses([...newArray]);
        setHealForHitDie({ value: heal, is: true });
      }
    }
  };
  const newClass = (cl, lvl) => {
    if (classes.length === 0) {
      setClasses([...classes, { class: cl, level: lvl, hitDie: lvl }]);
      return;
    }
    for (let i = 0; i < classes.length; i++) {
      const element = classes[i];
      if (element.class === cl) {
        classes.splice(i, 1);
        setClasses([...classes, { class: cl, level: lvl, hitDie: lvl }]);
      } else {
        setClasses([...classes, { class: cl, level: lvl, hitDie: lvl }]);
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
    setSkills({ ...skills });
  };
  const statsSetter = (text, stat, mod) => {
    stats[text] = { value: stat, modifire: mod, proff: stats[text].proff };
    setStats({ ...stats });
  };

  const savingThrows = (text, stat, proff) => {
    stats[text] = { value: stat, proff: proff };
    setStats(stats);
  };
  const proficiencySet = (text, status) => {
    stats[text] = {
      value: stats[text].value,
      modifire: stats[text].modifire,
      proff: status,
    };
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
        healForHitDie: healForHitDie,
        fullHeal: fullHeal,
        speed: speed,
        maxHp: maxHp,
        meta: meta,
        otherProficiency: otherProficiency,
        spells: spells,
        removeSpell: removeSpell,
        addSpells: addSpells,
        spellSetter: spellSetter,
        setOtherProficiency: setOtherProficiency,
        metaSetter: metaSetter,
        maxHpSetter: maxHpSetter,
        setSpeed: setSpeed,
        statsSetter: statsSetter,
        healingDone: healingDone,
        logRestNow: logRestNow,
        healFor: healFor,
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
