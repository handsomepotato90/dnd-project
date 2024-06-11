import React from "react";
import Attacks from "../../../Attacks/Attacks";

import styles from "./MobileAttacks.module.css";

const MobileAttacks: React.FC = () => {
  return (
    <div className={styles.attacks_main}>
      <Attacks />
    </div>
  );
};

export default MobileAttacks;
