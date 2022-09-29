import React from "react";
import { Link } from "react-router-dom";
import styles from "./EncounterBox.module.css";

export default function EncounterBox(props) {
  const style = {
    backgroundImage:`url(${props.monsters[0].img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  return (
    <Link
      to={`/battle_scr/${props.id}`}
      className={styles.encounter_box__style}
    >
      <div style={style} className={styles.image__style}>
        <span className={styles.encounter_name__style}>{props.name}</span>
      </div>
    </Link>
  );
}
