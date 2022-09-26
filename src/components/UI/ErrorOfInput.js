import styles from "./ErrorOfInput.module.css";
export default function ErrorOfInput(props) {
  return (
    <div onClick={() => props.onClick(false)} className={styles.error__style}>
      <div className={styles.error_top__style}></div>
      <img
        className={styles.image__style}
        src="/img/red_x_mark.png"
        alt="error"
      ></img>

      <h2 className={styles.title_error__style}>{props.header}</h2>
      <p className={styles.text_error__style}>{props.error}</p>
    </div>
  );
}
