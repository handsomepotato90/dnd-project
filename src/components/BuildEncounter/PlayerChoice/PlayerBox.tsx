import NewsBox from "../../UI/NewsBox"
import { useContext } from "react";
import GroupXp from "../../store/groupXp-context";

import styles from "./PlayerBox.module.css";
interface Player {
    player: number,
    easy: number,
    medium: number,
    hard: number,
    deadly: number
}

interface PlayerBoxProps {
  player : Player[]
}

const PlayerBox: React.FC<PlayerBoxProps> = ({player}) => {
  const xpt = useContext(GroupXp);

  const DeleteThisPlayer = (player: number) => {
    xpt.Deleter(player)
  };

  return (
    <NewsBox className={styles.news_box__stayel}>
      {player.map((p, i) => (
        <div className={styles.box_player__style} key={i}>
          <div>Player Level:</div>
          <div>{p.player}</div>
          <div className={styles.delete_this} onClick={() => DeleteThisPlayer(p.player)}>
            X
          </div>
        </div>
      ))}
    </NewsBox>
  );
}
export default PlayerBox;