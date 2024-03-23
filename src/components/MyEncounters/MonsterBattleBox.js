import React, { useState } from "react";
import ImmunityesModal, { DeathModal, StatsModal } from "./EncounterModals";
import HealthPool from "./EncounterUI/HealthPool";
import Initiative from "./EncounterUI/Initiative";
import ModalMonsterText from "../UI/ModalMonsterText";
import ImageComponent from "../UI/ImageComponent";

import styles from "./BattleScreen.module.css";

//if you are providing 2 children elements (boolean):
// childrenTopAndBottom={false}
//
// If you need the side bar with the stats and health calculations (boolean):
// battleSideBar={false}
//
//creature object you need to provide
// stats={monster}
//
//Modal with the stats of the creature (Name,AC, etc.)
// modalStats={true}
//
//Size for the element
// width="250px"
// height="250px"

export default function MonsterBattleBox(props) {
  const [isShown, setIsShown] = useState(false);
  const [isDead, setDead] = useState(false);
  const [isRead, setReading] = useState(false);
  const [playerArmorClass, setPlayerArmorClass] = useState(true);
  const [playerGivenAc, setPlayerGivenAc] = useState(0);

  const rememberAcValue = () => {
    setPlayerArmorClass(true);
  };
  const giveArmorClass = (event) => {
    setPlayerGivenAc(event.target.value);
  };
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
      {!props.stats.level && isRead && (
        <ModalMonsterText
          onClick={removeModal}
          monsterStats={props.stats}
        ></ModalMonsterText>
      )}

      {!props.stats.level ? (
        <div style={{ textAlign: "right" }}>
          {/*######################## MONSTER NAME ####################### */}
          {props.childrenTopAndBottom ? props.children[0] : props.children}

          <div
            onClick={renderModal}
            className={`${styles.encounter_box__style} `}
            style={{ width: `${props.width}`, height: `${props.height}` }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {(isDead && (
              <DeathModal
                width={props.width}
                height={props.height}
              ></DeathModal>
            )) ||
              (isShown && !props.modalStats ? (
                <ImmunityesModal
                  width={props.width}
                  height={props.height}
                  conI={props.stats["Condition Immunities"]}
                  dmgI={props.stats["Damage Immunities"]}
                  dmgR={props.stats["Damage Resistances"]}
                  dmgV={props.stats["Damage Vulnerabilities"]}
                ></ImmunityesModal>
              ) : (
                isShown &&
                props.modalStats && (
                  <StatsModal
                    stats={props.stats}
                    width={props.width}
                    height={props.height}
                  ></StatsModal>
                )
              ))}
            <ImageComponent
              size="large"
              src={props.stats.img_url}
              alt="monster"
            ></ImageComponent>
          </div>
          {props.childrenTopAndBottom ? props.children[1] : null}
        </div>
      ) : (
        //PC battle box
        <div
          className={styles.encounter_box__style}
          style={{ width: `${props.width}`, height: `${props.height}` }}
        >
          {isDead && (
            <DeathModal width={props.width} height={props.height}></DeathModal>
          )}

          <div
            className={styles.content_pc__style}
            style={{ width: `${props.width}`, height: `${props.height}` }}
          >
            <input
              className={styles.input_pc__style}
              placeholder=" PC NAME"
            ></input>
            <span></span>
            <span className={styles.level__style}>
              Level:{props.stats.level}
            </span>
          </div>

          {
            <ImageComponent
              size="large"
              src="https://doubleproficiency.com/wp-content/uploads/2018/02/mega-fantasy-avatar-kronis.png"
              alt="player"
            ></ImageComponent>
          }
        </div>
      )}
      {!props.battleSideBar || (
        <div className={styles.stat_battle_box}>
          <div>
            <span className={`${styles.text__style} ${styles.health__styling}`}>
              AC: {!props.stats.level && props.stats["Armor Class"].value}{" "}
            </span>
            {props.stats.level && (
              <div className={styles.input__wraper}>
                <input
                  autoFocus={true}
                  onChange={giveArmorClass}
                  onBlur={rememberAcValue}
                  className={`${styles.input__style}`}
                  value={playerGivenAc}
                ></input>
              </div>
            )}
          </div>
          {!props.stats.level ? (
            <>
              <HealthPool
                onChange={deathTraker}
                hp={props.stats["Hit Points"].hp}
              ></HealthPool>
              <Initiative
                initiative={props.stats.initiative}
                dexMod={props.stats.DEX_mod}
              ></Initiative>
            </>
          ) : (
            <>
              <HealthPool
                onChange={deathTraker}
                player="player"
                hp={0}
              ></HealthPool>
              <Initiative initiative={props.stats.initiative}></Initiative>
            </>
          )}
        </div>
      )}
    </div>
  );
}
