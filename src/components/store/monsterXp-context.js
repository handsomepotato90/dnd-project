import React, { useState } from "react";

const MonsterXp = React.createContext({
  monsterBlock: {},
  monsterChallengeLadder: 0,
  selectMonster: () => {},
  DeleteMonster:()=>{},
  monsters:[{}],
  setMonsters: ()=>{},
});

export const MonsterXpProvider = (props) => {
  const [monsters, setMonsters] = useState([{}]);
  const monsterXpSum = (array) => {
    let sum = 0;
    for (const iterator of array) {
      sum += iterator.xp;
    }

    const monsterChallengeLadder = sum;
    return monsterChallengeLadder;
  };

  let [monsterBlock, selectMonsterBlock] = useState([]);
  let monsterChallengeLadder = monsterXpSum(monsterBlock);
  const selectMonster = (monster) => {
    let challenge = monster.Challenge.split(" (");
    selectMonsterBlock([
      ...monsterBlock,
      {
        name: monster.name,
        type: monster.meta.split(", ")[0],
        challenge: challenge[0],
        xp: parseInt(challenge[1].split(" XP")[0].replace(/,/g, '')),
      },
    ]);
  };
  const DeleteMonster = (del) => {
    let mIndex = monsterBlock.findIndex(function (m, index) {
      if (m.player === del) {
        return index;
      }
    });
    if (mIndex === -1) {
      mIndex = 0;
    }
    monsterBlock.splice(mIndex, 1);
    selectMonsterBlock([...monsterBlock]);
  };
  return (
    <MonsterXp.Provider
      value={{
        monsterBlock: monsterBlock,
        monsterChallengeLadder: monsterChallengeLadder,
        selectMonster: selectMonster,
        DeleteMonster:DeleteMonster,
        monsters: monsters,
        setMonsters: setMonsters,

      }}
    >
      {" "}
      {props.children}
    </MonsterXp.Provider>
  );
};
export default MonsterXp;
