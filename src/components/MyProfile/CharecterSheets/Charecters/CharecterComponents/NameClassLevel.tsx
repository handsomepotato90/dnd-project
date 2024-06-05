import React, { useState, useEffect, useContext } from "react";
import ClassLevel from "./ClassLevel";
import CS from "../../../../store/CS-context";
import styles from "./CharecterComponents.module.css";

interface TextInputProps {
  title: string;
  shortName: keyof Meta;
}

interface Meta {
  name: string;
  bg: string;
  al: string;
}

const NameClassLevel: React.FC = () => {
  return (
    <div className={styles.general_charecter_Style}>
      <div className={styles.general_char_info_style}>
        <TextInputSwitch title="Name" shortName="name" />
        <TextInputSwitch title="Background" shortName="bg" />
        <TextInputSwitch title="Alignment" shortName="al" />
      </div>
      <ClassLevel />
    </div>
  );
};

export const TextInputSwitch: React.FC<TextInputProps> = (props) => {
  const cs = useContext(CS);
  const [switchMode, setSwitchMode] = useState(false);
  const [value, setValue] = useState<string>("");

  const color = props.shortName === "name" ? `red_text ${styles.text_decoration_name}` : "";

  useEffect(() => {
    setValue(cs.meta[props.shortName].toString());
  }, [cs.meta, props.shortName]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setSwitchMode(false);
    cs.metaSetter(props.shortName, value);
  };

  return (
    <>
      {!switchMode ? (
        <span className={color} onMouseUp={() => setSwitchMode(true)}>
          {value}
        </span>
      ) : (
        <input
          value={value}
          placeholder=""
          autoFocus
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
      )}
    </>
  );
};

export default NameClassLevel;
