import React, { useEffect, useState, useContext } from "react";
import NameClassLevel from "../../../CharecterComponents/NameClassLevel";
import MainStats from "../../../Stats/Skills/MainStats";
import LongRest from "../../../CharecterComponents/shortLongRest/LongRest";
import ShortRest from "../../../CharecterComponents/shortLongRest/ShortRest";
import CSArmorclass from "../../../Stats/InitiativeAcResistance/CSArmorclass";
import CSInitiative from "../../../Stats/InitiativeAcResistance/CSInitiative";
import SpecialResource from "../../../Stats/InitiativeAcResistance/SpecialResource";
import HealthModal from "./HealthModal";
import { SvgComponent } from "../../../../../../Navigation/Navigation";

import saveSvg from "../../../../../../../icons/saveRed.svg";

import CS from "../../../../../../store/CS-context";

import ComponentInit from "../../../Stats/ComponentInit";

import styles from "./MobileGeneralInfo.module.css";
import UpdateButton from "../../../UpdateButton";
import SaveButton from "../../../SaveButton";

const MobileGeneralInfo: React.FC = () => {
  const [openHealth, setOpenHealth] = useState<boolean>(false);
  const [save, setSave] = useState(false);
  const [newOrOld, setNewOrOld] = useState<boolean>();
  const cs = useContext(CS);

  useEffect(() => {
    const local = localStorage.getItem("charSheet");
    if (local) {
      setNewOrOld(true);
    } else {
      setNewOrOld(false);
    }
  }, []);

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
      <div onClick={() => setSave((curr) => !curr)}>
        {newOrOld ? <UpdateButton></UpdateButton> : <SaveButton></SaveButton>}
      </div>
    </div>
  );
};

export default MobileGeneralInfo;
