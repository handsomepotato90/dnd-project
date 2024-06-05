import React from "react";
import styles from "./EncounterUI.module.css";

interface AutoRollInitiativeProps {
  onClick: (value: number) => void;
  dexMod: string;
}

const AutoRollInitiative: React.FC<AutoRollInitiativeProps> = ({
  onClick,
  dexMod,
}) => {
  const dexterityModifier = parseInt(dexMod.replace(/[()]/g, ""), 10);

  const rollInitiative = () => {
    const randomRoll = Math.floor(Math.random() * 20);
    onClick(randomRoll + 1 + dexterityModifier);
  };

  return (
    <span className={styles.auto_roll_button__style} onClick={rollInitiative}>
      Auto Roll
    </span>
  );
};

export default AutoRollInitiative;
