import React,{useContext} from "react";
import MonsterXp from "../../store/monsterXp-context";
import styles from "../BuildEncounter.module.css";


export default function LoadMoreButton(props) {
  const mxp = useContext(MonsterXp);

  const loadMore = () => {
    console.log(mxp);
    console.log(mxp.monsterTypes);
    mxp.setMonsterTypeState({
      ...mxp.monsterTypes,
      limit: mxp.monsterTypes.limit + 10,
    });
  };

  return (
    <button className={`${styles.btn_load_more} button`} onClick={loadMore}>
      Load More
    </button>
  );
}
