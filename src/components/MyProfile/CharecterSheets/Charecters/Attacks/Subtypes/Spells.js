import SpellBlock from "./SpellComponents/SpellBlock";
import styles from "./Spells.module.css";
export default function Spells() {
  return (
    <div>
      <div>
        <div>
          <span>MODIFIER</span>
          <div></div>
        </div>
        <div>
          <span>SPELL ATTACK</span>
          <div></div>
        </div>
        <div>
          <span>SAVE DC</span>
          <div></div>
        </div>
      </div>
      <div className={styles.spells_block}>
        <SpellBlock></SpellBlock>
      </div>
    </div>
  );
}
