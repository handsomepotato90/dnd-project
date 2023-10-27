import NameClassLevel from "./CharecterComponents/NameClassLevel";
import ShortLongRest from "./CharecterComponents/ShortLongRest";
import { CSProvider } from "../../../store/CS-context";

import styles from "./Charecters.module.css";
import Stats from "./Stats/Stats";
import SavingThrows from "./Stats/SavingThrows/SavingThrows";
import PassiveSenses from "./Stats/PassiveSenses/PassiveSenses";
import OtherProficiencies from "./Stats/OtherProficiencies/OtherProficiencies";
import Skills from "./Stats/Skills/Skills";
import CSInitiative from "./Stats/InitiativeAcResistance/CSInitiative";
import CSArmorclass from "./Stats/InitiativeAcResistance/CSArmorclass";
import Resistance from "./Stats/InitiativeAcResistance/Resistance";
import Attacks from "./Attacks/Attacks"
export default function Charecters() {
  return (
    <CSProvider>
      <div className={styles.charecter_general}>
        <div className={styles.general_charecter_info}>
          <NameClassLevel></NameClassLevel>
          <ShortLongRest></ShortLongRest>
        </div>
        <div className={styles.important_stats_general_holder}>
          <Stats></Stats>
        </div>
        <div className={styles.all_stats_holder}>
          <div className={styles.left_pannel}>
            <SavingThrows></SavingThrows>
            <PassiveSenses></PassiveSenses>
            <OtherProficiencies></OtherProficiencies>
          </div>
          <div className={styles.prof_pannel_center}>
            <Skills></Skills>
          </div>
          <div className={styles.right_panel}>
            <div className={styles.right_panel_top}>
              <CSInitiative></CSInitiative>
              <CSArmorclass></CSArmorclass>
              <Resistance></Resistance>
            </div>
            <div>
                <Attacks></Attacks>
            </div>
          </div>
        </div>
      </div>
    </CSProvider>
  );
}
