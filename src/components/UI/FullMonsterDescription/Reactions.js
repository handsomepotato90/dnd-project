import React from "react";
import { stripHtml, workebleObject } from "./functions";



export default function Reactions(props){
    const reactions = workebleObject(props.reaction);

    return (
      <React.Fragment>
        <div>Reactions</div>
        {reactions.map((reaction, i) => (
          <div key={i}>
            <div >{stripHtml(reaction.trait)}</div>
            <div >{stripHtml(reaction.text)}</div>
          </div>
        ))}
      </React.Fragment>
    );
}