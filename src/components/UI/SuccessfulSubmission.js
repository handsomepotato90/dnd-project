import styles from "./SuccesfulSubmission.module.css";
import GreenMark from "../../icons/green_check_mark.png";
export default function SuccessfulSubmission(props) {
  return (
    <div onClick={() =>props.onClick(false)} className={styles.modal_big_box__style}>
      <img className={styles.image__style} src={GreenMark} alt="check mark"></img>
      <span className={styles.big_text__style}>Successful submission!</span>
      <span className={styles.text__style}>
        Thank you for the submission. You can vote for your homebrew in the
        voting section.We hope it becomes a part of the main roster.
      </span>
    </div>
  );
}
