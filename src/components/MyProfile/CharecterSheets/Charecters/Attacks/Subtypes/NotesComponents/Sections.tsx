import { useState, useEffect } from "react";
import NotesDisplay from "./NotesDisplay";
import  {DataItem} from "./NotesLogic";
import styles from "./NotesComponents.module.css";

import {NotesCategory} from "../../../../../../types/CSTypes";



export default function Sections(props: { array: DataItem[]; sectionToDisplay: NotesCategory; }) {
  const [searchable, setSearchable] = useState("");
  const [newArray, setNewArray] = useState(props.array);
  const [lastSession, setLastSession] = useState(false);

  const changeArray = (value: string) => {
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
    setSearchable("");
    setNewArray(props.array);
  }, [props.array]);

  return (
    <div className={styles.sections_block}>
      <div className={styles.search_block}>
        <input
          onChange={(e) => setSearchable(e.target.value)}
          value={searchable}
        ></input>
        <button onClick={() => changeArray(searchable)} className={`button`}>
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
