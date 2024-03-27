import { useState, useEffect, useContext } from "react";
import CS from "../../../../../store/CS-context";
import useWindowSize from "../../../../../hooks/screensize-hook";

import styles from "./Actions.module.css";

export default function AddWeapon(props) {
  const [type, setType] = useState(false);
  const [range, setRange] = useState(false);
  const [hit, setHit] = useState(false);
  const [damage, setDamage] = useState(false);
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const cs = useContext(CS);
  const size = useWindowSize();

  const position = size.width > 600 ? cordinate.x : 0;
  const styleWidth = size.width > 600 ? null : size.width - 20;

  useEffect(() => {
    if (props.type !== false) {
      setType(props.type);
      setRange(props.range);
      setHit(props.hit);
      setDamage(props.damage);
    }
  }, [props.type, props.damage, props.hit, props.range]);

  useEffect(() => {
    setCordinate({ x: props.coordinateX, y: props.coordinateY });
  }, [props.coordinateX, props.coordinateY]);

  const addWeaponToList = () => {
    if (props.action === "add") {
      cs.addWeapons(type, range, hit, damage);
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
        width: styleWidth,
        marginLeft: position,
        marginTop: cordinate.y - 350,
      }}
      className={styles.weapon_small_window}
    >
      <span>Type</span>
      <input
        onChange={(e) => setType(e.target.value)}
        value={type !== false ? (type !== undefined ? type : "") : ""}
      ></input>
      <span>Range</span>
      <input
        onChange={(e) => setRange(e.target.value)}
        value={range !== false ? (range !== undefined ? range : "") : ""}
      ></input>
      <span>Hit/DC</span>
      <input
        onChange={(e) => setHit(e.target.value)}
        value={hit !== false ? (hit !== undefined ? hit : "") : ""}
      ></input>
      <span>Damage</span>
      <input
        onChange={(e) => setDamage(e.target.value)}
        value={damage !== false ? (damage !== undefined ? damage : "") : ""}
      ></input>
      <button onClick={closeWindow}>Cancel</button>
      <button onClick={addWeaponToList}>Add Weapon</button>
    </div>
  );
}
