import React, { useContext } from "react";
import LevelOfPlayer from "./LevelOfPlayer";
import PlayerBox from "./PlayerBox";
import styles from "./PlayerChoice.module.css";
import GroupXp from "../../store/groupXp-context";



export default function PlayerChoice() {
  const xpt = useContext(GroupXp);

  console.log(xpt);
  return (
    <div className={styles.party_setup__window}>
      <LevelOfPlayer onChange={xpt.getPlayer} />
      <PlayerBox playerRemove={xpt.Deleter} player={xpt.players} />
    </div>
  );
}
