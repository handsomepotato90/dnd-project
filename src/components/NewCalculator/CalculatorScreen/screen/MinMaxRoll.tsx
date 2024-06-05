

import styles from "./Screen.module.css"


export default function MinMaxRoll({ howHigh, result }: { howHigh: string, result: number }) {

  return (
    <div className={styles.min_max_general}>
      <span>{result}</span>
      <span>{howHigh}</span>
    </div>
  );
}
