import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import styles from "./Confirmation.module.css";

export default function ModalConfirmation(props) {
  const confirmation = (answer) => {
    props.onClick(answer);
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick}></BackDrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
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
        </div>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
