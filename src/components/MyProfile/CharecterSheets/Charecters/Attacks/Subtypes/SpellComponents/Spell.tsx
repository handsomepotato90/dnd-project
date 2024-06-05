import React, { useState, useContext, useEffect } from "react";
import SpellTextPopUp from "./SpellTextPopUp";
import { SvgComponent } from "../../../../../../Navigation/Navigation";
import styles from "./SpellComponents.module.css";
import SpellSearch from "./SpellSearch";
import add from "../../../../../../../icons/add.svg";
import remove from "../../../../../../../icons/reject.svg";
import CS from "../../../../../../store/CS-context";
import SpellsTypes from "../../../../../../types/SpellsTypes";

interface NewType {
  remove?(spell: {
    _id: string;
    name: string;
  }): unknown;
  newSpell?(spell: SpellsTypes): unknown;
  search: boolean;
  lvl: string;
  spell?: SpellsTypes;
}

const Spell: React.FC<NewType> = (props) => {
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const [spellDescription, setSpellDescription] = useState(false);
  const [requestSpells, setRequestSpells] = useState(false);
  const [contained, setContained] = useState(false);
  const cs = useContext(CS);

  useEffect(() => {
    if (
      props.search &&
      props.spell &&
      cs.spells[props.lvl].spell_ids.includes(props.spell._id)
    ) {
      setContained(true);
    }
  }, []);

  const removePopUp = (rem: boolean) => {
    setSpellDescription(rem);
  };

  const hideSpellSearch = (rem: boolean) => {
    setRequestSpells(rem);
  };

  const addSpell = (spell: SpellsTypes) => {
    setRequestSpells(false);
    if (props.newSpell) {
      props.newSpell(spell);
    }
  };

  const removeSpell = () => {
    if (props.remove && props.spell) {
      props.remove(props.spell);
      cs.removeSpell(props.spell._id, props.spell, props.lvl);
    }
  };

  return (
    <>
      {props.spell ? (
        <>
          <div className={`overflowing ${styles.one_spell}`}>
            <span
              onClick={(e) => {
                setSpellDescription(true);
                setCordinate({ x: e.clientX, y: e.clientY });
              }}
              style={{ color: contained ? "green" : undefined }}
              className={`overflowing ${styles.one_spell_style}`}
            >
              {`${contained ? "(Known) " : ""}${props.spell.name}`}
            </span>
            {!props.search && (
              <div onClick={removeSpell}>
                <SvgComponent
                  Image={remove}
                  height="20"
                  color="red"
                  width="20"
                ></SvgComponent>
              </div>
            )}
          </div>
        </>
      ) : (
        <div
          onMouseUp={(e) => {
            setRequestSpells(true);
            setCordinate({ x: e.clientX, y: e.clientY });
          }}
          className={`${styles.add_spell_style}`}
        >
          <SvgComponent
            Image={add}
            height="30"
            color="red"
            width="30"
          ></SvgComponent>
        </div>
      )}
      {spellDescription && props.spell && (
        <SpellTextPopUp
          onClick={removePopUp}
          search={props.search}
          x={cordinate.x}
          y={cordinate.y}
          spell={props.spell}
        ></SpellTextPopUp>
      )}
      {requestSpells && (
        <SpellSearch
          addSpellToList={addSpell}
          onClick={hideSpellSearch}
          x={cordinate.x}
          lvl={props.lvl}
        ></SpellSearch>
      )}
    </>
  );
};

export default Spell;
