import { useContext, useEffect, useState } from "react";
import { SvgComponent } from "../../../../../../Navigation/Navigation";
import CS from "../../../../../../store/CS-context";
import eddit from "../../../../../../../icons/pencil.svg";
import save from "../../../../../../../icons/save.svg";
import trash from "../../../../../../../icons/trashcan-black.svg";

import styles from "./NotesComponents.module.css";
import ModalConfirmation from "../../../../../../UI/ModalConfirmation";

export default function NotesLogic(props) {
  const [editNote, setEditNote] = useState(false);
  const [title, setTitle] = useState(props.array.title);
  const [text, setText] = useState(props.array.value);
  const [toDelete, setToDelete] = useState(false);
  const cs = useContext(CS);

  useEffect(() => {
    setTitle(props.array.title);
    setText(props.array.value);
  }, [props.array]);
  const saveChanges = () => {
    cs.newNote(
      "UPDATE",
      props.sectionToDisplay,
      title,
      text,
      props.array.time,
      props.array._id
    );
    setEditNote(false);
  };
  const deleteNote = (val) => {
    if (val === false) {
      setToDelete(false);
    }
    if (val === true) {
      setToDelete(false);
      cs.newNote(
        "DELETE",
        props.sectionToDisplay,
        title,
        text,
        props.array.time,
        props.array._id
      );
    }
  };
  return (
    <>
      {toDelete && (
        <ModalConfirmation
          title={`Are you sure you want to DELETE "${title}" note?`}
          onClick={deleteNote}
        ></ModalConfirmation>
      )}
      <div className={styles.single_message_obj}>
        <div className={styles.title_n_menu}>
          {!editNote ? (
            <>
              <span className={styles.title_note}>{title}</span>
              <div
                className={styles.eddit_button}
                onClick={() => setEditNote(true)}
              >
                <SvgComponent
                  Image={eddit}
                  height="20"
                  color="red"
                  width="50"
                ></SvgComponent>
              </div>
            </>
          ) : (
            <>
              <input
                onChange={(e) => setTitle(e.target.value)}
                className={styles.eddit_input}
                value={title}
              ></input>
              <div className={styles.eddit_button} onClick={saveChanges}>
                <SvgComponent
                  Image={save}
                  height="20"
                  color="red"
                  width="50"
                ></SvgComponent>
              </div>
            </>
          )}
          <div
            className={styles.eddit_button}
            onClick={() => setToDelete(true)}
          >
            <SvgComponent
              Image={trash}
              height="20"
              color="red"
              width="50"
            ></SvgComponent>
          </div>
          <div
            className={styles.eddit_button}
            onClick={() => setEditNote(true)}
          ></div>
        </div>
        {!editNote ? (
          <span className={styles.text_note}>{text}</span>
        ) : (
          <textarea
            onChange={(e) => setText(e.target.value)}
            className={styles.eddit_text_area}
            value={text}
          ></textarea>
        )}
        <span className={styles.time_stamp}>{props.array.time}</span>
      </div>
    </>
  );
}
