import React, { useState, useEffect } from "react";
import { useHttpClient } from "../hooks/http-hook";
import EmptyPage from "../UI/EmptyPage";
import MonsterBattleBox from "../MyEncounters/MonsterBattleBox";
import VotingBooth from "./VotingBooth";
import Countdown from "react-countdown";
import ConteinerBox from "../UI/ConteinerBox";

import styles from "./Voting.module.css";

export default function Voting() {
  const [monsters, setMonsters] = useState([]);
  const { sendRequest } = useHttpClient();
  const currentDate = new Date().getTime();
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/voting"
        );
        setMonsters([...resData]);
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest]);
  return (
    <ConteinerBox>
      {monsters.length < 1 && (
        <EmptyPage message="There are no new submitted cretures at this time."></EmptyPage>
      )}
      {monsters.map((monster, i) => (
        <MonsterBattleBox
          key={i}
          childrenTopAndBottom={true}
          battleSideBar={false}
          stats={monster}
          modalStats={true}
          width="250px"
          height="250px"
        >
          <div className={styles.name_plate__style}>
            <span className={`${styles.name_plate} overflowing`}>
              {monster.name}
            </span>
            <Countdown
              className={`${styles.clock__style} ${
                (monster.timeforvoting - currentDate) / 1000 < 86400
                  ? "red_text"
                  : "green_text"
              }`}
              date={monster.timeforvoting}
            ></Countdown>
          </div>
          <VotingBooth
            votes={monster.votes}
            name={monster.name}
            id={monster._id}
          ></VotingBooth>
        </MonsterBattleBox>
      ))}
    </ConteinerBox>
  );
}
