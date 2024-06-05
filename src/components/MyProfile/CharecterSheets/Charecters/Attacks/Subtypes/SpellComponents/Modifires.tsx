import { useState, useContext } from "react";
import styles from "./SpellComponents.module.css";
import CS from "../../../../../../store/CS-context";

interface ModifiersProps {
  value: string;
  title: string;
}

export default function Modifiers(props: ModifiersProps) {
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
          {cs.spellMods[props.title]}
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
}
