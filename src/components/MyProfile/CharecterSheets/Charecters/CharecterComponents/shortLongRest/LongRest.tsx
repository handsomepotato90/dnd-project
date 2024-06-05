import { useState, useContext } from "react";
import ModalConfirmation from "../../../../../UI/ModalConfirmation";
import CS from "../../../../../store/CS-context";

import styles from "./shortLongRest.module.css";

export default function LongRest() {
  const [fullRest, setFullRest] = useState(false);
  const cs = useContext(CS);

  const willFullRest = (val: boolean) => {
    if (val === true) {
      cs.logRestNow();
    }
    setFullRest(false);
  };
  return (
    <>
      <button
        className={`red_text black__background ${styles.rest_buttons__styles}`}
        onClick={() => setFullRest(true)}
      >
        Long Rest
      </button>
      {fullRest && (
        <ModalConfirmation
          title={"Full rest"}
          onClick={willFullRest}
        ></ModalConfirmation>
      )}
    </>
  );
}
