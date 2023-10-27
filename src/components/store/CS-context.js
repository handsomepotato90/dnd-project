import React, { useState } from "react";

const CS = React.createContext({
  armorClass: 0,
  proficiency: 0,
  defences: "",
  conditions: "",
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
  weapons: [{ type: "", range: "", hit: 0, damage: "" }],
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

  const addWeapons = (type, range, hit, damage) => {
    setWeapons([
      ...weapons,
      { type: type, range: range, hit: hit, damage: damage },
    ]);
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
        addWeapons: addWeapons,
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
