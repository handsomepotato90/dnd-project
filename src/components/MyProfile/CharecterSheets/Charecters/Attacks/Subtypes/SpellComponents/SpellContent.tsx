import React, { useState, useEffect, useContext, useCallback } from "react";
import CS from "../../../../../../store/CS-context";
import Spell from "./Spell";
import styles from "./SpellComponents.module.css";
import SpellSlot from "./SpellSlot";

import SpellsTypes from "../../../../../../types/SpellsTypes";

const SpellContent: React.FC<{ display: string }> = (props) => {
  const cs = useContext(CS);
  const [spellSlotsHolder, setSpellSlotsHolder] = useState({});
  const [spellArray, setSpellArray] = useState<SpellsTypes[]>([]);
  const [slots, setSlots] = useState(cs.spells[props.display].slots);

  const addNewSpell = (spell: SpellsTypes) => {
    setSpellArray([...spellArray, spell]);
  };
  const removeSpell = (spell: SpellsTypes) => {
    const indexOfSpell = spellArray.indexOf(spell);

    spellArray.splice(indexOfSpell, 1);
    setSpellArray([...spellArray]);
  };
  const spellSlots = useCallback(() => {
    setSlots(slots + 1);
    cs.spellSetter(props.display, "add");
  }, [slots, cs.spellSetter, props.display]);

  const removeSlots = useCallback(() => {
    setSlots(slots - 1);
    cs.spellSetter(props.display, "remove");
  }, [slots, cs.spellSetter, props.display]);

  useEffect(() => {
    setSpellSlotsHolder(cs.spells[props.display].slots);
  }, [
    cs.spells[props.display].slots,
    removeSlots,
    spellSlots,
    cs.spells,
    props.display,
  ]);

  useEffect(() => {
    setSpellArray([...cs.spells[props.display].spells]);
  }, [props.display, cs.spells]);

  return (
    <div>
      <div className={styles.general_spell_title}>
        {props.display}
        {props.display !== "Can" ? (
          <>
            <div>
              <div className={styles.spell_btn_holders}>
                <span className={styles.title_holder}>Spell Slots</span>
                <div className={styles.spell_add_remove_btn_holders}>
                  {typeof spellSlotsHolder === 'number' && spellSlotsHolder <= 20 ? (
                    <span
                      className={`green ${styles.add_slot_btn} ${styles.btn_text}`}
                      onClick={spellSlots}
                    >
                      ADD
                    </span>
                  ) : null}
                  {typeof spellSlotsHolder === 'number' && spellSlotsHolder > 0 ? (
                    <span
                      className={`red ${styles.btn_text}`}
                      onClick={removeSlots}
                    >
                      REMOVE
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
            <div className={styles.slots_display}>
              {[...Array(spellSlotsHolder)].map((_e, i) => (
                <SpellSlot key={i}></SpellSlot>
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className={styles.spells_display_box}>
        {spellArray.map((e, i) => {
          return (
            <Spell
              remove={removeSpell}
              search={false}
              lvl={props.display}
              key={i}
              spell={e}
            ></Spell>
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

export default SpellContent;
