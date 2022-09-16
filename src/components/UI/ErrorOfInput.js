import styles from "./ErrorOfInput.module.css";
export default function ErrorOfInput(props) {
  return (
    <div onClick={() => props.onClick(false)} className={styles.error__style}>
      <h2>{props.header}</h2>
      <p>{props.error}</p>
    </div>
  );
}
