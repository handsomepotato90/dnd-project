import { useState, useEffect, useContext, useRef } from "react";
import Sections from "./Sections";
import styles from "./NotesComponents.module.css";
import CS from "../../../../../../store/CS-context";

export default function NotesComponents() {
  const cs = useContext(CS);
  const [arrayToDisplay, setArrayToDisplay] = useState([]);
  const [sectionToDisplay, setSectionToDisplay] = useState("ALLIES");

  const [state, setState] = useState([
    { title: "ORGS", value: false },
    { title: "ALLIES", value: false },
    { title: "ENEMIES", value: false },
    { title: "TOWNS", value: false },
    { title: "OTHER", value: false },
  ]);
  const changeState = (title) => {
    const newArray = [];
    for (let i = 0; i < state.length; i++) {
      const element = state[i];
      if (element.title === title) {
        element.value = true;
        setArrayToDisplay([...cs.notes[title]]);
        setSectionToDisplay(title);
      } else {
        element.value = false;
      }
      newArray.push(element);
    }
    setState(newArray);
  };
  useEffect(() => {
    changeState(sectionToDisplay);
  }, [cs.notes[sectionToDisplay]]);

  return (
    <>
      <div className={styles.diff_sections}>
        {state.map((e, i) => {
          return (
            <SectionButtons
              onClick={changeState}
              key={i}
              title={e.title}
              value={e.value}
            ></SectionButtons>
          );
        })}
      </div>
      <Sections
        sectionToDisplay={sectionToDisplay}
        array={arrayToDisplay}
      ></Sections>
    </>
  );
}

const SectionButtons = (props) => {
  const [chosen, clickThis] = useState(props.value);
  useEffect(() => {
    clickThis(props.value);
  }, [props.value]);
  const changeState = () => {
    props.onClick(props.title);
  };
  return (
    <div
      onClick={changeState}
      style={{
        backgroundColor: chosen ? "#f44336" : "white",
        color: chosen ? "white" : "#f44336",
        boxShadow: chosen ? "0 0 20px #f44336" : "",
      }}
      className={styles.section_text}
    >
      {props.title}
    </div>
  );
};
