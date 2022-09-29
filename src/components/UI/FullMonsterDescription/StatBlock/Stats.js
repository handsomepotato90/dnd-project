import React from "react";
import styles from "../mainstyling.module.css"

export default function Stats(props) {
  return (
    <div className={styles.table__styling}>
      <div className={styles.table__boxes}>
        <div>STR</div>
        <div>{props.str}{props.str_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>DEX</div>
        <div>{props.dex}{props.dex_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>CON</div>
        <div>{props.con}{props.con_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>INT</div>
        <div>{props.int}{props.int_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>WIS</div>
        <div>{props.wis}{props.wis_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>CHA</div>
        <div>{props.cha}{props.cha_mod}</div>
      </div>
    </div>
  );
}
