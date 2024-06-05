import React from "react";
import styles from "./Options.module.css";

interface HoverFormulaProps{
  coords:{x: number, y: number},
  formula: string[],
}

const HoverFormula: React.FC<HoverFormulaProps> = ({coords,formula}) => {
  return (
    <div
      style={{
        marginLeft:coords.x - 20,
        marginTop:coords.y - 50,
      }}
      className={styles.hover_style}
    >
      <span>{formula}</span>
    </div>
  );
}
export default HoverFormula;