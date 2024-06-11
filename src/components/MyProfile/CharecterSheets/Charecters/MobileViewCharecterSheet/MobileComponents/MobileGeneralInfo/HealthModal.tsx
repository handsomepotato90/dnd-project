import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "../../../../../../UI/BackDrop";
import HpAndHpManagment from "../../../Stats/HpAndHpManagment";

import styles from "./MobileGeneralInfo.module.css";

interface ModalConfirmationProps {
  onClick: (answer: boolean) => void;
}

const HealthModal: React.FC<ModalConfirmationProps> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={() => props.onClick(false)} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.modal_hp}>
            <HpAndHpManagment />
          </div>
        </React.Fragment>,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default HealthModal;
