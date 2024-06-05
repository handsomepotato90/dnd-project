import { useContext } from "react";
import LevelOfPlayer from "./LevelOfPlayer";
import PlayerBox from "./PlayerBox";
import GroupXp from "../../store/groupXp-context";

const PlayerChoice = () => {
  const xpt = useContext(GroupXp);
  return (
    <>
      <LevelOfPlayer onChange={xpt.getPlayer} />
      <PlayerBox player={xpt.players} />
    </>
  );
};
export default PlayerChoice;
