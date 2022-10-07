import React, { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../hooks/http-hook";
import { LoginContext } from "../store/login-context";
import MainMonsterBox from "../Voting/MainMonsterBox";
import styles from "./MyProfile.module.css";
import Delete from "./Delete";
export default function MyProfile() {
  const { sendRequest } = useHttpClient();
  const login = useContext(LoginContext);
  const [myMonsters, setMyMonsters] = useState([]);
  const now = new Date().getTime();
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          "http://localhost:5000/myProfile",
          "POST",
          JSON.stringify({
            user: login.userId,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setMyMonsters([...resData]);
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest, login.userId]);
  console.log(myMonsters);
  return (
    <>
      <div className={`${styles.legend__style} ${styles.red}`}></div>
      <div className={`${styles.legend__style} ${styles.green}`}></div>
      <div className={`${styles.legend__style} ${styles.grey}`}></div>

      {myMonsters.map((monster, i) => (
        <MainMonsterBox
          key={i}
          className={
            monster.timeforvoting > now
              ? styles.grey
              : monster.votes.number > 0 || monster.votes.number === undefined
              ? styles.green
              : styles.red
          }
          monsterStats={monster}
        >
          <Delete id={monster._id}></Delete>
        </MainMonsterBox>
      ))}
    </>
  );
}
