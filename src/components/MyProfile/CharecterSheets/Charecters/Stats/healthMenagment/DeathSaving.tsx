import React from "react";
import DeathRadio from "./DeathRadio";
import styles from "./HealthSystem.module.css";

const DeathSaving: React.FC = () => {
  return (
    <div className={styles.death_saving_throws_general}>
      <span>Death Saving Throws</span>
      <div className={styles.death_throw}>
        <span className="green_text">SUCCESS</span>
        <div className={styles.saving_throws}>
          <DeathRadio></DeathRadio>
          <DeathRadio></DeathRadio>
          <DeathRadio></DeathRadio>
        </div>
      </div>
      <div className={styles.death_throw}>
        {" "}
        <span className="red_text">FAILURE</span>
        <div className={styles.saving_throws}>
          <DeathRadio></DeathRadio>
          <DeathRadio></DeathRadio>
          <DeathRadio></DeathRadio>
        </div>
      </div>
    </div>
  );
}
export default DeathSaving;