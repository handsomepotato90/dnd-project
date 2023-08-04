import React,{useContext} from "react";
import MonsterXp from "../../store/monsterXp-context";

import style from "./MonsterLibrary.module.css"

export default function LoadMoreButton(props) {
  const mxp = useContext(MonsterXp);

  const loadMore = () => {
    console.log(mxp);
    console.log(mxp.monsterTypes);
    mxp.setMonsterTypeState({
      ...mxp.monsterTypes,
      limit: mxp.monsterTypes.limit + 12,
    });
  };

  return (
    <button className={`${style.centering} green button`} onClick={loadMore}>
      Load More
    </button>
  );
}
