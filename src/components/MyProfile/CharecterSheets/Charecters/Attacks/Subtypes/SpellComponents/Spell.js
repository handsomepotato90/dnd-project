import { useState } from "react";
import SpellTextPopUp from "./SpellTextPopUp";

import styles from "./SpellComponents.module.css";
import SpellSearch from "./SpellSearch";
export default function Spell(props) {
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const [spellDescription, setSpellDescription] = useState(false);
  const [requestSpells, setRequestSpells] = useState(false);

  const removePopUp = (rem) => {
    setSpellDescription(rem);
  };
  const hideSpellSearch= (rem) =>{
    setRequestSpells(rem)
  }
  return (
    <>
      {props.spell ? (
        <span
          onClick={(e) => {
            setSpellDescription(true);
            setCordinate({ x: e.clientX, y: e.clientY });
          }}
          className={`overflowing ${styles.one_spell_style}`}
        >
          {" "}
          {props.spell.name}
        </span>
      ) : (
        <div
          onMouseUp={(e) => {
            setRequestSpells(true);
            setCordinate({ x: e.clientX, y: e.clientY });
          }}
          className={`${styles.one_spell_style}`}
        >
          Add Spell
        </div>
      )}
      {spellDescription && props.spell && (
        <SpellTextPopUp
          onClick={removePopUp}
          search={props.search}
          x={cordinate.x}
          y={cordinate.y}
          name={props.spell.name}
          school={props.spell.school}
          casting_time={props.spell.casting_time}
          range={props.spell.range}
          components={props.spell.components}
          duration={props.spell.duration}
          class={props.spell.class}
          desc={props.spell.desc}
        ></SpellTextPopUp>
      )}
      {requestSpells && (
        <SpellSearch
          onClick={hideSpellSearch}
          x={cordinate.x}
          y={cordinate.y}
          lvl={props.lvl}
        ></SpellSearch>
      )}
    </>
  );
}
