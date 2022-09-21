import React, {useContext, useEffect } from "react";
import MainMonsterBox from "../../Voting/MainMonsterBox";
import MonsterXp from "../../store/monsterXp-context";
import styles from "./MonsterLibrary.module.css";
import { useHttpClient } from "../../hooks/http-hook";

export default function MonsterLibrary() {
  const { sendRequest } = useHttpClient();
  const mxp = useContext(MonsterXp);
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest("http://localhost:5000/build_encounter");
        mxp.setMonsters([...resData]);
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest]);
  
const loadMore = () =>{
  mxp.setMonsterTypeState({...mxp.monsterTypes, limit: mxp.monsterTypes.limit + 10})
}
  return (
    <>
      {/* <input value="Search"></input> */}
      {mxp.monsters.map((monster, i) => (
        <MainMonsterBox key={i} monsterStats={monster}>
          <button
            className={styles.btn_add__style}
            onClick={() => mxp.selectMonster(monster)}
          >
            + ADD
          </button>
        </MainMonsterBox>
      ))}
      <button className={styles.btn_load_more} onClick={loadMore}>Load More</button>
    </>
  );
}
