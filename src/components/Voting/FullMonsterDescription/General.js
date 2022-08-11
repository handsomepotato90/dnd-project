import React from "react";
import styles from "./mainstyling.module.css";

export default function General(props) {
  return (
    <React.Fragment>
      <div className={styles.table__styling}>
        <div className={styles.skills_style}>Saving Throws: </div>
        {props.saving_throw}
      </div>
      <div className={styles.table__styling}>
        <div className={styles.skills_style}>Skills: </div>
        {props.skill}
      </div>
      <div className={styles.table__styling}>
        <div className={styles.skills_style}>Senses: </div>
        {props.senses}
      </div>
      <div className={styles.table__styling}>
        <div className={styles.skills_style}>Languages: </div>
        {props.lang}
      </div>
      <div className={styles.table__styling}>
        <div className={styles.skills_style}>Challenge: </div>
        {props.challenge}
      </div>
    </React.Fragment>
  );
}
