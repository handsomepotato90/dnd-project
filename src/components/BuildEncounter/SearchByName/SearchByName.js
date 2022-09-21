import { useContext, useRef } from "react";
import styles from "./SearchByName.module.css";
import MonsterXp from "../../store/monsterXp-context";

export default function SearchByName() {
  const text= useRef();
  const mxp = useContext(MonsterXp);
  let timer;

  const nameSearch = (event) => {
    console.log(event)
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      mxp.setMonsterTypeState({...mxp.monsterTypes, name:text.current.value})
    }, 1000);
  };

  return (
    <div>
      <input type="text" ref={text} onKeyUp={nameSearch}></input>
    </div>
  );
}
