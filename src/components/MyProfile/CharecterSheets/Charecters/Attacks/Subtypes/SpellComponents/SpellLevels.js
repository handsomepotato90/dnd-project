import styles from "./SpellComponents.module.css";

export default function SpellLevels(props) {
  const returnClickedLevel = () => {
    props.onClick(props.lvl);
  };
  return (
    <div>
      <button
        className={`red ${styles.spell_level_btns}`}
        onClick={returnClickedLevel}
      >
        {props.lvl}
      </button>
    </div>
  );
}
