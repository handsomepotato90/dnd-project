import React from "react";
import Skills from "../../../Stats/Skills/Skills";

import styles from "./MobileProficiency.module.css";

const MobileProficiency: React.FC = (props) => {
  return (
    <div className={styles.skills_view}>
      <Skills />
    </div>
  );
};

export default MobileProficiency;
