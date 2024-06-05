import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import ErrorOfInput from "./ErrorOfInput";

interface ModalErrorProps {
  header: string;
  error: string;
  onClick: () => void;
}

const ModalError: React.FC<ModalErrorProps> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ErrorOfInput
          header={props.header}
          error={props.error}
          onClick={props.onClick}
        />,
        document.getElementById("overlay-root")!
      )}
    </React.Fragment>
  );
};

export default ModalError;
