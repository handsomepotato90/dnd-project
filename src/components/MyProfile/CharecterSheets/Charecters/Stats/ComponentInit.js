import { useState, useEffect, useContext } from "react";
import CS from "../../../../store/CS-context";

import styles from "./Stats.module.css";

export default function ComponentInit(props) {
  const [changeValue, setChangeValue] = useState(false);
  const [prof, setProf] = useState(2);
  const cs = useContext(CS);
  useEffect(() => {
    setProf(props.value);

    if (props.text === "Proficiency") {
      cs.proff(props.value);
    }
  }, [props.value, cs]);

  return (
    <div className={styles.semi_important_stats}>
      <span>{props.text}</span>
      {!changeValue ? (
        <div
          onClick={() => setChangeValue(true)}
          className={styles.semi_important_text_style}
        >
          {prof}
        </div>
      ) : (
        <input
          className={styles.semi_important_text_style}
          autoFocus={true}
          onChange={(e) => setProf(e.target.value)}
          onBlur={() => setChangeValue(false)}
        ></input>
      )}
    </div>
  );
}
