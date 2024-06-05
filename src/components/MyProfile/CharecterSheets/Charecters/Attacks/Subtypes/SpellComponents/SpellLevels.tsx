import styles from "./SpellComponents.module.css";

export interface SpellLevelsProps {
  lvl: string;
  onClick: (lvl: string) => void;
}

export default function SpellLevels(props: SpellLevelsProps): JSX.Element {
  const returnClickedLevel = (): void => {
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
