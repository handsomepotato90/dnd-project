import React, {useState} from "react";
import LevelOfPlayer from "./LevelOfPlayer";
import PlayerBox from "./PlayerBox";



export default function PlayerChoice() {
  let [players,newPlayers] =useState([])

  const getPlayer = (player) => {
    newPlayers([...players,player])
  };
console.log(players)
  return (
    <>
      <LevelOfPlayer onChange={getPlayer} />
      <PlayerBox player={players} />
    </>
  );
}
