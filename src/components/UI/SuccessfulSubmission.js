import styles from "./SuccesfulSubmission.module.css";
import GreenMark from "../../icons/green_check_mark.png";
export default function SuccessfulSubmission(props) {
  return (
    <div onClick={() =>props.onClick(false)} className={styles.modal_big_box__style}>
      <img className={styles.image__style} src={GreenMark} alt="check mark"></img>
      <span className={styles.big_text__style}>{props.title}</span>
      <span className={styles.text__style}>
       {props.text}
      </span>
    </div>
  );
}