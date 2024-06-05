import React, { useState } from "react";

interface GroupXpProviderProps {
  children: React.ReactNode,
}
interface XpSum {
  deadly: number,
  easy: number,
  hard: number,
  medium: number,
}

interface Player {
  deadly: number,
  easy: number,
  hard: number,
  medium: number,
  player: number,
}

const GroupXp = React.createContext({
  theChallengeLadder: { easy: 0, medium: 0, hard: 0, deadly: 0 },
  players: {} as Player[],
  Deleter: (_del: number) => {},
  getPlayer: (_player: Player) => {},
});


export const GroupXpProvider: React.FC<GroupXpProviderProps> = ({children}) => {
  const sumOfAllXp = (array: XpSum[]) => {
    let easySum = 0;
    let mediumSum = 0;
    let hardSum = 0;
    let deadlySum = 0;
    for (const iterator of array) {
      easySum += iterator.easy;
      mediumSum += iterator.medium;
      hardSum += iterator.hard;
      deadlySum += iterator.deadly;
    }

    return {
      easy: easySum,
      medium: mediumSum,
      hard: hardSum,
      deadly: deadlySum,
    };
  };

  const [players, newPlayers] = useState<Player[]>([]);
  const theChallengeLadder = sumOfAllXp(players);

  const getPlayer = (player: Player) => {
    newPlayers([...players, player]);
  };

  const Deleter = (del: number) => {
    let pIndex = players.findIndex(function (p, index) {
      if (p.player === del) {
        return index;
      }
      return -1; 
    });
    if (pIndex === -1) {
      pIndex = 0;
    }
    players.splice(pIndex, 1);
    newPlayers([...players]);
  };
  
  return (
    <GroupXp.Provider
      value={{
        theChallengeLadder: theChallengeLadder,
        getPlayer: getPlayer,
        players: players,
        Deleter: Deleter,
      }}
    >
      {" "}
      {children}
    </GroupXp.Provider>
  );
};



export default GroupXp;
