import React, { useState } from "react";
import ImmunityesModal, { DeathModal, StatsModal } from "./EncounterModals";
import HealthPool from "./EncounterUI/HealthPool";
import Initiative from "./EncounterUI/Initiative";
import ModalMonsterText from "../UI/ModalMonsterText";
import ImageComponent from "../UI/ImageComponent";

import MonsterStats from "../types/MonsterStatsTypes";

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


interface MonsterBox{
  stats: MonsterStats;
  childrenTopAndBottom: boolean;
  width: string;
  height: string;
  modalStats: boolean;
  battleSideBar: boolean;
  children?: React.ReactNode;
  onClick?: (state: boolean) => void;
}

const MonsterBattleBox: React.FC<MonsterBox> = ({stats, childrenTopAndBottom, width, height, modalStats, battleSideBar, children})=> {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isDead, setDead] = useState<boolean>(false);
  const [isRead, setReading] = useState<boolean>(false);
  const [playerGivenAc, setPlayerGivenAc] = useState<number>(0);

  const renderChildren = Array.isArray(children) ? (
    childrenTopAndBottom ? children[0] : children
  ) : null;
  const renderSecondChild = Array.isArray(children) && childrenTopAndBottom ? children[1] : null;

  const giveArmorClass = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setPlayerGivenAc(parseInt(event.target.value));
  };

  const deathTraker = (state: boolean) => {
    setDead(state);
    setIsShown(false);
  };

  const renderModal = () => {
    setReading(true);
  };
  const removeModal = (state: boolean) => {
    setReading(state);
  };
  return (
    <div className={styles.battle_box}>
      {!stats.level && isRead && (
        <ModalMonsterText
        onClick={() => removeModal(false)}
          monsterStats={stats}
        ></ModalMonsterText>
      )}

      {!stats.level ? (
        <div style={{ textAlign: "right" }}>
          {/*######################## MONSTER NAME ####################### */}
          {renderChildren}

          <div
            onClick={renderModal}
            className={`${styles.encounter_box__style} `}
            style={{ width: `${width}`, height: `${height}` }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {(isDead && (
              <DeathModal
                width={width}
                height={height}
              ></DeathModal>
            )) ||
              (isShown && !modalStats ? (
                <ImmunityesModal
                  width={width}
                  height={height}
                  conI={stats["Condition Immunities"]}
                  dmgI={stats["Damage Immunities"]}
                  dmgR={stats["Damage Resistances"]}
                  dmgV={stats["Damage Vulnerabilities"]}
                ></ImmunityesModal>
              ) : (
                isShown &&
                modalStats && (
                  <StatsModal
                    stats={stats}
                    width={width}
                    height={height}
                  ></StatsModal>
                )
              ))}
            <ImageComponent
              size="large"
              src={stats.img_url}
              alt="monster"
            ></ImageComponent>
          </div>
          {renderSecondChild}
        </div>
      ) : (
        //PC battle box
        <div
          className={styles.encounter_box__style}
          style={{ width: `${width}`, height: `${height}` }}
        >
          {isDead && (
            <DeathModal width={width} height={height}></DeathModal>
          )}

          <div
            className={styles.content_pc__style}
            style={{ width: `${width}`, height: `${height}` }}
          >
            <input
              className={styles.input_pc__style}
              placeholder=" PC NAME"
            ></input>
            <span></span>
            <span className={styles.level__style}>
              Level:{stats.level}
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
      {!battleSideBar || (
        <div className={styles.stat_battle_box}>
          <div>
            <span className={`${styles.text__style} ${styles.health__styling}`}>
              AC: {!stats.level && stats["Armor Class"].value}{" "}
            </span>
            {stats.level && (
              <div className={styles.input__wraper}>
                <input
                  autoFocus={true}
                  onChange={giveArmorClass}
                  className={`${styles.input__style}`}
                  value={playerGivenAc}
                ></input>
              </div>
            )}
          </div>
          {!stats.level ? (
            <>
              <HealthPool
                onChange={deathTraker}
                hp={stats["Hit Points"].hp}
              ></HealthPool>
              <Initiative
                initiative={stats.initiative}
                dexMod={stats.DEX_mod}
              ></Initiative>
            </>
          ) : (
            <>
              <HealthPool
                onChange={deathTraker}
                player="player"
                hp={0}
              ></HealthPool>
              <Initiative initiative={stats.initiative} dexMod={'0'}></Initiative>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default MonsterBattleBox;