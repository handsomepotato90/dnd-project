import { useContext, useRef } from "react";
import styles from "./SearchByName.module.css";
import MonsterXp from "../../store/monsterXp-context";
import searchPng from "../../../icons/search.png";
export default function SearchByName() {
  const text = useRef();
  const mxp = useContext(MonsterXp);
  let timer;

  const nameSearch = (event) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      mxp.setMonsterTypeState({
        ...mxp.monsterTypes,
        name: text.current.value,
      });
    }, 1000);
  };

  return (
    <div className={styles.search_bar__size}>
      <img className={styles.search_button} src={searchPng} alt="glass"></img>
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
