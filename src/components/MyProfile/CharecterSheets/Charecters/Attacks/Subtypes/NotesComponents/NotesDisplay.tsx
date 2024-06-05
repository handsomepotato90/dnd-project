import React from "react";
import AddNewNote from "./AddNewNote";
import NotesLogic, { DataItem } from "./NotesLogic";

import styles from "./NotesComponents.module.css";

import { NotesCategory } from "../../../../../../types/CSTypes";

const NotesDisplay: React.FC<{ sectionToDisplay: NotesCategory; array: DataItem[] }> = (props) => {
  return (
    <div className={styles.notes_display}>
      <AddNewNote sectionToDisplay={props.sectionToDisplay}></AddNewNote>

      {props.array.map((e, i) => {
        return (
          <NotesLogic
            key={i}
            array={e}
            sectionToDisplay={props.sectionToDisplay}
          ></NotesLogic>
        );
      })}
    </div>
  );
}

export default NotesDisplay;
