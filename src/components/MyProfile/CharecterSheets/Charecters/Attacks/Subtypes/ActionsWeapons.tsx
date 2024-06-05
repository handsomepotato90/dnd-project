import { useState, useContext} from "react";
import CS from "../../../../../store/CS-context";
import { SvgComponent } from "../../../../../Navigation/Navigation";
import Edit from "../../../../../../icons/pencil.svg";
import Delete from "../../../../../../icons/trashcan.svg";

import styles from "./Actions.module.css";
import AddWeapon from "./AddWeapon";

export default function ActionsWeapons(props: { place: number; type: string; range: string; hit: string; damage: string;}): JSX.Element {
  const [editWeapon, setEditWeapon] = useState(false);
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const cs = useContext(CS);
  const removeWeapon = () => {
    const weapons = [...cs.weapons];
    weapons.splice(props.place, 1);
    cs.setWeapons(weapons);
  };
  const closeWindow = () => {
    setEditWeapon(false);
  };

  const editWeapons = (e: {clientX: number; clientY: number; }) => {
    setCordinate({ x: e.clientX, y: e.clientY });
    setEditWeapon(true);
  };

  return (
    <>
      <div className={`${styles.weapon_style} ${styles.wepons_desinghn}`}>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={editWeapons}
        >
          <SvgComponent
            Image={Edit}
            height="25"
            color="white"
            width="60"
          ></SvgComponent>
        </div>
        <span className={styles.normal_text_weapon}>{props.type}</span>
        <span className={styles.normal_text_weapon}>{props.range}</span>
        <button className={styles.dice_trow}>{props.hit}</button>
        <button className={styles.dice_trow}>{props.damage}</button>
        <div style={{ cursor: "pointer" }} onClick={removeWeapon}>
          <SvgComponent
            Image={Delete}
            height="25"
            color="black"
            width="40"
          ></SvgComponent>
        </div>
      </div>
      {editWeapon && (
        <AddWeapon
          position={props.place}
          action={"edit"}
          type={cs.weapons[props.place].type}
          range={cs.weapons[props.place].range}
          hit={cs.weapons[props.place].hit}
          damage={cs.weapons[props.place].damage}
          coordinateX={cordinate.x}
          coordinateY={cordinate.y}
          closeWindow={closeWindow}
        ></AddWeapon>
      )}
    </>
  );
}
