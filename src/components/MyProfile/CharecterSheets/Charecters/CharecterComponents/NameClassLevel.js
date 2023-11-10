import { useState } from "react";
import ClassLevel from "./ClassLevel";
import CS from "../../../../store/CS-context";
import styles from "./CharecterComponents.module.css";
import { useContext } from "react";
import { useEffect } from "react";

export default function NameClassLevel() {

  return (
    <div className={styles.general_charecter_Style}>
      <div className={styles.general_char_info_style}>
        <TextInputSWitch title={"Name"} shortName={"name"}></TextInputSWitch>
        <TextInputSWitch
          title={"Background"}
          shortName={"bg"}
        ></TextInputSWitch>
        <TextInputSWitch title={"Alignment"} shortName={"al"}></TextInputSWitch>
      </div>

      <ClassLevel></ClassLevel>
    </div>
  );
}

export const TextInputSWitch = (props) => {
  const cs = useContext(CS);
  const [switchMode, setSwitchMode] = useState(false);
  const [value, setValue] = useState();
  const color = props.shortName==="name"? `red_text ${styles.text_decoration_name}`:null
  useEffect(() => {
    setValue(cs.meta[props.shortName]);
  }, []);
  useEffect(() => {
    setValue(cs.meta[props.shortName]);
  }, [cs.meta[props.shortName]]);

  return (
    <>
      {!switchMode ? (
        <span className={`${color}`} onMouseUp={() => setSwitchMode(true)}>{value}</span>
      ) : (
        <input
          value={value}
          placeholder=""
          autoFocus={true}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => {
            setSwitchMode(false);
            cs.metaSetter(props.shortName, value);
          }}
        ></input>
      )}
    </>
  );
};
