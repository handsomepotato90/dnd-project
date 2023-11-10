import { useState, useContext, useEffect } from "react";
import CS from "../../../../../../store/CS-context";

import styles from "./Short.module.css";

const classHitDie = {
  Sorcerer: 6,
  Wizard: 6,
  Artificer: 8,
  Bard: 8,
  Cleric: 8,
  Druid: 8,
  Monk: 8,
  Rogue: 8,
  Warlock: 8,
  Fighter: 10,
  Paladin: 10,
  Ranger: 10,
  Barbarian: 12,
};

export default function DiceHeal(props) {
  const cs = useContext(CS);
  const [healForDice, sethealForDice] = useState(0);
  const [healedFor, setHealedFor] = useState(0);
  const [dispalyHeal, setDisplayHeal] = useState(false);
  const [hitDie, setHitDie] = useState();
  const [animationIsOpen,setAnimationIsOpen] = useState(false)
  useEffect(() => {
    for (let i = 0; i < cs.classes.length; i++) {
      const element = cs.classes[i];
      if (element.class === props.dieArray.class) {
        setHitDie(element.hitDie);
      }
    }
  }, [cs.classes]);

  const healShort = () => {
    let healValue = 0;
    if (parseInt(hitDie) < parseInt(healForDice)) {
    } else {
      for (let i = 0; i < parseInt(healForDice); i++) {
        healValue += Math.floor(
          Math.random() * parseInt(classHitDie[props.dieArray.class]) +
            1 +
            parseInt(cs.stats.Con.modifire)
        );
      }
      sethealForDice(0);
      setHealedFor(healValue);
      cs.healFor(props.dieArray.class, hitDie - healForDice, healValue);
      setHitDie(hitDie - healForDice);
      setDisplayHeal(true);
      setAnimationIsOpen(true)
      setTimeout(() => {
        setAnimationIsOpen(false);
      }, 2000);
      setTimeout(() => {
        setDisplayHeal(false);
      }, 2500);
    }
  };

  return (
    <div className={styles.hit_die_general__style}>
      <div className={styles.text_hit_die_general__style}>
        {" "}
        <span className={styles.class__style}> {props.dieArray.class}</span>
        <span>
          <span className={`green_text ${styles.current_left_die__style}`}>
            {hitDie}
          </span>
          /{props.dieArray.level}
        </span>
        <span>Hit Die {`(1d${classHitDie[props.dieArray.class]})`}</span>
      </div>

      <div className={styles.input_submit__style}>
        <input
          type="number"
          onChange={(e) => sethealForDice(e.target.value)}
          value={healForDice}
        ></input>
        <button className={`button`} onClick={healShort}>
          Heal
        </button>
      </div>
      {dispalyHeal && (
      <div className={`${animationIsOpen ? styles.modal_slide_down : styles.modal_slide_up} ${styles.timed_pop_up_healed}`}>
        <span className={styles.short_pop_up_text}>Healed for:</span>
        <span className={styles.short_pop_up_value}>{healedFor}</span>
      </div>
      )}
    </div>
  );
}
