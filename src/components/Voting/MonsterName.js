import styles from "./MonsterName.module.css";

export default function MonsterName(props) {
  return (
    <span className={`${styles.name_plate} overflowing`}>{props.name}</span>
  );
}
