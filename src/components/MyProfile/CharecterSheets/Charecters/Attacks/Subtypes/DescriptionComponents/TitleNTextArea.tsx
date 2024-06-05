import { useState, useEffect, useContext} from "react";
import CS from "../../../../../../store/CS-context";
import styles from "./DescriptionComponents.module.css";

export default function TitleNTextArea(props: { title: string}) {
  const cs = useContext(CS);
  const [text, setText] = useState(cs.backNapp[props.title]);
  const [changeText, setChangeText] = useState(false);

  const newText = () => {
    cs.backNApp(props.title, text);
    setChangeText(false);
  };

  useEffect(() => {
    if (text === "") {
      setChangeText(true);
    }
  }, [text]);
  return (
    <div className={styles.background_style}>
      <span className={styles.title_bck}>{props.title}</span>
      {!changeText ? (
        <span
          className={styles.text_area_style}
          onClick={() => setChangeText(true)}
        >
          {text}
        </span>
      ) : (
        <textarea
          onBlur={newText}
          autoFocus={true}
          onChange={(e) => setText(e.target.value)}
          value={text}
          className={`${styles.text_area_size} ${styles.text_area_style}`}
        ></textarea>
      )}
    </div>
  );
}
