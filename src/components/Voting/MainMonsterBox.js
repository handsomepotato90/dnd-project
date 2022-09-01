import React, { useState } from "react";
import ModalMonsterText from "../UI/ModalMonsterText";
import "./MainMonsterBox.css";
import Button from "./Button";
// import {aberration} from "../../icons/aberration.jpg"
export default function MainMonsterBox(props) {
  const [isClicked, statusChecker] = useState(false);
  // const [clickebleText, textChanger] = useState("Read More");

  const cName = "monster_voter_style " + props.className;

  const ReadFullText = () => {
    statusChecker(true)
  };
  const removeModal = (status) =>{
    statusChecker(status)
  }
  const clumpOfData = `${props.monsterStats.meta}`;
  const splitStats = clumpOfData.split(", ");

  const sizeType = splitStats[0].split(" ");
  console.log(sizeType[1]);
  return (
    // C:\Users\Cvetan Petkov\dnd-project\dnd-project\src\icons
    <>
      <div className={cName}>
        <div className="main_monster__info">
          {props.monsterStats.extraContent ? (
            null
          ) : (
            <img src={`img/${sizeType[1]}.jpg`} alt={sizeType[1]} />
          )}
          <div>{props.monsterStats.name}</div>
          <div>{sizeType[0]}</div>
          <div>{sizeType[1]}</div>
          <div>{splitStats[1]}</div>
          <div>{props.monsterStats.Challenge}</div>
          {props.monsterStats.extraContent ? (
            <div>{props.monsterStats.extraContent.readMore}</div>
          ) : (
            <div className="read_button__style" onClick={ReadFullText}>
              Read More
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
        <ModalMonsterText onClick={removeModal} monsterStats={props.monsterStats}></ModalMonsterText>
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
