import React, { useState, useContext } from "react";
import styles from "./SpellComponents.module.css";
import CS from "../../../../../../store/CS-context";

interface ModifiersProps {
  value: string;
  title: string;
}

const Modifiers: React.FC<ModifiersProps> = (props) => {
  const cs = useContext(CS);
  const [newGivenValue, setNewGivenValue] = useState<number>(0);
  const [changeOfMod, setChangeOfMod] = useState<boolean>(false);

  const newValue = () => {
    cs.spellmods(props.title, newGivenValue.toString());
    setChangeOfMod(false);
  };

  return (
    <div className={styles.modifier_solo_view}>
      {!changeOfMod ? (
        <span
          onClick={() => setChangeOfMod(true)}
          className={styles.modifier_value}
        >
          {cs.spell_mod[props.title]}
        </span>
      ) : (
        <input
          type="number"
          autoFocus={true}
          onBlur={newValue}
          onChange={(e) => setNewGivenValue(Number(e.target.value))}
        ></input>
      )}
      <span>{props.title}</span>
    </div>
  );
};

export default Modifiers;
