import React from "react";

export default function PlayerBox(props) {
  return <>{props.player.map((p,i) =>(
        <div key={i}>{p.currValue.player}</div>
  ))}</>;
}
