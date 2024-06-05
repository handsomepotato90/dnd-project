import { useState, useEffect } from "react";
import { useHttpClient } from "../hooks/http-hook";
import EmptyPage from "../UI/EmptyPage";
import MonsterBattleBox from "../MyEncounters/MonsterBattleBox";
import VotingBooth from "./VotingBooth";
import Countdown from "react-countdown";
import ConteinerBox from "../UI/ConteinerBox";

import styles from "./Voting.module.css";
import MonsterName from "./MonsterName";

interface Monster {
  _id: string;
  name: string;
  timeforvoting: number;
  votes: { yes: Array<string>; no: Array<string> };
}

interface Armor {
  value: number;
  type: string;
}

interface HP {
  dice: string;
  hp: number;
}

interface Monster{
  "Armor Class": Armor;
  "Hit Points": HP;
  "Condition Immunities": Array<string> | void;
  "Damage Immunities": Array<string> | void;
  "Damage Resistances": Array<string> | void;
  "Damage Vulnerabilities": Array<string> | void;
  "initiative": number;
  "DEX_mod": number;
  "level": number;
  "img_url": string;
}


const Voting = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const { sendRequest } = useHttpClient();
  const currentDate = new Date().getTime();

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/voting"
        );
        setMonsters([...resData]);
      } catch (err) {
        console.error("Error fetching monsters:", err);
      }
    };
    fetchMonsters();
  }, [sendRequest]);

  return (
    <ConteinerBox
    fromStart={false}
    fromEnd={false}
    >
      {monsters.length < 1 && (
        <EmptyPage message="There are no new submitted creatures at this time." />
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
            <MonsterName name={monster.name} />
            <Countdown
              className={`${styles.clock__style} ${
                (monster.timeforvoting - currentDate) / 1000 < 86400
                  ? "red_text"
                  : "green_text"
              }`}
              date={monster.timeforvoting}
            />
          </div>
          <VotingBooth
            votes={monster.votes}
            name={monster.name}
            id={monster._id}
          />
        </MonsterBattleBox>
      ))}
    </ConteinerBox>
  );
};

export default Voting;
