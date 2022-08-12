import React, { useState } from "react";

export default function Button(props) {
  const cName = " " + props.className;
  let [number, newVote] = useState(props.voteCount);
  const Vote = () => {
    newVote(number + 1);
    props.onClick(props.text,props.name)
    // console.log(props.text,props.name)
  };
  return (
    <React.Fragment>
      <div>{number}</div>
      <button  onClick={Vote} className={cName}>
        {props.text}
      </button>
    </React.Fragment>
  );
}
