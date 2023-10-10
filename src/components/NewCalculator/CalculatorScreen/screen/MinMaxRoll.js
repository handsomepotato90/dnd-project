

import styles from "./Screen.module.css"


export default function MinMaxRoll(props) {
  const { howHigh, result } = props;
  return (
    <div className={styles.min_max_general}>
      <span>{result}</span>
      <span>{howHigh}</span>
    </div>
  );
}
