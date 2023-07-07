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
  const [playerArmorClass, setPlayerArmorClass] = useState(true);
  const [playerGivenAc, setPlayerGivenAc] = useState(0)

  const openInputToGiveAc = () =>{
    setPlayerArmorClass(false)
  }
  const rememberAcValue = () =>{
    setPlayerArmorClass(true)
  }
  const giveArmorClass = (event) =>{
    setPlayerGivenAc(event.target.value)
  }
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
      {!props.pleyers && isRead && (
        <ModalMonsterText
          onClick={removeModal}
          monsterStats={props.stats}
        ></ModalMonsterText>
      )}
     {(!props.players ? <div
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
      </div> : 
      //PC battle box
      <div
        className={styles.encounter_box__style}
      >
        {(isDead && <DeathModal></DeathModal>)}
        {(<input placeholder=" PC NAME" className={`${styles.encounter_name__style}  ${styles.pc_name_style}`}></input>)}
        <h2 className={`${styles.encounter_name__style}  ${styles.pc_level__style}`}>Level: <span>{props.players.level}</span></h2>
        

       {(<img
          className={styles.image__style}
          src="https://doubleproficiency.com/wp-content/uploads/2018/02/mega-fantasy-avatar-kronis.png"
          alt="player"
        ></img>)}
        
      </div>
      )}
      <div className={styles.stat_battle_box}>
        <div>
          <span className={styles.stat_text__style}>AC: </span>
          {(!props.players ? <span className={styles.stat_text__style}>{props.stats["Armor Class"].value}
          </span> :
               playerArmorClass ? <span onClick={openInputToGiveAc} className={styles.stat_text__style}>{playerGivenAc}</span> :<input autoFocus={true} onChange={giveArmorClass} onBlur={rememberAcValue} className={styles.stat_text__style} value={playerGivenAc}></input>)}
        </div>
       {(!props.players ? <HealthPool
          onChange={deathTraker}
          hp={props.stats["Hit Points"].hp}
        ></HealthPool> : <HealthPool onChange={deathTraker} player="player" hp={0}  ></HealthPool> )}
        
        <Initiative></Initiative>
      </div>
    </div>
  );
}
