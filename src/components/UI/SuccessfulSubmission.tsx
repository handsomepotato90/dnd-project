import React from "react";
import styles from "./SuccesfulSubmission.module.css";
import GreenMark from "../../icons/green_check_mark.png";

interface SuccessfulSubmissionProps {
  title: string;
  text: string;
  onClick: (arg: boolean) => void;
}

const SuccessfulSubmission: React.FC<SuccessfulSubmissionProps> = (props) => {
  return (
    <div
      onClick={() => props.onClick(false)}
      className={styles.modal_big_box__style}
    >
      <img
        className={styles.image__style}
        src={GreenMark}
        alt="check mark"
      />
      <span className={styles.big_text__style}>{props.title}</span>
      <span className={styles.text__style}>{props.text}</span>
    </div>
  );
}

export default SuccessfulSubmission;
