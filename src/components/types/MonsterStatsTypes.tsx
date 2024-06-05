export default interface MonsterStats {
    Actions: string[];
    "Armor Class": { value: number; type: string };
    CHA: number;
    CHA_mod: string;
    CON: number;
    CON_mod: string;
    Challenge: { rating: number; xp: string };
    "Condition Immunities": string[];
    DEX: number;
    DEX_mod: string;
    "Damage Immunities": string[];
    "Damage Resistances": string[];
    "Damage Vulnerabilities": string[];
    "Hit Points": { dice: string; hp: number };
    INT: number;
    INT_mod: string;
    Languages: string;
    STR: number;
    STR_mod: string;
    "Saving Throws": string;
    Senses: string;
    Skills: string;
    Speed: string;
    Traits: string[];
    WIS: number;
    WIS_mod: string;
    createdAt: string;
    creator: string;
    img_url?: string;
    initiative: number;
    meta: { size: string; type: string; alignment: string };
    name: string;
    proficiency_bonus: number;
    timeforvoting: number;
    updatedAt: string;
    votes: { number: number; yes: string[]; no: string[] };
    "Legendary Actions"?: string;
    Reactions?: string;
    Characteristics?: string | TrustedHTML;
    "Bonus Actions"?: string[];
    level: number
    _id: string;
  }
  