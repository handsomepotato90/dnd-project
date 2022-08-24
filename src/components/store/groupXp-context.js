import React, { useState } from "react";

const GroupXp = React.createContext({
  theChallengeLadder: { easy: 0, medium: 0, hard: 0, deadly: 0 },
  players: {},
  Deleter: () => {},
  getPlayer: () => {},
});


export const GroupXpProvider = (props) => {
  const sumOfAllXp = (array) => {
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

    const theChallengeLadder = {
      easy: easySum,
      medium: mediumSum,
      hard: hardSum,
      deadly: deadlySum,
    };
    return theChallengeLadder;
  };
  const [players, newPlayers] = useState([]);
  const theChallengeLadder = sumOfAllXp(players);
  const getPlayer = (player) => {
    newPlayers([...players, player]);
  };
  const Deleter = (del) => {
    let pIndex = players.findIndex(function (p, index) {
      if (p.player === del) {
        return index;
      }
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
      {props.children}
    </GroupXp.Provider>
  );
};



export default GroupXp;
