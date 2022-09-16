import React, { useState, useEffect } from "react";
import MainMonsterBox from "./MainMonsterBox";
import { useHttpClient } from "../hooks/http-hook";
import styles from "./Voting.module.css";

export default function Voting() {
  const [monsters, setMonsters] = useState([]);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest("http://localhost:5000/voting");
        setMonsters([...resData]);
      } catch (err) {}
    };
    fetchMonsters()
  },[sendRequest]);


  
  const defaultBoxLabels = {
    name: "Name",
    meta: "Size Type, Alignment",
    Challenge: "Challenge Rating",
    extraContent: {
      readMore: "",
      positiveVotes: "",
      negativeVotes: "",
      text: "Vote",
    },
  };
  return (
    <>
      <MainMonsterBox
        className={styles.main_head__text_color}
        monsterStats={defaultBoxLabels}
        voting="yes"
      ></MainMonsterBox>
      {monsters.map((monster, i) => (
        <MainMonsterBox
          key={i}
          monsterStats={monster}
          voting="yes"
        ></MainMonsterBox>
      ))}
    </>
  );
}
