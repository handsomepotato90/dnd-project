import React, { useState } from "react";
import FullMonsterDescription from "./FullMonsterDescription/FullMonsterDescription";
import "./MainMonsterBox.css";
import Button from "./Button";

export default function MainMonsterBox(props) {
  const [isClicked, statusChecker] = useState(false);
  const [clickebleText, textChanger] = useState("Read More");

  const cName = "monster_voter_style " + props.className;

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

  console.log(props.monsterStats.meta);

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
        {props.voting === "yes" ? (
          <div className="voting_booth">
            {props.monsterStats.extraContent ? (
              <div>{props.monsterStats.extraContent.text}</div>
            ) : (
              <VotinBooth name={props.monsterStats.name} />
            )}
          </div>
        ) : (
          props.children
        )}
      </div>
      {isClicked ? (
        <FullMonsterDescription monsterStats={props.monsterStats} />
      ) : null}
    </>
  );
}
const VotinBooth = (props) => {
  return (
    <>
      <Button
        // onClick={Voting}
        name={props.name}
        // voteCount={votesYes}
        text="Yes"
        className="green"
      />
      <Button
        // onClick={Voting}
        name={props.name}
        // voteCount={votesNo}
        text="No"
        className="red"
      />
    </>
  );
};
