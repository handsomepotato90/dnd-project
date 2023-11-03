import { useState, useContext } from "react";
import CS from "../../../../store/CS-context";
import Select from "react-select";
import styles from "./CharecterComponents.module.css";
const classes = [
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
export default function ClassLevelComponent(props) {
  const [level, setLevel] = useState(1);
  const [selectedClass, setSelectedClass] = useState("");
  const cs = useContext(CS);

  const getClassName = (event, action) => {
    setSelectedClass(event.value);
  };
  const submitClass = () => {
    if (selectedClass === "" || level <= 0) {
      return;
    }
    console.log(selectedClass, level)
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
      <input value={level} onChange={(e) => setLevel(e.target.value)}></input>
      <button onClick={submitClass}>ADD</button>
    </div>
  );
}
