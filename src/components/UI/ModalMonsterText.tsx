import React from "react";
import ReactDOM from "react-dom";
import FullMonsterDescription from "./FullMonsterDescription/FullMonsterDescription";
import BackDrop from "./BackDrop";
import MonsterStats from "../types/MonsterStatsTypes"

interface ModalBackProps {
  onClick: () => void;
  monsterStats: MonsterStats;
}

const ModalBack: React.FC<ModalBackProps> = ({ onClick, monsterStats }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={onClick} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <FullMonsterDescription
          onClick={onClick}
          monsterStats={monsterStats}
        />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default ModalBack;
