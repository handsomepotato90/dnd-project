import React from "react";
import DxValueDie from "./Dice/DxValueDie";
import styles from "./Dice.module.css";

const StandartButtons: React.FC = () => {
  return (
    <div className={styles.stadard_die__keybord}>
      <DxValueDie display="C" color="red" value="C" />
      <DxValueDie display="÷" color="orange" value="/" />
      <DxValueDie display="7" color="white" value={7} />
      <DxValueDie display="8" color="white" value={8} />
      <DxValueDie display="9" color="white" value={9} />
      <DxValueDie display="×" color="orange" value="*" />

      <DxValueDie display="4" color="white" value={4} />
      <DxValueDie display="5" color="white" value={5} />
      <DxValueDie display="6" color="white" value={6} />
      <DxValueDie display="-" color="orange" value="-" />
      <DxValueDie display="1" color="white" value={1} />
      <DxValueDie display="2" color="white" value={2} />
      <DxValueDie display="3" color="white" value={3} />
      <DxValueDie display="+" color="orange" value="+" />
      <DxValueDie display="0" color="white" value={0} />
      <DxValueDie display="Roll" color="green" value="Roll" />
    </div>
  );
}
export default StandartButtons;