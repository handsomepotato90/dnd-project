import { useState, useEffect, useContext } from "react";
import CS from "../../../../../store/CS-context";
import styles from "./Actions.module.css";
import ActionsWeapons from "./ActionsWeapons";

export default function Actions() {
  const [addWeapon, setAddWeapon] = useState(false);
  const [type, setType] = useState(false);
  const [range, setRange] = useState(false);
  const [hit, setHit] = useState(false);
  const [damage, setDamage] = useState(false);
  const [weapons, setWeapons] = useState([]);
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const cs = useContext(CS);

  useEffect(() => {
    setWeapons([...cs.weapons]);
  }, [cs.weapons]);

  const openAddWeapon = (e) => {
    setCordinate({ x: e.clientX, y: e.clientY });
    setAddWeapon(true);
  };
  const addWeaponToList = () => {
    cs.addWeapons(type, range, hit, damage);
    // setWeapons(
    //   weapons.concat(
    //     <ActionsWeapons
    //       type={type}
    //       range={range}
    //       hit={hit}
    //       damage={damage}
    //     ></ActionsWeapons>
    //   )
    // );
    setAddWeapon(false);
  };
  return (
    <div className={`overflowing  ${styles.weapon_holder}`}>
      <div>
        <div className={styles.title_for_content}>Actions</div>
        <div>
          <div className={styles.wepons_desinghn}>
            <div className="red_text">ATTACK</div>
            <div className="red_text">RANGE</div>
            <div className="red_text">HIT / DC</div>
            <div className="red_text">DAMAGE</div>
          </div>
          <div className={`${styles.weapon_boxes_holder}`}>
            {weapons.map((e, i) => {
              return (
                <ActionsWeapons
                  key={i}
                  type={e.type}
                  range={e.range}
                  hit={e.hit}
                  damage={e.damage}
                ></ActionsWeapons>
              );
            })}
          </div>
          {addWeapon && (
            <div
              style={{
                marginLeft: cordinate.x,
                marginTop: cordinate.y - 350,
              }}
              className={styles.weapon_small_window}
            >
              <span>Type</span>
              <input onChange={(e) => setType(e.target.value)}></input>
              <span>Range</span>
              <input onChange={(e) => setRange(e.target.value)}></input>
              <span>Hit/DC</span>
              <input onChange={(e) => setHit(e.target.value)}></input>
              <span>Damage</span>
              <input onChange={(e) => setDamage(e.target.value)}></input>
              <button onClick={() => setAddWeapon(false)}>Cancel</button>
              <button onClick={addWeaponToList}>Add Weapon</button>
            </div>
          )}
          <button className={styles.add_button_weapons} onClick={openAddWeapon}>
            Add New Weapon
          </button>
        </div>
      </div>
      <div className={styles.other_actions_big}>
        <div className={styles.title_for_content}>Actions in Combat</div>
        <span className={styles.other_actions}>
          Attack, Cast a Spell, Dash, Disengage, Dodge, Grapple, Help, Hide,
          Improvise, Ready, Search, Shove, Use an Object
        </span>
      </div>
    </div>
  );
}
