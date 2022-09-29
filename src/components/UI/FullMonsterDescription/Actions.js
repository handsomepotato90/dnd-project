import React from "react";
import styles from "./mainstyling.module.css"
export default function Actions(props) {
  return (
    <React.Fragment>
      <div className={styles.action__styles}>{props.name}</div>
      <hr />
      <div className={styles.action_text__styles} dangerouslySetInnerHTML={{ __html: props.actions }}></div>
    </React.Fragment>
  );
}
