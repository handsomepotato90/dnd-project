import { useState, useEffect } from "react";
import NotesDisplay from "./NotesDisplay";
import styles from "./NotesComponents.module.css";

export default function Sections(props) {
  const [searchabel, setSearchabel] = useState("");
  const [newArray, setNewArray] = useState(props.array);
  const [lastSession, setLastSession] = useState(false);

  const changeArray = (value) => {
    const res = props.array.filter((obj) =>
      Object.values(obj).some((val) =>
        JSON.stringify(val).toLowerCase().includes(value.toLowerCase())
      )
    );
    setNewArray([...res]);
  };

  const getLastSessionNotes = () => {
    setLastSession(true);
    const last = props.array.slice(-1);
    const [lastDate, time] = last[0].time.split(" ");
    changeArray(lastDate);
  };
  const allNotes = () => {
    setLastSession(false);
    setNewArray(props.array);
  };
  useEffect(() => {
    setSearchabel("");
    setNewArray(props.array);
  }, [props.array]);

  return (
    <div className={styles.sections_block}>
      <div className={styles.search_block}>
        <input
          onChange={(e) => setSearchabel(e.target.value)}
          value={searchabel}
        ></input>
        <button onClick={() => changeArray(searchabel)} className={`button`}>
          Search
        </button>

        {!lastSession ? (
          <button onClick={getLastSessionNotes} className={`button green ${styles.last_sessions_btn}`}>
            Last Session
          </button>
        ) : (
          <button onClick={allNotes} className={`button ${styles.all_session_btn}`}>
            All
          </button>
        )}
      </div>
      <NotesDisplay
        sectionToDisplay={props.sectionToDisplay}
        array={newArray}
      ></NotesDisplay>
    </div>
  );
}
