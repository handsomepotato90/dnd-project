import React, { useState } from "react";
import FullMonsterDescription from "./FullMonsterDescription/FullMonsterDescription";
import "./MainMonsterBox.css";

export default function MainMonsterBox(props) {

  const [isClicked, statusChecker] = useState(false);
  const [clickebleText, textChanger] = useState("Read More");


  const cName = "monster_voter_style " + props.className;
  const votingColection = {
    positiveVotes: "0",
    positive: "Yes",
    negativeVotes: "0",
    negative: "No",
  };


  const ReadFullText = () => {
    if (clickebleText === "Read More") {
      statusChecker(true);
      textChanger("Close");
    } else {
        textChanger("Read More");
      statusChecker(false);
    }
  };
  const clumpOfData = `${props.monsterStats.meta}`;
  const splitStats = clumpOfData.split(", ");

  const sizeType = splitStats[0].split(" ");
  
  console.log(props.monsterStats.meta)
   
  return (
    <>
      <div className={cName}>
        <div className="main_monster__info">
          <div>{props.monsterStats.name}</div>
          <div>{sizeType[0]}</div>
          <div>{sizeType[1]}</div>
          <div>{splitStats[1]}</div>
          <div>{props.monsterStats.Challenge}</div>
          {props.monsterStats.extraContent ? (
            <div>{props.monsterStats.extraContent.readMore}</div>
          ) : (
            <div className="read_button__style" onClick={ReadFullText}>
              {clickebleText}
            </div>
          )}
        </div>
        <div className="voting_booth">
          {props.monsterStats.extraContent ? (
            <VotinBooth fillTheBoxes={props.monsterStats.extraContent} />
          ) : (
            <VotinBooth fillTheBoxes={votingColection} />
          )}
        </div>
      </div>
        {isClicked ? <FullMonsterDescription monsterStats={props.monsterStats} /> : null}
      
    </>
  );
}
const VotinBooth = (props) => {
  return (
    <>
      {props.fillTheBoxes.positiveVotes ? (
        <div>{props.fillTheBoxes.positiveVotes}</div>
      ) : null}
      <div>{props.fillTheBoxes.positive}</div>
      {props.fillTheBoxes.positiveVotes ? (
        <div>{props.fillTheBoxes.negativeVotes}</div>
      ) : null}
      <div>{props.fillTheBoxes.negative}</div>
    </>
  );
};
