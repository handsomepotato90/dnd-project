import React, { useState } from "react";

const MonsterXp = React.createContext({
  monsterBlock: {},
  monsterTypes:{},
  setMonsterTypeState:()=>{},
  monsterChallengeLadder: 0,
  selectMonster: () => {},
  DeleteMonster:()=>{},
  monsters:[],
  setMonsters: ()=>{},
});

export const MonsterXpProvider = (props) => {
  const [monsterTypes, setMonsterTypeState] = useState({
    name:'',
    limit: 12,
    types: [],
    alignment: [],
    condition: [],
    damage: [],
    legendary: "Any",
    resistance: [],
    vulnerability: [],
  });

  const [monsters, setMonsters] = useState([]);
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
    selectMonsterBlock([
      ...monsterBlock,
      {
        name: monster.name,
        url:monster.img_url,
        type: monster.meta.type,
        challenge: monster.Challenge.rating,
        xp: parseInt(monster.Challenge.xp.split(" ")[0].replace(/\(|\)|,/g, '')),
      },
    ]);
  };
  const DeleteMonster = (del) => {

    let mIndex = monsterBlock.findIndex(function (m, index) {
      if (m.name === del) {
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
        monsterTypes:monsterTypes,
        setMonsterTypeState:setMonsterTypeState,
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
