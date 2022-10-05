import React, { useState } from "react";
import ModalMonsterText from "../UI/ModalMonsterText";
import "./MainMonsterBox.css";
import Button from "./Button";
import useWindowSize from "../hooks/screensize-hook";

export default function MainMonsterBox(props) {
  const [isClicked, statusChecker] = useState(false);

  const size = useWindowSize();
  const cName = "monster_voter_style " + props.className;

  const ReadFullText = () => {
    statusChecker(true);
  };
  const removeModal = (status) => {
    statusChecker(status);
  };
  return (
    <>
      
      <div className={cName}>
        <div className="main_monster__info">
          {props.monsterStats.extraContent ? null : (
            <img
              className="image__style"
              src={`img/${props.monsterStats.meta.type}.jpg`}
              alt={props.monsterStats.meta.type}
            />
          )}
          <div>{props.monsterStats.name}</div>
          {size.width > 600 && <div>{props.monsterStats.meta.size}</div>}
          {size.width > 600 && <div>{props.monsterStats.meta.type}</div>}
          {size.width > 600 && <div>{props.monsterStats.meta.alignment}</div>}
          {size.width > 600 && (
            <div>{`${props.monsterStats.Challenge.rating} ${props.monsterStats.Challenge.xp} `}</div>
          )}
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
              <VotinBooth
                votes={props.monsterStats.votes}
                name={props.monsterStats.name}
                id={props.monsterStats._id}
              />
            )}
          </div>
        ) : (
          props.children
        )}
      </div>
      {isClicked ? (
        <ModalMonsterText
          onClick={removeModal}
          monsterStats={props.monsterStats}
        ></ModalMonsterText>
      ) : null}
    </>
  );
}
const VotinBooth = (props) => {
  const [voteYes, setVoteYes] = useState(props.votes.yes);
  const [voteNo, setVoteNo] = useState(props.votes.no);
  const checkRemove = (text, id) => {
    if (text === "Yes") {
      const votes = voteNo.indexOf(id);

      if (votes > -1) {
        voteNo.splice(votes, 1);
        setVoteNo([...voteNo]);
      }

      setVoteYes([...voteYes, id]);
    } else if (text === "No") {
      const votes = voteYes.indexOf(id);
      if (votes > -1) {
        voteYes.splice(votes, 1);
        setVoteYes([...voteYes]);
      }
      setVoteNo([...voteNo, id]);
    }
  };

  return (
    <>
      <Button
        onClick={checkRemove}
        name={props.name}
        votes={voteYes}
        number={voteYes.length}
        id={props.id}
        text="Yes"
        className="green"
      />
      <Button
        onClick={checkRemove}
        name={props.name}
        votes={voteNo}
        number={voteNo.length}
        id={props.id}
        text="No"
        className="red"
      />
    </>
  );
};
