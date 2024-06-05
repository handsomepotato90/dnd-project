import { useState, useEffect, useContext} from "react";
import Sections from "./Sections";
import styles from "./NotesComponents.module.css";
import CS from "../../../../../../store/CS-context";

import {Notes} from "../../../../../../types/CSTypes";
type NotesCategory = "ORGS" | "ALLIES" | "ENEMIES" | "TOWNS" | "OTHER";

export default function NotesComponents() {
  const cs = useContext(CS);
  const [arrayToDisplay, setArrayToDisplay] = useState<Notes[]>([]);

  const [sectionToDisplay, setSectionToDisplay] = useState<NotesCategory>("ALLIES");

  const [state, setState] = useState([
    { title: "ORGS", value: false },
    { title: "ALLIES", value: false },
    { title: "ENEMIES", value: false },
    { title: "TOWNS", value: false },
    { title: "OTHER", value: false },
  ]);

  const changeState = (title: NotesCategory) => {
    const newState = state.map((element) => {
      if (element.title === title) {
        return { ...element, value: true };
      } else {
        return { ...element, value: false };
      }
    });

    setState(newState);
    setArrayToDisplay([...cs.notes[title]]);
    setSectionToDisplay(title);
  };

  useEffect(() => {
    changeState(sectionToDisplay);
  }, [cs.notes[sectionToDisplay]]);

  return (
    <>
      <div className={styles.diff_sections}>
        {state.map((e, i) => (
          <SectionButtons
            onClick={changeState}
            key={i}
            title={e.title as NotesCategory}
            value={e.value}
          />
        ))}
      </div>
      <Sections sectionToDisplay={sectionToDisplay} array={arrayToDisplay} />
    </>
  );
}

const SectionButtons = (props: { value: boolean; onClick: (arg0: NotesCategory) => void; title: NotesCategory; }) => {
  const [chosen, setChosen] = useState(props.value);

  useEffect(() => {
    setChosen(props.value);
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
