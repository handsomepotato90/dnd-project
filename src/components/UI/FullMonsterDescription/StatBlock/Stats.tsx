import React from "react";
import styles from "../mainstyling.module.css";

interface StatsProps {
  str: number;
  str_mod: string;
  dex: number;
  dex_mod: string;
  con: number;
  con_mod: string;
  int: number;
  int_mod: string;
  wis: number;
  wis_mod: string;
  cha: number;
  cha_mod: string;
}

const Stats: React.FC<StatsProps> = ({
  str,
  str_mod,
  dex,
  dex_mod,
  con,
  con_mod,
  int,
  int_mod,
  wis,
  wis_mod,
  cha,
  cha_mod,
}) => {

  return (
    <div className={styles.table__styling}>
      <div className={styles.table__boxes}>
        <div>STR</div>
        <div>{str} {str_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>DEX</div>
        <div>{dex} {dex_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>CON</div>
        <div>{con} {con_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>INT</div>
        <div>{int} {int_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>WIS</div>
        <div>{wis} {wis_mod}</div>
      </div>
      <div className={styles.table__boxes}>
        <div>CHA</div>
        <div>{cha} {cha_mod}</div>
      </div>
    </div>
  );
};

export default Stats;
