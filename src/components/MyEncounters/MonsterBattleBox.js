import React, { useState } from "react";
import ImmunityesModal, { DeathModal, StatsModal } from "./EncounterModals";
import HealthPool from "./EncounterUI/HealthPool";
import Initiative from "./EncounterUI/Initiative";
import ModalMonsterText from "../UI/ModalMonsterText";
import ImageComponent from "../UI/ImageComponent";

import styles from "./BattleScreen.module.css";

export default function MonsterBattleBox(props) {
  const [isShown, setIsShown] = useState(false);
  const [isDead, setDead] = useState(false);
  const [isRead, setReading] = useState(false);
  const [playerArmorClass, setPlayerArmorClass] = useState(true);
  const [playerGivenAc, setPlayerGivenAc] = useState(0);

  const openInputToGiveAc = () => {
    setPlayerArmorClass(false);
  };
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
      {!props.pleyers && isRead && (
        <ModalMonsterText
          onClick={removeModal}
          monsterStats={props.stats}
        ></ModalMonsterText>
      )}

      {!props.players ? (
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
              Level:{props.players.level}
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
            <span className={styles.stat_text__style}>AC: </span>
            {!props.players ? (
              <span className={styles.stat_text__style}>
                {props.stats["Armor Class"].value}
              </span>
            ) : playerArmorClass ? (
              <span
                onClick={openInputToGiveAc}
                className={styles.stat_text__style}
              >
                {playerGivenAc}
              </span>
            ) : (
              <input
                autoFocus={true}
                onChange={giveArmorClass}
                onBlur={rememberAcValue}
                className={styles.stat_text__style}
                value={playerGivenAc}
              ></input>
            )}
          </div>
          {!props.players ? (
            <HealthPool
              onChange={deathTraker}
              hp={props.stats["Hit Points"].hp}
            ></HealthPool>
          ) : (
            <HealthPool
              onChange={deathTraker}
              player="player"
              hp={0}
            ></HealthPool>
          )}

          <Initiative></Initiative>
        </div>
      )}
    </div>
  );
}
