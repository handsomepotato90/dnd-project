import { useState, useEffect, useContext } from "react";
import CS from "../../../../../store/CS-context";
import useWindowSize from "../../../../../hooks/screensize-hook";

import styles from "./Actions.module.css";

export default function AddWeapon(props: { type: string; range: string; hit: string; damage: string; coordinateX: number; coordinateY: number; action: string; position: number; closeWindow: (arg0: boolean) => void; }) {
  const [type, setType] = useState(props.type);
  const [range, setRange] = useState(props.range);
  const [hit, setHit] = useState(props.hit);
  const [damage, setDamage] = useState(props.damage);
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const cs = useContext(CS);
  const size = useWindowSize();

  const position = (size.width ?? 0) > 600 ? cordinate.x : 0;
  const styleWidth = (size.width ?? 0) > 600 ? null : (size.width ?? 0) - 20;

  useEffect(() => {
    setCordinate({ x: props.coordinateX, y: props.coordinateY });
  }, [props.coordinateX, props.coordinateY]);

  const addWeaponToList = () => {
    if (props.action === "add") {
      cs.addWeapons(type, range, parseInt(hit), damage);
    }
    if (props.action === "edit") {
      const weaponIndex = props.position;

      const updatedWeapons = cs.weapons.map((weapon, index) => {
        if (index === weaponIndex) {
          return {
            type: type,
            range: range,
            hit: hit,
            damage: damage,
          };
        } else {
          return weapon;
        }
      });

      cs.setWeapons([...updatedWeapons]);
    }
    props.closeWindow(false);
  };
  const closeWindow = () => {
    props.closeWindow(false);
  };
  return (
    <div
      style={{
        marginLeft: position,
        marginTop: cordinate.y - 350,
      }}
      className={styles.weapon_small_window}
    >
      <span>Type</span>
      <input
        onChange={(e) => setType(e.target.value)}
        value={type}
      ></input>
      <span>Range</span>
      <input
        onChange={(e) => setRange(e.target.value)}
        value={range}
      ></input>
      <span>Hit/DC</span>
      <input
        onChange={(e) => setHit(e.target.value)}
        value={hit}
      ></input>
      <span>Damage</span>
      <input
        onChange={(e) => setDamage(e.target.value)}
        value={damage}
      ></input>
      <button onClick={closeWindow}>Cancel</button>
      <button onClick={addWeaponToList}>Add Weapon</button>
    </div>
  );
}
