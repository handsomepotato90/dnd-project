import { useState, useContext } from "react";
import CS from "../../../../store/CS-context";
import styles from "./CharecterComponents.module.css";
import { useEffect } from "react";

export default function ChosenClassNLevel() {
  const cs = useContext(CS);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setClasses(cs.classes);
  }, [cs.classes]);

  return (
    <>
      {classes.map((e, i) => {
        return <ClassDisplay key={i} classEntry={e}></ClassDisplay>;
      })}
    </>
  );
}
const ClassDisplay = (props) => {
  const [changeLevel, setChangeLevel] = useState(false);
  const [newLevel, setNewLevel] = useState(0);
  const cs = useContext(CS);

  const levelUp = () => {
    cs.newClass(props.classEntry.class, newLevel);
    setChangeLevel(false);
  };
  return (
    <div className={styles.single_class_dispaly}>
      <span className={styles.class_name_style}>{props.classEntry.class}</span>
      {!changeLevel ? (
        <span
          onClick={() => setChangeLevel(true)}
          className={`red_text ${styles.class_level_style}`}
        >
          {props.classEntry.level}
        </span>
      ) : (
        <input
          type="number"
          className={styles.class_level_input}
          autoFocus={true}
          onBlur={() => levelUp(props.classEntry.class)}
          onChange={(e) => setNewLevel(e.target.value)}
        ></input>
      )}
    </div>
  );
};
