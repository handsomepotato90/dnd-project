import { useState, useContext } from "react";
import CS from "../../../../store/CS-context";
import Select, { SingleValue, ActionMeta } from "react-select";
import styles from "./CharecterComponents.module.css";

export interface Class {
  value: string;
  label: string;
}
const classes: Class[] = [
  { value: "Artificer", label: "Artificer" },
  { value: "Barbarian", label: "Barbarian" },
  { value: "Bard", label: "Bard" },
  { value: "Cleric", label: "Cleric" },
  { value: "Druid", label: "Druid" },
  { value: "Fighter", label: "Fighter" },
  { value: "Monk", label: "Monk" },
  { value: "Paladin", label: "Paladin" },
  { value: "Ranger", label: "Ranger" },
  { value: "Rogue", label: "Rogue" },
  { value: "Sorcerer", label: "Sorcerer" },
  { value: "Warlock", label: "Warlock" },
  { value: "Wizard", label: "Wizard" },
];

interface ClassLevelComponentProps {
  onClick: (value: boolean) => void;
}

export default function ClassLevelComponent(props: ClassLevelComponentProps) {
  const [level, setLevel] = useState<number>(1);
  const [selectedClass, setSelectedClass] = useState<string>("");
  const cs = useContext(CS);

  const getClassName = (newValue: SingleValue<Class>, actionMeta: ActionMeta<Class>) => {
    if (newValue) {
      setSelectedClass(newValue.value);
    } else {
      setSelectedClass("");
    }
  };

  const submitClass = () => {
    if (selectedClass === "" || level <= 0) {
      return;
    }
    cs.newClass(selectedClass, level);
    props.onClick(false);
  };

  return (
    <div className={styles.select_class}>
      <Select
        isSearchable={false}
        options={classes}
        name="classes"
        onChange={getClassName}
      ></Select>
      <input
        type="number"
        value={level}
        onChange={(e) => setLevel(parseInt(e.target.value))}
      ></input>
      <button onClick={submitClass}>ADD</button>
    </div>
  );
}
