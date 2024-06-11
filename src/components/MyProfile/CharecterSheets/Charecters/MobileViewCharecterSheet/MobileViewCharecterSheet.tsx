import React from "react";
import SwipeableViews from "react-swipeable-views";
import MobileGeneralInfo from "./MobileComponents/MobileGeneralInfo/MobileGeneralInfo";
import MobileProficiency from "./MobileComponents/MobileProficiency/MobileProficiency";
import MobileOtherProfficiency from "./MobileComponents/MobileOtherProfficiency/MobileOtherProfficiency";
import MobileAttacks from "./MobileComponents/MobileAttacks/MobileAttacks";

import styles from "./MobileViewCharacterSheet.module.css";

const MobileViewCharacterSheet: React.FC = () => {
  return (
    <div className={styles.screen_wide}>
      <SwipeableViews slideClassName={styles.screen_wide}>
        <MobileGeneralInfo />
        <MobileProficiency />
        <MobileOtherProfficiency />
        <MobileAttacks />
      </SwipeableViews>
    </div>
  );
};

export default MobileViewCharacterSheet;
