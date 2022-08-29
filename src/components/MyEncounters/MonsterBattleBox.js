import React, { useState } from "react";
import ImmunityesModal, { DeathModal } from "./EncounterModals";
import HealthPool from "./EncounterUI/HealthPool";
import Initiative from "./EncounterUI/Initiative";
import styles from "./BattleScreen.module.css";

export default function MonsterBattleBox(props) {
  const [isShown, setIsShown] = useState(false);
  const [isDead, setDead] = useState(false);
  let hp = props.stats.hp.split(" ");
  let ac = props.stats.AC.split(" ");

  const deathTraker = (state) => {
    setDead(state);
    setIsShown(false);
  };

  return (
    <div className={styles.battle_box}>
      <div
        className={styles.encounter_box__style}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {(isDead && <DeathModal></DeathModal>) ||
          (isShown && (
            <ImmunityesModal
              conI={props.stats.conImm}
              dmgI={props.stats.dmgImm}
              dmgR={props.stats.dmgRes}
              dmgV={props.stats.dmgVul}
            ></ImmunityesModal>
          ))}
        <span className={styles.encounter_name__style}>{props.stats.name}</span>
        <img
          className={styles.image__style}
          src={props.stats.img}
          alt="monster"
        ></img>
      </div>
      <div className={styles.stat_battle_box}>
        <div>
          <span className={styles.stat_text__style}>AC:</span>
          <span className={styles.stat_text__style}>{ac[0]}</span>
        </div>
        <HealthPool onChange={deathTraker} hp={hp[0]}></HealthPool>
        <Initiative></Initiative>
      </div>
    </div>
  );
}
