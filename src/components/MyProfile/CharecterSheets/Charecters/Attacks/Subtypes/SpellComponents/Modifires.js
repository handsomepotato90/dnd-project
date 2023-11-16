import { useState, useContext } from "react";
import styles from "./SpellComponents.module.css";
import CS from "../../../../../../store/CS-context";

export default function Modifires(props) {
  const cs = useContext(CS);
  const [newGivenValue, setNewGivenValue] = useState(0);
  const [changeOfMod, setChangeOfMod] = useState(false);

  const newValue = () => {
    cs.spellmods(props.title, newGivenValue);
    setChangeOfMod(false);
  };
  return (
    <div className={styles.modifier_solo_view}>
      {!changeOfMod ? (
        <span
          onClick={() => setChangeOfMod(true)}
          className={styles.modifire_value}
        >
          {cs.spellMods[props.title]}
        </span>
      ) : (
        <input
          type="number"
          autoFocus={true}
          onBlur={newValue}
          onChange={(e) => setNewGivenValue(e.target.value)}
        ></input>
      )}
      <span>{props.title}</span>
    </div>
  );
}
