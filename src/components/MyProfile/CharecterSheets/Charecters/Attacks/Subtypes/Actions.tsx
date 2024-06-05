import React, { useState, useEffect, useContext } from "react";
import CS from "../../../../../store/CS-context";
import styles from "./Actions.module.css";
import ActionsWeapons from "./ActionsWeapons";
import AddWeapon from "./AddWeapon";

import { Weapon } from "../../../../../types/CSTypes";

const Actions: React.FC = () => {
  const [addWeapon, setAddWeapon] = useState(false);
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const cs = useContext(CS);

  useEffect(() => {
    setWeapons([...cs.weapons]);
  }, [cs.weapons]);

  const closeWindow = () => {
    setAddWeapon(false);
  };
  const openAddWeapon = (e: { clientX: number; clientY: number }) => {
    setAddWeapon(true);
    setCordinate({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className={`overflowing  ${styles.weapon_holder}`}>
      <div>
        <div className={styles.title_for_content}>Actions</div>
        <div>
          <div className={styles.wepons_desinghn}>
            <div></div>
            <div className="red_text">ATTACK</div>
            <div className="red_text">RANGE</div>
            <div className="red_text">HIT / DC</div>
            <div className="red_text">DAMAGE</div>
            <div></div>
          </div>
          <div className={`${styles.weapon_boxes_holder}`}>
            {weapons.map((e, i) => {
              return (
                <ActionsWeapons
                  key={i}
                  place={i}
                  type={e.type}
                  range={e.range}
                  hit={e.hit}
                  damage={e.damage}
                ></ActionsWeapons>
              );
            })}
          </div>
          {addWeapon && (
            <AddWeapon
              action={"add"}
              coordinateX={cordinate.x}
              coordinateY={cordinate.y}
              closeWindow={closeWindow}
              type={""}
              range={""}
              hit={""}
              damage={""}
              position={0}
            ></AddWeapon>
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
};

export default Actions;
