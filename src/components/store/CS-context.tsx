import React, { ReactNode, useState } from "react";
import Spell from "../types/SpellsTypes";
import CSContextProps, {
  Notes as Note,
  Meta,
  CharacterDefault,
} from "../types/CSTypes";

const CS = React.createContext<CSContextProps>({
  AC: "",
  creator: "",
  background_appearance: { title: "", text: "" },
  conditions: "",
  defences: "",
  attuned_items: { first: "", second: "", third: "" },
  characteristics: {
    AGE: "",
    ALIGNMENT: "",
    EYES: "",
    FAITH: "",
    GENDER: "",
    HAIR: "",
    HEIGHT: "",
    SIZE: "",
    SKIN: "",
    WEIGHT: "",
  },
  classes: [],
  currency: { PP: "0", GP: "0", EP: "0", SP: "0", CP: "0" },
  inventory: "",
  hp_max: 0,
  meta: { name: "", bg: "", al: "" },
  notes: { ORGS: [], ALLIES: [], ENEMIES: [], TOWNS: [], OTHER: [] },
  proficiency: "0",
  skills: {
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
  speed: "0",
  spell_mod: { MODIFIER: "0", "SPELL ATTACK": "0", "SAVE DC": "0" },
  stats: {
    Cha: { value: 0, modifire: 0, proff: false },
    Con: { value: 0, modifire: 0, proff: false },
    Dex: { value: 0, modifire: 0, proff: false },
    Int: { value: 0, modifire: 0, proff: false },
    Str: { value: 0, modifire: 0, proff: false },
    Wis: { value: 0, modifire: 0, proff: false },
  },
  otherProff: { ARMOUR: "", LANGUAGES: "", TOOLS: "", WEAPONS: "" },
  weapons: [],
  spells: {
    "1st": { slots: 0, spell_ids: [], spells: [] },
    "2nd": { slots: 0, spell_ids: [], spells: [] },
    "3rd": { slots: 0, spell_ids: [], spells: [] },
    "4th": { slots: 0, spell_ids: [], spells: [] },
    "5th": { slots: 0, spell_ids: [], spells: [] },
    "6th": { slots: 0, spell_ids: [], spells: [] },
    "7th": { slots: 0, spell_ids: [], spells: [] },
    "8th": { slots: 0, spell_ids: [], spells: [] },
    "9th": { slots: 0, spell_ids: [], spells: [] },
    Can: { slots: 0, spell_ids: [], spells: [] },
  },
  xp: 0,
  currHp: 0,
  tempHp: 0,
  inspiration: "0",
  specialStat: 0,
  specialName: "",
  xpSetter: () => {},
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
  currentHpSetter: () => {},
  tempHpSetter: () => {},
  setSpecialStat: () => {},
  setSpecialName: () => {},
  setInspiration: () => {},
  setWeapons: () => {},
  removeSpell: () => {},
  addSpells: () => {},
  healingDone: () => {},
  defencesSetter: () => {},
  conditionsSetter: () => {},
  healForHitDie: {
    value: 0,
    is: false,
  },
  fullHeal: false,
});

interface Notes {
  [key: string]: Note[];
  ORGS: Note[];
  ALLIES: Note[];
  ENEMIES: Note[];
  TOWNS: Note[];
  OTHER: Note[];
}

interface Weapon {
  type: string;
  range: string;
  hit: string;
  damage: string;
}

interface Character {
  class: string;
  level: number;
  hitDie: number;
}

export const CSProvider = ({ children }: { children: ReactNode }) => {
  const name = window.location.href.split("/Charecters/")[1];
  const CSheets = JSON.parse(localStorage?.getItem("charSheets") ?? "false");
  let CSheet: CharacterDefault = {
    AC: "0",
    creator: "",
    background_appearance: { title: "", text: "" },
    conditions: "",
    defences: "",
    attuned_items: { first: "", second: "", third: "" },
    characteristics: {
      AGE: "-",
      ALIGNMENT: "-",
      EYES: "-",
      FAITH: "-",
      GENDER: "-",
      HAIR: "-",
      HEIGHT: "-",
      SIZE: "-",
      SKIN: "-",
      WEIGHT: "-",
    },
    classes: [],
    currency: { PP: "0", GP: "0", EP: "0", SP: "0", CP: "0" },
    inventory: "",
    hp_max: "0",
    meta: { name: "NAME", bg: "Background", al: "Alignment" },
    notes: { ORGS: [], ALLIES: [], ENEMIES: [], TOWNS: [], OTHER: [] },
    proficiency: "0",
    skills: {
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
    speed: "0",
    spell_mod: { MODIFIER: "0", "SPELL ATTACK": "0", "SAVE DC": "0" },
    stats: {
      Cha: { value: 0, modifire: 0, proff: false },
      Con: { value: 0, modifire: 0, proff: false },
      Dex: { value: 0, modifire: 0, proff: false },
      Int: { value: 0, modifire: 0, proff: false },
      Str: { value: 0, modifire: 0, proff: false },
      Wis: { value: 0, modifire: 0, proff: false },
    },
    otherProff: {
      ARMOUR: "NONE",
      LANGUAGES: "NONE",
      TOOLS: "NONE",
      WEAPONS: "NONE",
    },
    weapons: [],
    spells: {
      "1st": { slots: 0, spell_ids: [], spells: [] },
      "2nd": { slots: 0, spell_ids: [], spells: [] },
      "3rd": { slots: 0, spell_ids: [], spells: [] },
      "4th": { slots: 0, spell_ids: [], spells: [] },
      "5th": { slots: 0, spell_ids: [], spells: [] },
      "6th": { slots: 0, spell_ids: [], spells: [] },
      "7th": { slots: 0, spell_ids: [], spells: [] },
      "8th": { slots: 0, spell_ids: [], spells: [] },
      "9th": { slots: 0, spell_ids: [], spells: [] },
      Can: { slots: 0, spell_ids: [], spells: [] },
    },
    xp: 0,
    currHp: 0,
    tempHp: 0,
    inspiration: "0",
    specialStat: 0,
    specialName: "Special Res",
    healForHitDie: {
      value: 0,
      is: false,
    },
    fullHeal: false,
  };

  if (name && CSheets) {
    const foundSheet = CSheets.find(
      (e: CSContextProps) => e.meta.name === name.replace(/%20/g, " ")
    );
    if (foundSheet) {
      CSheet = foundSheet;
    }
  }

  const [armorClass, setArmorClass] = useState<string>(CSheet.AC);
  const [fullHeal, setFullHeal] = useState<boolean>(false);
  const [proficiency, setPorficincy] = useState<string>(CSheet.proficiency);
  const [defenses, setDefenses] = useState<string>(CSheet.defences);
  const [conditions, setConditions] = useState<string>(CSheet.conditions);
  const [speed, setErSpeed] = useState<string>(CSheet.speed);
  const [currHp, setCurrHp] = useState<number>(CSheet.currHp);
  const [tempHp, setTempHp] = useState<number>(CSheet.tempHp);
  const [maxHp, setMaxHp] = useState<number>(parseInt(CSheet.hp_max));
  const [meta, setMeta] = useState<Meta>(CSheet.meta);
  const [stats, setStats] = useState<
    Record<string, { value: number; modifire?: number; proff: boolean }>
  >(CSheet.stats);
  const [weapons, setWeapons] = useState<Weapon[]>(CSheet.weapons);
  const [healForHitDie, setHealForHitDie] = useState<{
    value: number;
    is: boolean;
  }>({ value: 0, is: false });
  const [notes, setNotes] = useState<Notes>(CSheet.notes);
  const [inventory, setInventory] = useState<string>(CSheet.inventory);
  const [backNapp, setBackNapp] = useState<Record<string, string>>(
    CSheet.background_appearance
  );

  const [characteristics, setCharacteristics] = useState<
    Record<string, string>
  >(CSheet?.characteristics);

  const [attunedItems, setAttunedItems] = useState<{
    first: string;
    second: string;
    third: string;
  }>({
    first: "",
    second: "",
    third: "",
  });

  const [currency, setCurrency] = useState<Record<string, string>>(
    CSheet.currency
  );

  const [spellMods, setSpellMods] = useState<Record<string, string>>(
    CSheet.spell_mod
  );

  const [skills, setSkills] = useState<Record<string, { value: boolean }>>(
    CSheet.skills
  );
  const [otherProficiency, setProficiency] = useState<Record<string, string>>(
    CSheet.otherProff
  );
  const [spells, setSpells] = useState<
    Record<string, { slots: number; spells: Spell[]; spell_ids: string[] }>
  >(CSheet.spells);
  const [xp, setXp] = useState<number>(CSheet.xp);
  const [inspiration, setInspiration] = useState<string>(CSheet.inspiration);
  const [specialStat, setSpecialStat] = useState<number>(CSheet.specialStat);
  const [specialName, setSpecialName] = useState<string>(CSheet.specialName);
  const [classes, setClasses] = useState<Character[]>(CSheet.classes);

  // ############################ Functions ##############################
  const xpSetter = (points: number) => {
    setXp(xp + points);
  };

  const removeSpell = (id: string, spell: Spell, lvl: string) => {
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

  const addSpells = (level: number, spell: Spell) => {
    let lvl;

    switch (level) {
      case 0:
        lvl = "Can";
        break;
      case 1:
        lvl = "1st";
        break;
      case 2:
        lvl = "2nd";
        break;
      case 3:
        lvl = "3rd";
        break;
      default:
        lvl = `${level}th`;
    }

    setSpells((prevSpells) => {
      const newSpells = { ...prevSpells };

      newSpells[lvl] = {
        ...newSpells[lvl],
        spells: [...newSpells[lvl].spells, spell],
        spell_ids: [...newSpells[lvl].spell_ids, spell._id],
      };
      return newSpells;
    });
  };

  const spellSetter = (val: string, acc: string) => {
    setSpells((prevSpells) => {
      const newSpells = { ...prevSpells };

      if (acc === "add") {
        newSpells[val].slots = newSpells[val].slots + 1;
      } else if (acc === "remove") {
        newSpells[val].slots = newSpells[val].slots - 1;
      }

      return newSpells;
    });
  };

  const setOtherProficiency = (key: string, value: string) => {
    otherProficiency[key] = value;
    setProficiency(otherProficiency);
  };

  const metaSetter = (name: string, val: Meta) => {
    meta[name] = val.toString();
    setMeta(meta);
  };

  const tempHpSetter = (thp: number) => {
    setTempHp(thp);
  };

  const currentHpSetter = (current: number) => {
    setCurrHp(current);
  };

  const maxHpSetter = (hp: number) => {
    setMaxHp(hp);
  };

  const setSpeed = (s: string) => {
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
  const healFor = (cl: string, hitDie: number, heal: number) => {
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
  const newClass = (cl: string, lvl: number) => {
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
  const backNApp = (title: string, text: string) => {
    backNapp[title] = text;
    setBackNapp(backNapp);
  };
  const charData = (char: string, value: string) => {
    characteristics[char] = value;
    setCharacteristics(characteristics);
  };
  const otherInventory = (text: string) => {
    setInventory(text);
  };
  const attuneItem = (number: "first" | "second" | "third", item: string) => {
    attunedItems[number] = item;
    setAttunedItems(attunedItems);
  };
  const currencyValue = (curr: string, value: string) => {
    currency[curr] = value;
    setCurrency(currency);
  };
  const spellmods = (mod: string, value: string) => {
    spellMods[mod] = value;
    setSpellMods(spellMods);
  };
  const addWeapons = (
    type: string,
    range: string,
    hit: string,
    damage: string
  ) => {
    setWeapons([
      ...weapons,
      { type: type, range: range, hit: hit, damage: damage },
    ]);
  };

  const newNote = (
    types: string,
    section: string,
    title: string,
    value: string,
    time: string,
    id: string
  ) => {
    setNotes((prevState) => {
      let updatedSection;

      switch (types) {
        case "DELETE":
          updatedSection = prevState[section].filter((note) => note._id !== id);
          break;
        case "UPDATE":
          updatedSection = prevState[section].map((note) =>
            note._id === id ? { _id: id, title, value, time } : note
          );
          break;
        case "ADD":
          updatedSection = [
            ...prevState[section],
            { _id: id, title, value, time },
          ];
          break;
        default:
          return prevState;
      }

      return {
        ...prevState,
        [section]: updatedSection,
      };
    });
  };
  const defencesSetter = (def: string) => {
    setDefenses(def);
  };
  const conditionsSetter = (con: string) => {
    setConditions(con);
  };
  const armorClassSetter = (ac: string) => {
    setArmorClass(ac);
  };
  const proff = (p: string) => {
    setPorficincy(p);
  };
  const setingSkills = (text: string, status: boolean) => {
    skills[text] = { value: status };
    setSkills({ ...skills });
  };
  const statsSetter = (text: string, stat: number, mod: number) => {
    stats[text] = { value: stat, modifire: mod, proff: stats[text].proff };
    setStats({ ...stats });
  };

  const savingThrows = (text: string, stat: number, proff: boolean) => {
    stats[text] = { value: stat, proff: proff };
    setStats(stats);
  };
  const proficiencySet = (text: string, status: boolean) => {
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
        creator: CSheet.creator,
        hp_max: maxHp,
        currHp,
        tempHp,
        xp,
        proficiency,
        stats,
        skills,
        AC: armorClass,
        defences: defenses,
        conditions,
        weapons,
        spell_mod: spellMods,
        currency,
        attuned_items: attunedItems,
        inventory,
        characteristics,
        background_appearance: backNapp,
        notes,
        classes,
        healForHitDie,
        fullHeal,
        speed,
        meta,
        otherProff: otherProficiency,
        spells,
        inspiration,
        specialStat,
        specialName,
        setSpecialStat,
        setSpecialName,
        setInspiration,
        setWeapons,
        removeSpell,
        addSpells,
        spellSetter,
        setOtherProficiency,
        metaSetter,
        maxHpSetter,
        setSpeed,
        statsSetter,
        healingDone,
        logRestNow,
        healFor,
        newClass,
        newNote,
        backNApp,
        charData,
        otherInventory,
        attuneItem,
        currencyValue,
        addWeapons,
        spellmods,
        proff,
        xpSetter,
        savingThrows,
        proficiencySet,
        setingSkills,
        armorClassSetter,
        defencesSetter,
        conditionsSetter,
        currentHpSetter,
        tempHpSetter,
      }}
    >
      {" "}
      {children}
    </CS.Provider>
  );
};

export default CS;
