import AddNewNote from "./AddNewNote";
import NotesLogic from "./NotesLogic";

import styles from "./NotesComponents.module.css";
export default function NotesDisplay(props) {
  return (
    <div className={styles.notes_display}>
      <AddNewNote sectionToDisplay={props.sectionToDisplay}></AddNewNote>

      {props.array.map((e, i) => {
        return (
          <NotesLogic
            key={i}
            position={i}
            array={e}
            sectionToDisplay={props.sectionToDisplay}
          ></NotesLogic>
        );
      })}
    </div>
  );
}
