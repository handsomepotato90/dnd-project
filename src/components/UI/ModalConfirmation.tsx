import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import styles from "./Confirmation.module.css";


interface ModalConfirmationProps {
  title: string;
  onClick: (answer: boolean) => void;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = (props) => {
  const confirmation = (answer: boolean) => {
    props.onClick(answer);
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={() => props.onClick(false)} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <React.Fragment>
        <div onClick={() => props.onClick(false)} className={styles.modal_style}>
        </div>
        <div className={styles.modal_big_box__style}>
          <span>{props.title}</span>
          <div>
            <button
              className={`${styles.btn} ${styles.confirm__style}`}
              onClick={() => confirmation(true)}
            >
              Yes
            </button>
            <button
              className={`${styles.btn} ${styles.reject__style}`}
              onClick={() => confirmation(false)}
            >
              No
            </button>
          </div>
        </div>
        </React.Fragment>
        ,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default ModalConfirmation;
