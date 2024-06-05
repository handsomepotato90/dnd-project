import styles from "./Short.module.css"

export default function TextComponent() {
  return (
    <div className={styles.title_short_rest}>
      <h3>Short Rest</h3>
      <span className={styles.text_short_rest}>
        A short rest is a period of downtime, at least 1 hour long, during which
        a character does nothing more strenuous than eating, drinking, reading,
        and tending to wounds.
      </span>
    </div>
  );
}
