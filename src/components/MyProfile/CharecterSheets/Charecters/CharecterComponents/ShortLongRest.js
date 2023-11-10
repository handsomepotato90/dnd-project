import styles from "./CharecterComponents.module.css";
import LongRest from "./shortLongRest/LongRest";
import ShortRest from "./shortLongRest/ShortRest";
export default function ShortLongRest() {
  return (
    <div className={styles.general_charecter_rest_style}>
      <ShortRest></ShortRest>
      <LongRest></LongRest>
    </div>
  );
}
