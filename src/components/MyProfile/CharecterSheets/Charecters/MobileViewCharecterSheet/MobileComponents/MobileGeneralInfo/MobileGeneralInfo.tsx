import React, { useState, useContext } from "react";
import NameClassLevel from "../../../CharecterComponents/NameClassLevel";
import MainStats from "../../../Stats/Skills/MainStats";
import LongRest from "../../../CharecterComponents/shortLongRest/LongRest";
import ShortRest from "../../../CharecterComponents/shortLongRest/ShortRest";
import CSArmorclass from "../../../Stats/InitiativeAcResistance/CSArmorclass";
import CSInitiative from "../../../Stats/InitiativeAcResistance/CSInitiative";
import SpecialResource from "../../../Stats/InitiativeAcResistance/SpecialResource";
import HealthModal from "./HealthModal";

import CS from "../../../../../../store/CS-context";

import ComponentInit from "../../../Stats/ComponentInit";

import styles from "./MobileGeneralInfo.module.css";

const MobileGeneralInfo: React.FC = () => {
  const [openHealth, setOpenHealth] = useState<boolean>(false);
  const cs = useContext(CS);

  return (
    <div className={styles.screen_wide}>
      <NameClassLevel />
      <div className={styles.rest_buttons}>
        <LongRest />
        <ShortRest />
      </div>
      <div className={styles.health_holder}>
        <CSArmorclass />
        <div className={styles.health_box} onClick={() => setOpenHealth(true)}>
          <span className={styles.hp_text}>HP</span>
          <span className={styles.hp_value}>{cs.currHp}</span>
        </div>
        <CSInitiative />
      </div>
      {openHealth && <HealthModal onClick={(val) => setOpenHealth(val)} />}
      <div className={styles.armor_initiative}>
        <ComponentInit text={"PROFICIENCY"}></ComponentInit>
        <ComponentInit text={"SPEED"}></ComponentInit>
        <ComponentInit text={"INSPIRATION"}></ComponentInit>
        <SpecialResource />
      </div>
      <div className={styles.stats_orientation}>
        <MainStats></MainStats>
      </div>
    </div>
  );
};

export default MobileGeneralInfo;
