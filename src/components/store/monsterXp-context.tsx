import React, { useState } from "react";
import MonsterStats from "../types/MonsterStatsTypes";

interface MonsterData {
  name: string;
  url: string;
  type: string;
  challenge: number;
  xp: number;
}
interface ShortMonsterDataSearch{
  name: string;
  limit: number;
  types: string[];
  alignment: string[];
  condition: string[];
  damage: string[];
  legendary: boolean|"Any";
  resistance: string[];
  vulnerability: string[];
}
interface MonsterXpContextValue {
  monsterBlock: MonsterData[];
  monsterTypes: ShortMonsterDataSearch;
  setMonsterTypeState: React.Dispatch<React.SetStateAction<ShortMonsterDataSearch>>;
  monsterChallengeLadder: number;
  selectMonster: (monster: MonsterStats) => void;
  DeleteMonster: (del: string) => void;
  monsters: MonsterStats[];
  setMonsters: React.Dispatch<React.SetStateAction<MonsterStats[]>>;
}

const MonsterXp = React.createContext<MonsterXpContextValue>({
  monsterBlock: [],
  monsterTypes: {
    name: "",
    limit: 12,
    types: [],
    alignment: [],
    condition: [],
    damage: [],
    legendary: "Any",
    resistance: [],
    vulnerability: [],
  },
  setMonsterTypeState: () => {},
  monsterChallengeLadder: 0,
  selectMonster: () => {},
  DeleteMonster: () => {},
  monsters: [],
  setMonsters: () => {},
});

export const MonsterXpProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [monsterTypes, setMonsterTypeState] = useState<ShortMonsterDataSearch>({
    name: "",
    limit: 12,
    types: [],
    alignment: [],
    condition: [],
    damage: [],
    legendary: "Any",
    resistance: [],
    vulnerability: [],
  });

  const [monsters, setMonsters] = useState<MonsterStats[]>([]);

  const monsterXpSum = (array: MonsterData[]) => {
    let sum = 0;
    for (const iterator of array) {
      sum += iterator.xp;
    }
    const monsterChallengeLadder = sum;
    return monsterChallengeLadder;
  };

  const [monsterBlock, selectMonsterBlock] = useState<MonsterData[]>([]);
  let monsterChallengeLadder = monsterXpSum(monsterBlock);

  const selectMonster = (monster: MonsterStats) => {
    selectMonsterBlock([
      ...monsterBlock,
      {
        name: monster.name,
        url: monster.img_url || "",
        type: monster.meta.type,
        challenge: monster.Challenge.rating,
        xp: parseInt(
          monster.Challenge.xp.split(" ")[0].replace(/\(|\)|,/g, "")
        ),
      },
    ]);
  };

  const DeleteMonster = (del: string) => {
    let mIndex = monsterBlock.findIndex(function (m, index) {
      if (m.name === del) {
        return index;
      }
      return undefined;
    });
  
    if (mIndex === -1) {
      mIndex = 0;
    }
    
    monsterBlock.splice(mIndex, 1);
    selectMonsterBlock([...monsterBlock]);
  };
  

  const contextValue: MonsterXpContextValue = {
    monsterBlock,
    monsterTypes,
    setMonsterTypeState,
    monsterChallengeLadder,
    selectMonster,
    DeleteMonster,
    monsters,
    setMonsters,
  };

  return (
    <MonsterXp.Provider value={contextValue}>
      {children}
    </MonsterXp.Provider>
  );
};

export default MonsterXp;
