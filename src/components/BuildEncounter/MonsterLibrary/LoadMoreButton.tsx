import React, { useContext } from "react";
import MonsterXp from "../../store/monsterXp-context";

import style from "./MonsterLibrary.module.css";

const LoadMoreButton: React.FC = () => {
  const mxp = useContext(MonsterXp);

  const loadMore = () => {
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

export default LoadMoreButton;
