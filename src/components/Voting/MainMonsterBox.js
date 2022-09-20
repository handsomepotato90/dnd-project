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
  console.log(props.monsterStats)
  return (
    <>
      <div className={cName}>
        <div className="main_monster__info">
          {props.monsterStats.extraContent ? (
            null
          ) : (
            <img className="image__style" src={`img/${props.monsterStats.meta.type}.jpg`} alt={props.monsterStats.meta.type} />
          )}
          <div>{props.monsterStats.name}</div>
          <div>{props.monsterStats.meta.size}</div>
          <div>{props.monsterStats.meta.type}</div>
          <div>{props.monsterStats.meta.alignment}</div>
          <div>{`${props.monsterStats.Challenge.rating} ${props.monsterStats.Challenge.xp} `}</div>
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
