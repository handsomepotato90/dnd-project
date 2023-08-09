import styles from "./Friends.module.css";
export default function UserHolderBox(props) {
  return (
    <div className={styles.users_holding_div__style}>
      <span className={styles.users_name__style}>{props.name}</span>
      {props.children}
    </div>
  );
}
