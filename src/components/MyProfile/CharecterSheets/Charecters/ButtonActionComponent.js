import styles from "./Charecters.module.css";

export default function ButtonActionComponent(props) {
  return (
    <div className={styles.save_btn_holder_position}>
      <button
        onClick={() => props.onClick(true)}
        className={`red_text black__background ${styles.save_btn_position}`}
      >
        {props.children}
      </button>
    </div>
  );
}
