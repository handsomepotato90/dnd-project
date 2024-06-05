import React, { useState } from "react";
import DisplayWindow from "./DisplayWindow";
import TextComponent from "./shortRest/TextComponent";
import HitDieHolder from "./shortRest/HitDieHolder";

import styles from "./shortLongRest.module.css";

const ShortRest: React.FC = () => {
  const [shoudOpen, setShoudOpen] = useState(false);
  const openWindow = () => {
    setShoudOpen(true);
  };
  return (
    <div>
      <button className={`red_text black__background ${styles.rest_buttons__styles}`} onClick={openWindow}>
        Short Rest
      </button>
      {shoudOpen && (
        <DisplayWindow onClick={(val) => setShoudOpen(val)}>
          <TextComponent></TextComponent>
          <HitDieHolder></HitDieHolder>
        </DisplayWindow>
      )}
    </div>
  );
}

export default ShortRest;
