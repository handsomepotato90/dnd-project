import { useState } from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  minValue: number;
  maxValue: number;
  currentValue: number;
  toNextLVL: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { minValue, maxValue, currentValue, toNextLVL } = props;
  const percentage = ((currentValue - minValue) / (maxValue - minValue)) * 100;
  const [hover, setHover] = useState<boolean>(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={styles.progress_bar_container}
    >
      <div
        className={styles.progress_bar_fill}
        style={{ width: `${percentage}%` }}
      ></div>
      {hover && (
        <span className="hover__text">{`You need ${toNextLVL} more XP to next LvL`}</span>
      )}
    </div>
  );
};

export default ProgressBar;
