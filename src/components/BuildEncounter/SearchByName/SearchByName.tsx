import { useContext, useRef } from "react";
import styles from "./SearchByName.module.css";
import MonsterXp from "../../store/monsterXp-context";

const SearchByName = () => {
  const text = useRef<HTMLInputElement>(null);
  const mxp = useContext(MonsterXp);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nameSearch = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      if (text.current) {
        mxp.setMonsterTypeState({
          ...mxp.monsterTypes,
          name: text.current.value,
        });
      }
    }, 1000);
  };

  return (
    <div className={styles.search_bar__size}>
      {/* <img className={styles.search_button} src={searchPng} alt="glass"></img> */}
      <input
        className={styles.input_size}
        placeholder="Search"
        type="text"
        ref={text}
        onKeyUp={nameSearch}
      ></input>
    </div>
  );
}

export default SearchByName;
