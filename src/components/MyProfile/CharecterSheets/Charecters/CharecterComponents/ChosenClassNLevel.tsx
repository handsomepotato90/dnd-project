import React, { useState, useContext, useEffect } from "react";
import CS from "../../../../store/CS-context";
import styles from "./CharecterComponents.module.css";

import { CharacterClass } from "../../../../types/CSTypes";

const ChosenClassNLevel: React.FC = () => {
  const cs = useContext(CS);
  const [classes, setClasses] = useState<CharacterClass[]>([]);

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
};

interface ClassEntry {
  class: string;
  level: number;
}

interface Props {
  classEntry: ClassEntry;
}

const ClassDisplay: React.FC<Props> = (props) => {
  const [changeLevel, setChangeLevel] = useState<boolean>(false);
  const [newLevel, setNewLevel] = useState<number>(0);
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
          onBlur={() => levelUp()}
          onChange={(e) => setNewLevel(parseInt(e.target.value))}
        ></input>
      )}
    </div>
  );
};

export default ChosenClassNLevel;
