import NameClassLevel from "./CharecterComponents/NameClassLevel";
import ShortLongRest from "./CharecterComponents/ShortLongRest";


import styles from "./Charecters.module.css";
import Stats from "./Stats/Stats";

export default function Charecters() {
  return (
    <div className={styles.charecter_general}>
      <div className={styles.general_charecter_info}>
        <NameClassLevel></NameClassLevel>
        <ShortLongRest></ShortLongRest>
      </div>
      <div className={styles.important_stats_general_holder}>
        <Stats></Stats>
      </div>
      
    </div>
  );
}
