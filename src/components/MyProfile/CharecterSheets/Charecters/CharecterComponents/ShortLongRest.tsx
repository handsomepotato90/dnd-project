import React from "react";
import styles from "./CharecterComponents.module.css";
import LongRest from "./shortLongRest/LongRest";
import ShortRest from "./shortLongRest/ShortRest";

const ShortLongRest: React.FC = () => {
  return (
    <div className={styles.general_charecter_rest_style}>
      <ShortRest></ShortRest>
      <LongRest></LongRest>
    </div>
  );
}

export default ShortLongRest;
