import styles from "./BattleScreen.module.css";

export default function ImmunityesModal(props) {
  return (
    <div className={styles.modal__style}>
      {" "}
      <div className={styles.resandvun_text__style}>
        <span className={styles.red_condition}>Damage Immunity: </span>
        <span
          className={`${styles.condition__txt__style} ${styles.red_condition}`}
        >
          {props.dmgI}
        </span>
      </div>
      <div className={styles.resandvun_text__style}>
        <span className={styles.red_condition}>Condition Immunity:</span>
        <span
          className={`${styles.condition__txt__style} ${styles.red_condition}`}
        >
          {props.conI}
        </span>
      </div>
      <div className={styles.resandvun_text__style}>
        <span className={styles.orange_condition}>Damage Resistance:</span>
        <span
          className={`${styles.condition__txt__style} ${styles.orange_condition}`}
        >
          {props.dmgR}
        </span>
      </div>
      <div className={styles.resandvun_text__style}>
        <span className={styles.green_condition}>Damage Vulnerability:</span>
        <span
          className={`${styles.condition__txt__style} ${styles.green_condition}`}
        >
          {props.dmgV}
        </span>
      </div>
    </div>
  );
}

export function DeathModal() {
  return (
    <div className={styles.modal__style}>
      <span className={styles.death_modal_text___style}>DEAD</span>
    </div>
  );
}
