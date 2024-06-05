import React from "react";
import styles from "./Stats.module.css";
import HealthMenagment from "./healthMenagment/HealthMenagment";
import Health from "./healthMenagment/Health";
import TemporaryHp from "./healthMenagment/TemporaryHp";
import { HealthCSHProvider } from "../../../../store/health_CSH-context";

const HpAndHpManagment: React.FC = () => {
  return (
    <HealthCSHProvider>
      <div className={styles.hp_box_general}>
        <HealthMenagment></HealthMenagment>
        <Health></Health>
        <TemporaryHp></TemporaryHp>
      </div>
    </HealthCSHProvider>
  );
}

export default HpAndHpManagment;
