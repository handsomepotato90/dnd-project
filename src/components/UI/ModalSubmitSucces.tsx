import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import SuccessfulSubmission from "./SuccessfulSubmission";

interface ModalSubmitSuccesProps {
  onClick: (val?: boolean) => void;
  monsterStats?: any; 
  title: string;
  text: string;
}

const ModalSubmitSucces: React.FC<ModalSubmitSuccesProps> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <SuccessfulSubmission
          onClick={props.onClick}
          title={props.title}
          text={props.text}
        />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default ModalSubmitSucces;
