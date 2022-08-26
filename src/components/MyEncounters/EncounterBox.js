import React from "react";
import {Link} from "react-router-dom";
import styles from "./EncounterBox.module.css"


export default function EncounterBox(props) {
    
  return (
    <Link to={`/battle_scr?enc_id=${props.id}`} className={styles.encounter_box__style}>
      <span className={styles.encounter_name__style}>{props.name}</span>
      <img className={styles.image__style} src={props.img} alt="monster"></img>
    </Link>
  );
}
