export default interface Character {
    AC: string;
    attuned_items: {
      first: string;
      second: string;
      third: string;
    };
    characteristics: {
      AGE: string;
      ALIGNMENT: string;
      EYES: string;
      FAITH: string;
      GENDER: string;
      HAIR: string;
      HEIGHT: string;
      SIZE: string;
      SKIN: string;
      WEIGHT: string;
    };
    classes: {
      class: string;
      hitDie: string;
      level: string;
    }[];
    conditions: string;
    creator: string;
    currHp: number;
    currency: {
      CP: number;
      EP: number;
      GP: string;
      PP: number;
      SP: number;
    };
    defences: string;
    hp_max: string;
    inspiration: number;
    inventory: string;
    meta: {
      al: string;
      bg: string;
      name: string;
    };
    notes: {
      ALLIES: string[];
      ENEMIES: string[];
      ORGS: string[];
      OTHER: string[];
      TOWNS: string[];
    };
    otherProff: {
      ARMOUR: string;
      LANGUAGES: string;
      TOOLS: string;
      WEAPONS: string;
    };
    proficiency: string;
    skills: Record<string, { value: boolean }>;
    speed: number;
    spell_mod: {
      MODIFIER: number;
      SAVE_DC: string;
      SPELL_ATTACK: string;
    };
    spells: Record<string, { slots: number; spell_ids: string[]; spells: string[] }>;
    stats: {
      Cha: { value: string; modifire: number; proff: boolean };
      Con: { value: string; modifire: number; proff: boolean };
      Dex: { value: string; modifire: number; proff: boolean };
      Int: { value: string; modifire: number; proff: boolean };
      Str: { value: string; modifire: number; proff: boolean };
      Wis: { value: string; modifire: number; proff: boolean };
    };
    tempHp: number;
    weapons: {
      damage: string;
      hit: string;
      range: string;
      type: string;
    }[];
    xp: number;
    __v: number;
    _id: string;
    children?: React.ReactNode;
  }
  