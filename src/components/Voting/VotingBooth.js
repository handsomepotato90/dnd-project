import React,{useState} from "react";
import Button from "./Button";


export default function VotingBooth(props) {
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
          styleFloat={"left"}
          styleRadius = {"0px 0px 30px 10px"}
          name={props.name}
          votes={voteYes}
          number={voteYes.length}
          id={props.id}
          text="Yes"
          className="green"
        />
        <Button
          onClick={checkRemove}
          styleFloat={"right"}
          styleRadius = {"0px 0px 10px 30px"}
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