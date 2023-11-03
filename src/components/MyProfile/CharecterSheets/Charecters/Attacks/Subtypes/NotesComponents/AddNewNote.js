import { useState, useContext } from "react";
import { SvgComponent } from "../../../../../../Navigation/Navigation";
import add from "../../../../../../../icons/add.svg";
import BackDrop from "../../../../../../UI/BackDrop";
import styles from "./NotesComponents.module.css";
import CS from "../../../../../../store/CS-context";


function makeid(length) {
    let result = "";
    const characters =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }


export default function AddNewNote(props) {
  const [openWindow, setOpenWindow] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenWindow(true)}
        className={styles.add_new_comment_svg}
      >
        <SvgComponent
          Image={add}
          height="40"
          color="red"
          width="70"
        ></SvgComponent>
      </div>
      {openWindow && (
        <CommentWindow
          sectionToDisplay={props.sectionToDisplay}
          onClick={(val) => setOpenWindow(val)}
        ></CommentWindow>
      )}
    </>
  );
}

const CommentWindow = (props) => {
  const [title, newTitle] = useState("");
  const [note, newNoteText] = useState("");
  const cs = useContext(CS);
  const submitNote = () => {
    const date = new Date(Date.now());
    const time =
      date.getDate() +
      "." +
      (date.getMonth() + 1) +
      "." +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      String(date.getMinutes()).padStart(2, "0");
    cs.newNote("ADD", props.sectionToDisplay, title, note, time, makeid(40));
    props.onClick(false);
  };
  return (
    <>
      <BackDrop onClick={() => props.onClick(false)}></BackDrop>
      <div className={styles.pop_up_notes}>
        <input
          className={styles.pop_up_input}
          onChange={(e) => newTitle(e.target.value)}
          value={title}
        ></input>
        <textarea
          className={styles.pop_up_text_area}
          onChange={(e) => newNoteText(e.target.value)}
          value={note}
        ></textarea>
        <button
          onClick={submitNote}
          className={`button ${styles.pop_up_button}`}
        >
          Save Note
        </button>
      </div>
    </>
  );
};
