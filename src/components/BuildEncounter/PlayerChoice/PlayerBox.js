import React from "react";
import styles from "./PlayerBox.module.css";
export default function PlayerBox(props) {
  const DeleteThisPlayer = (player) => {
    props.playerRemove(player)

  };
  return (
    <>
      {props.player.map((p, i) => (
        <div className={styles.box_player__style} key={i}>
          <div>Player Level:</div>
          <div>{p.player}</div>
          <div className={styles.delete_this} onClick={() => DeleteThisPlayer(p.player)}>
            X
          </div>
        </div>
      ))}
    </>
  );
}
