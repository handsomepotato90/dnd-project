import AddNewNote from "./AddNewNote";
import NotesLogic,{DataItem} from "./NotesLogic";

import styles from "./NotesComponents.module.css";

import {NotesCategory} from "../../../../../../types/CSTypes";


export default function NotesDisplay(props: { sectionToDisplay: NotesCategory; array: DataItem[]; }) {
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
