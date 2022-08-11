import React from "react";
import { stripHtml, workebleObject } from "./functions";

export default function Actions(props) {

  const actions = workebleObject(props.actions);

  
  return (
    <React.Fragment>
      <div>ACTIONS</div>
      {actions.map((action, i) => (
        <div key={i}>
          <div >{stripHtml(action.trait)}</div>
          <div >{stripHtml(action.text)}</div>
        </div>
      ))}
    </React.Fragment>
  );
}
