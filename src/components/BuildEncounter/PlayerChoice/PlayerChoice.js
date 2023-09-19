import React, { useContext } from "react";
import LevelOfPlayer from "./LevelOfPlayer";
import PlayerBox from "./PlayerBox";
import GroupXp from "../../store/groupXp-context";
export default function PlayerChoice() {
  const xpt = useContext(GroupXp);
  return (
    <>
      <LevelOfPlayer onChange={xpt.getPlayer} />
      <PlayerBox playerRemove={xpt.Deleter} player={xpt.players} />
    </>
  );
}
