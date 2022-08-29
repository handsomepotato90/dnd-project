import React from "react";
import styles from "./mainstyling.module.css"
import {stripHtml,workebleObject} from "./functions"




export default function Traits(props) {
const traits = workebleObject(props.traits);

  return (
    <React.Fragment>
      {traits.map((trait, i) => (
        <div key={i} className={styles.tait_style}>
          <div >{stripHtml(trait.trait)}</div>
          <div >{stripHtml(trait.text)}</div>
        </div>
      ))}
    </React.Fragment>
  );
}
