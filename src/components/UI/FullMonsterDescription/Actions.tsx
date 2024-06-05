import React from "react";
import styles from "./mainstyling.module.css"

interface ActionsProps {
  name: string;
  actions: string[];
}

const Actions: React.FC<ActionsProps> = ({name, actions}) => {
  return (
    <React.Fragment>
      <div className={styles.action__styles}>{name}</div>
      <hr />
      <div className={styles.action_text__styles} dangerouslySetInnerHTML={{ __html: actions }}></div>
    </React.Fragment>
  );
}
export default Actions;