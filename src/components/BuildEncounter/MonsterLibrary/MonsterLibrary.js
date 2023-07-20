import React, { useContext, useEffect } from "react";
import MainMonsterBox from "../../Voting/MainMonsterBox";
import MonsterXp from "../../store/monsterXp-context";
import { useHttpClient } from "../../hooks/http-hook";
import MonsterBattleBox from "../../MyEncounters/MonsterBattleBox";

import styles from "./MonsterLibrary.module.css";

export default function MonsterLibrary(props) {
  const { sendRequest } = useHttpClient();
  const mxp = useContext(MonsterXp);
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/build_encounter"
        );
        mxp.setMonsters([...resData]);
      } catch (err) {}
    };

    fetchMonsters();
  }, [sendRequest]);

  return (
    <>
      {mxp.monsters.map((monster, i) => (
        <MonsterBattleBox
          key={i}
          voting={false}
          library={true}
          stats={monster}
          modalStats={true}
          width="14vw"
          height="28vh"
        >
          <span className={styles.name_plate__style}>{monster.name}</span>
          <button
            className={styles.btn_add__style}
            onClick={() => mxp.selectMonster(monster)}
          >
            + ADD
          </button>
        </MonsterBattleBox>
      ))}
    </>
  );
}
