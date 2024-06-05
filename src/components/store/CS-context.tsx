import React, { ReactNode, useState } from "react";
import CSContextProps, {Notes as Note, Meta} from "../types/CSTypes"
import Spell from "../types/SpellsTypes"

const CS = React.createContext<CSContextProps>({
  armorClass: "",
  inspiration: 0,
  specialStat: 0,
  specialName: '',
  proficiency: 0,
  maxHp: 0,
  tempHp: 0,
  currHp: 0,
  fullHeal: false,
  defences: "",
  conditions: "",
  classes: [],
  meta: { name: "", bg: "", al: "" },
  healForHitDie: { value: 0, is: false },
  notes: { ORGS: [], ALLIES: [], ENEMIES: [], TOWNS: [], OTHER: [] },
  characteristics: {},
  stats: {},
  xp: 0,
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
  spellMods: { Modifire: '0', "Spell Attack": '0', "Save DC": '0' },
  currency: { PP: '0', GP: '0', EP:'0', SP: '0', CP: '0' },
  weapons: [{ type: "", range: "", hit: "", damage: "" }],
  inventory: "",
  speed: 0,
  otherProficiency: {},
  spells: {},
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

export const CSProvider = ({children}: {children: ReactNode}) => {
  const CSheet = JSON.parse(localStorage?.getItem("charSheet") ?? 'false');

  const [armorClass, setArmorClass] = useState<string>(
    CSheet ? CSheet.AC : '0'
  );
  const [fullHeal, setFullHeal] = useState<boolean>(false);
  const [proficiency, setPorficincy] = useState<number>(
    CSheet ? parseInt(CSheet.proficiency) : 0
  );
  const [defenses, setDefenses] = useState<string>(
    CSheet?.defences || ""
  );
  const [conditions, setConditions] = useState<string>(
    CSheet?.conditions || ""
  );
  const [speed, setErSpeed] = useState<number>(
    CSheet?.speed ? parseInt(CSheet.speed) : 0
  );
  const [currHp, setCurrHp] = useState<number>(
    CSheet?.currHp ? parseInt(CSheet.currHp) : -1000
  );
  const [tempHp, setTempHp] = useState<number>(
    CSheet?.tempHp ? parseInt(CSheet.tempHp) : 0
  );
  const [maxHp, setMaxHp] = useState<number>(
    CSheet?.hp_max ? parseInt(CSheet.hp_max) : 0
  );
  const [meta, setMeta] = useState<Meta>(
    CSheet?.meta ||  {  name: "Name", bg: "Background", al: "Alignment", }
  );
  const [stats, setStats] = useState<Record<string, { value: number, modifire?: number, proff: boolean }>>(
    CSheet?.stats || {
      Str: { value: 10, modifire: 0, proff: false },
      Dex: { value: 10, modifire: 0, proff: false },
      Con: { value: 10, modifire: 0, proff: false },
      Int: { value: 10, modifire: 0, proff: false },
      Wis: { value: 10, modifire: 0, proff: false },
      Cha: { value: 10, modifire: 0, proff: false },
    }
  );
  const [weapons, setWeapons] = useState<Weapon[]>(CSheet?.weapons || []);
  const [healForHitDie, setHealForHitDie] = useState<{ value: number; is: boolean; }>({ value: 0, is: false });
  const [notes, setNotes] = useState<Notes>( CSheet?.notes || {
    ORGS: [],
    ALLIES: [],
    ENEMIES: [],
    TOWNS: [],
    OTHER: [],
});
  const [inventory, setInventory] = useState<string>(
    CSheet?.inventory || ""
  );
  const [backNapp, setBackNapp] = useState<Record<string, string>>(
    CSheet?.background_appearance || { BACKGROUND: "", APPEARANCE: "" }
  );
  const [characteristics, setCharacteristics] = useState<Record<string, string>>(
    CSheet?.characteristics || {
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
  const [attunedItems, setAttunedItems] = useState<Record<string, string>>(
    CSheet?.attuned_items || {
      first: "",
      second: "",
      third: "",
    }
  );
  const [currency, setCurrency] = useState<Record<string, string>>(
    CSheet?.currency || {
      PP: 0,
      GP: 0,
      EP: 0,
      SP: 0,
      CP: 0,
    }
  );
  const [spellMods, setSpellMods] = useState<Record<string, string>>(
    CSheet?.spell_mod || {
      MODIFIER: 0,
      "SPELL ATTACK": 0,
      "SAVE DC": 0,
    }
  );
  const [skills, setSkills] = useState<Record<string, { value: boolean }>>(
    CSheet?.skills || {
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
  const [otherProficiency, setProficiency] = useState<Record<string, string>>(
    CSheet?.otherProff || {
      ARMOUR: "NONE",
      WEAPONS: "NONE",
      TOOLS: "NONE",
      LANGUAGES: "NONE",
    }
  );
  const [spells, setSpells] = useState<Record<string, { slots: number, spells: Spell[], spell_ids: string[] }>>(
    CSheet?.spells || {
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
  const [xp, setXp] = useState<number>(CSheet?.xp || 0);
  const [inspiration, setInspiration] = useState<number>(
    CSheet?.inspiration || 0
  );
  const [specialStat, setSpecialStat] = useState<number>(
    CSheet?.specialStat || 0
  );
  const [specialName, setSpecialName] = useState<string>(
    CSheet?.specialName || "Special Res"
  );
  const [classes, setClasses] = useState<Character[]>(CSheet?.classes || []);

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
              spell_ids: [...newSpells[lvl].spell_ids, spell._id]
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

  const setSpeed = (s: number) => {
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
  console.log(notes)
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
  const backNApp = (title: string, text:string) => {
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
  const attuneItem = (number: string, item: string) => {
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
  const addWeapons = (type: string, range: string, hit: string, damage: string) => {
    setWeapons([
      ...weapons,
      { type: type, range: range, hit: hit, damage: damage },
    ]);
  };

  const newNote = (types: string, section: string, title: string, value: string, time: string, id: string) => {
    setNotes((prevState) => {
        let updatedSection;

        switch (types) {
            case "DELETE":
                updatedSection = prevState[section].filter(note => note._id !== id);
                break;
            case "UPDATE":
                updatedSection = prevState[section].map(note => 
                    note._id === id ? { _id: id, title, value, time } : note
                );
                break;
            case "ADD":
                updatedSection = [
                    ...prevState[section],
                    { _id: id, title, value, time }
                ];
                break;
            default:
                return prevState;
        }

        return {
            ...prevState,
            [section]: updatedSection
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
  const proff = (p: number) => {
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
        currHp,
        tempHp,
        xp,
        proficiency,
        stats,
        skillsProf: skills,
        armorClass,
        defences: defenses,
        conditions,
        weapons,
        spellMods,
        currency,
        attunedItems,
        inventory,
        characteristics,
        backNapp,
        notes,
        classes,
        healForHitDie,
        fullHeal,
        speed,
        maxHp,
        meta,
        otherProficiency,
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
