import React from "react";
import SpellBlock from "./SpellComponents/SpellBlock";
import Modifires from "./SpellComponents/Modifires";
import styles from "./Spells.module.css";

const Spells: React.FC = () => {
  return (
    <div>
      <div className={styles.modifier_general_view}>
        <Modifires value={"0"} title={"MODIFIER"}></Modifires>
        <Modifires value={"0"} title={"SPELL ATTACK"}></Modifires>
        <Modifires value={"0"} title={"SAVE DC"}></Modifires>
      </div>
      <div className={styles.spells_block}>
        <SpellBlock></SpellBlock>
      </div>
    </div>
  );
}

export default Spells;
