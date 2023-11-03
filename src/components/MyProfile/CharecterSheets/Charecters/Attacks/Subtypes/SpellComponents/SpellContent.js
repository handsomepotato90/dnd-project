import { useState } from "react";
import Spell from "./Spell";
import styles from "./SpellComponents.module.css";

export default function SpellContent(props) {
  const [spellArray, setSpellArray] = useState(props.spellList);

  const addNewSpell = (spell) => {
    setSpellArray([...spellArray, spell]);
  };

  return (
    <div>
      <span className={styles.general_spell_title}>{props.display}</span>
      <div className={styles.spells_display_box}>
        {spellArray.map((e, i) => {
          return (
            <Spell search={false} lvl={props.display} key={i} spell={e}></Spell>
          );
        })}
        <Spell
          newSpell={addNewSpell}
          search={false}
          lvl={props.display}
        ></Spell>
      </div>
    </div>
  );
}
