import styles from "./MyProfile.module.css";
export default function Legend(props) {
  return (
    <div className={styles.legend_single_box}>
      <div id={props.id} className={props.className}></div>
      <label>{props.text}</label>
    </div>
  );
}
