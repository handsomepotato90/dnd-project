import { useState, useEffect, useContext } from "react";
import CS from "../../../../../../store/CS-context";
import Spell from "./Spell";
import styles from "./SpellComponents.module.css";

export default function SpellContent(props) {
  const cs = useContext(CS);
  const [spellSlotsHolder, setSpellSlotsHolder] = useState({});
  const [spellArray, setSpellArray] = useState([]);
  const [slots, setSlots] = useState(cs.spells[props.display].slots);
  const addNewSpell = (spell) => {
    setSpellArray([...spellArray, spell]);
  };
  const spellSlots = () => {
    setSlots(slots + 1);
    cs.spellSetter(props.display, "add");
  };
  const removeSlots = () => {
    setSlots(slots - 1);
    cs.spellSetter(props.display, "remove");
  };

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
  }, [props.display,cs.spells]);
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
                  {spellSlotsHolder <= 20 ? (
                    <span
                      className={`green ${styles.add_slot_btn} ${styles.btn_text}`}
                      onClick={spellSlots}
                    >
                      ADD
                    </span>
                  ) : null}
                  {spellSlotsHolder > 0 ? (
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
              {[...Array(spellSlotsHolder)].map((e, i) => (
                <input type="radio" key={i}></input>
              ))}
            </div>
          </>
        ) : null}
      </div>
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
