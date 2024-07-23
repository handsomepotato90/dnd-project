import { Dispatch, SetStateAction } from "react";
import Spell from "./SpellsTypes";

export default interface CSContextProps {
  creator: string;
  AC: string;
  proficiency: string;
  inspiration: string;
  specialStat: number;
  specialName: string;
  tempHp: number;
  currHp: number;
  defences: string;
  conditions: string;
  classes: CharacterClass[];
  meta: Meta;
  healForHitDie?: { value: number; is: boolean };
  notes: {
    ORGS: Notes[];
    ALLIES: Notes[];
    ENEMIES: Notes[];
    TOWNS: Notes[];
    OTHER: Notes[];
  };
  hp_max: number;
  characteristics: Record<string, string>;
  stats: Record<string, { value: number; modifire?: number; proff: boolean }>;
  xp: number;
  skills: Skills;
  background_appearance: Record<string, string>;
  attuned_items: { first: string; second: string; third: string };
  spell_mod: Record<string, string>;
  currency: Record<string, string>;
  weapons: Weapon[];
  inventory: string;
  fullHeal?: boolean;
  speed: string;
  otherProff: Record<string, string>;
  spells: Record<
    string,
    { slots: number; spells: Spell[]; spell_ids: string[] }
  >;
  xpSetter: (points: number) => void;
  spellSetter: (val: any, acc: any) => void;
  setOtherProficiency: (key: string, value: string) => void;
  metaSetter: (name: string, val: Meta) => void;
  maxHpSetter: (hp: number) => void;
  setSpeed: (s: string) => void;
  statsSetter: (text: string, stat: number, mod: number) => void;
  logRestNow: () => void;
  healFor: (cl: string, hitDie: number, heal: number) => void;
  newClass: (cl: string, lvl: number) => void;
  newNote: (
    types: string,
    section: string,
    title: string,
    value: any,
    time: any,
    id: any
  ) => void;
  backNApp: (title: string, text: string) => void;
  charData: (char: string, value: any) => void;
  otherInventory: (text: string) => void;
  attuneItem: (arg0: "first" | "second" | "third", arg1: string) => void;
  currencyValue: (curr: string, value: string) => void;
  spellmods: (mod: string, value: string) => void;
  addWeapons: (
    type: string,
    range: string,
    hit: string,
    damage: string
  ) => void;
  proff: (p: string) => void;
  savingThrows: (text: string, stat: number, proff: boolean) => void;
  proficiencySet: (text: string, status: boolean) => void;
  setingSkills: (text: string, status: boolean) => void;
  armorClassSetter: (ac: string) => void;
  currentHpSetter: (current: number) => void;
  tempHpSetter: (thp: number) => void;
  setSpecialStat: (thp: number) => void;
  setSpecialName: (thp: string) => void;
  setInspiration: (thp: string) => void;
  setWeapons: Dispatch<SetStateAction<Weapon[]>>;
  removeSpell: (id: any, spell: any, lvl: any) => void;
  addSpells: (level: any, spell: any) => void;
  healingDone: () => void;
  defencesSetter: (def: string) => void;
  conditionsSetter: (con: string) => void;
}

export interface CharacterDefault {
  creator: string;
  AC: string;
  proficiency: string;
  inspiration: string;
  specialStat: number;
  specialName: string;
  tempHp: number;
  currHp: number;
  defences: string;
  conditions: string;
  classes: CharacterClass[];
  meta: Meta;
  healForHitDie?: { value: number; is: boolean };
  notes: {
    ORGS: Notes[];
    ALLIES: Notes[];
    ENEMIES: Notes[];
    TOWNS: Notes[];
    OTHER: Notes[];
  };
  hp_max: string;
  characteristics: Record<string, string>;
  stats: Record<string, { value: number; modifire?: number; proff: boolean }>;
  xp: number;
  skills: Skills;
  background_appearance: Record<string, string>;
  attuned_items: { first: ""; second: ""; third: "" };
  spell_mod: Record<string, string>;
  currency: Record<string, string>;
  weapons: Weapon[];
  inventory: string;
  fullHeal: boolean;
  speed: string;
  otherProff: Record<string, string>;
  spells: Record<
    string,
    { slots: number; spells: Spell[]; spell_ids: string[] }
  >;
}

export interface Notes {
  time: string;
  title: string;
  value: string;
  _id: string;
}
export interface Weapon {
  type: string;
  range: string;
  hit: string;
  damage: string;
}

export interface CharacterClass {
  class: string;
  level: number;
  hitDie: number;
}

export interface Meta {
  name: string;
  bg: string;
  al: string;
  [key: string]: string;
}

export interface Skills {
  [key: string]: { value: boolean };
}

export type NotesCategory = "ORGS" | "ALLIES" | "ENEMIES" | "TOWNS" | "OTHER";
