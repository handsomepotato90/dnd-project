import React, { useState } from "react";
import Button from "./Button";

interface VotingBoothType{
  votes: {yes: string[], no: string[]},
  name: string,
  id: string,
}

const VotingBooth: React.FC<VotingBoothType> = ({votes, name, id}) => {
  const [voteYes, setVoteYes] = useState(votes.yes);
  const [voteNo, setVoteNo] = useState(votes.no);
  
  const checkRemove = (text: "Yes"|"No", idRemove:string) => {
    if (text === "Yes") {
      const votes = voteNo.indexOf(idRemove);

      if (votes > -1) {
        voteNo.splice(votes, 1);
        setVoteNo([...voteNo]);
      }

      setVoteYes([...voteYes, idRemove]);
    } else if (text === "No") {
      const votes = voteYes.indexOf(idRemove);
      if (votes > -1) {
        voteYes.splice(votes, 1);
        setVoteYes([...voteYes]);
      }
      setVoteNo([...voteNo, idRemove]);
    }
  };

  return (
    <>
      <Button
        onClick={checkRemove}
        styleFloat={"left"}
        styleRadius={"0px 0px 30px 10px"}
        name={name}
        votes={voteYes}
        number={voteYes.length}
        id={id}
        text="Yes"
        className="green"
      />
      <Button
        onClick={checkRemove}
        styleFloat={"right"}
        styleRadius={"0px 0px 10px 30px"}
        name={name}
        votes={voteNo}
        number={voteNo.length}
        id={id}
        text="No"
        className="red"
      />
    </>
  );
}
export default VotingBooth;