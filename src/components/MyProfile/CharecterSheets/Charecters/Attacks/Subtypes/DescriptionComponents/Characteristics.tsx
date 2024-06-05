import React, { useState, useContext } from "react";
import CS from "../../../../../../store/CS-context";
import styles from "./DescriptionComponents.module.css";

const Characteristics: React.FC = () => {
  return (
    <div className={styles.characteristics_style}>
      <span className={styles.title_bck}>CHARACTERISTICS</span>
      <div className={styles.char_holder}>
        <CharSingle title={"ALIGNMENT"}></CharSingle>
        <CharSingle title={"GENDER"}></CharSingle>
        <CharSingle title={"EYES"}></CharSingle>
        <CharSingle title={"SIZE"}></CharSingle>
        <CharSingle title={"HEIGHT"}></CharSingle>
        <CharSingle title={"FAITH"}></CharSingle>
        <CharSingle title={"HAIR"}></CharSingle>
        <CharSingle title={"SKIN"}></CharSingle>
        <CharSingle title={"AGE"}></CharSingle>
        <CharSingle title={"WEIGHT"}></CharSingle>
      </div>
    </div>
  );
};

const CharSingle: React.FC<{ title: string }> = (props) => {
  const { title } = props;
  const cs = useContext(CS);
  const [charValue, setCharValue] = useState(cs.characteristics[title]);
  const [newValue, setNewValue] = useState(false);

  const setChar = () => {
    cs.charData(title, charValue);
    setNewValue(false);
  };

  return (
    <div className={styles.single_char}>
      <span className={styles.title_char_style}>{title}</span>
      {!newValue ? (
        <span onClick={() => setNewValue(true)} className={styles.value_text}>
          {charValue}
        </span>
      ) : (
        <input
          autoFocus={true}
          onBlur={setChar}
          className={styles.input_text_style}
          onChange={(e) => {
            setCharValue(e.target.value);
          }}
          value={charValue}
        ></input>
      )}
    </div>
  );
};

export default Characteristics;
