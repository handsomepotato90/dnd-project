import React, { useState } from "react";
import ImmunityesModal, { DeathModal } from "./EncounterModals";
import HealthPool from "./EncounterUI/HealthPool";
import Initiative from "./EncounterUI/Initiative";
import ModalMonsterText from "../UI/ModalMonsterText";
import styles from "./BattleScreen.module.css";

export default function MonsterBattleBox(props) {
  const [isShown, setIsShown] = useState(false);
  const [isDead, setDead] = useState(false);
  const [isRead, setReading] = useState(false);

  const deathTraker = (state) => {
    setDead(state);
    setIsShown(false);
  };

  const renderModal = () => {
    setReading(true);
  };
  const removeModal = (state) => {
    setReading(state);
  };
  return (
    <div className={styles.battle_box}>
      {isRead && (
        <ModalMonsterText
          onClick={removeModal}
          monsterStats={props.stats}
        ></ModalMonsterText>
      )}
      <div
        onClick={renderModal}
        className={styles.encounter_box__style}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {(isDead && <DeathModal></DeathModal>) ||
          (isShown && (
            <ImmunityesModal
              conI={props.stats["Condition Immunities"]}
              dmgI={props.stats["Damage Immunities"]}
              dmgR={props.stats["Damage Resistances"]}
              dmgV={props.stats["Damage Vulnerabilities"]}
            ></ImmunityesModal>
          ))}
        <span className={styles.encounter_name__style}>{props.stats.name}</span>
        <img
          className={styles.image__style}
          src={props.stats.img_url}
          alt="monster"
        ></img>
      </div>
      <div className={styles.stat_battle_box}>
        <div>
          <span className={styles.stat_text__style}>AC:</span>
          <span className={styles.stat_text__style}>
            {props.stats["Armor Class"].value}
          </span>
        </div>
        <HealthPool
          onChange={deathTraker}
          hp={props.stats["Hit Points"].hp}
        ></HealthPool>
        <Initiative></Initiative>
      </div>
    </div>
  );
}
