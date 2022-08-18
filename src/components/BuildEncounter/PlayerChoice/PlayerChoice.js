import React, { useState } from "react";
import LevelOfPlayer from "./LevelOfPlayer";
import PlayerBox from "./PlayerBox";
import styles from "./PlayerChoice.module.css";

export default function PlayerChoice() {
  let [players, newPlayers] = useState([]);

  const getPlayer = (player) => {
    newPlayers([...players, player]);
  };
  const Deleter = (del) => {
    let pIndex = players.findIndex(function (p, index) {
      if (p.player === del) {
        return index;
      }
    });
    if(pIndex === -1){
      pIndex=0;
    }
    players.splice(pIndex, 1);
    newPlayers([...players])
  };
console.log(players)
  return (
    <div className={styles.party_setup__window}>
      <LevelOfPlayer onChange={getPlayer} />
      <PlayerBox playerRemove={Deleter} player={players} />
    </div>
  );
}
