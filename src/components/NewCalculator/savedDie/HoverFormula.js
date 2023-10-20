import styles from "./Options.module.css";
export default function HoverFormula(props) {
  return (
    <div
      style={{
        marginLeft: props.coords.x - 20,
        marginTop: props.coords.y - 50,
      }}
      className={styles.hover_style}
    >
      <span>{props.formula}</span>
    </div>
  );
}
