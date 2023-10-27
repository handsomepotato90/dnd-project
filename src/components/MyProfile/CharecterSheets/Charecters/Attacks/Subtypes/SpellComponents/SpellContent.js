import Spell from "./Spell";

import styles from "./SpellComponents.module.css";

export default function SpellContent(props) {
  const spellArray = props.spellList;
  console.log(spellArray);
  return (
    <div>
      <span className={styles.general_spell_title}>{props.display}</span>
      <div className={styles.spells_display_box}>
        {spellArray.map((e, i) => {
          return <Spell search={false} lvl={props.display} key={i} spell={e}></Spell>;
        })}
        <Spell search={false} lvl={props.display}></Spell>
      </div>
    </div>
  );
}
