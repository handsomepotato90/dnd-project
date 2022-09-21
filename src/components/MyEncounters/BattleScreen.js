import React, { useEffect, useState } from "react";
import styles from "./BattleScreen.module.css";
import MonsterBattleBox from "./MonsterBattleBox";
import { useHttpClient } from "../hooks/http-hook";

export default function BattleScreen() {
  const { sendRequest } = useHttpClient();
  const [fullStats, setStats] = useState([]);
  const url = window.location.href.split("battle_scr/");

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          `http://localhost:5000/battle_scr/${url[1]}`
        );
        const control = [];
        resData.forEach((element) => {
          control.push(...element);
          setStats([...control]);
        });
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest,url]);

  return (
    <div className={styles.display__style}>
      {fullStats.map((stats, i) => (
        <MonsterBattleBox key={i} stats={stats}></MonsterBattleBox>
      ))}
    </div>
  );
}
