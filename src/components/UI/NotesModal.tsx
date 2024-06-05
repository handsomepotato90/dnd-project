import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";

interface NotesModalProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NotesModal: React.FC<NotesModalProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <div>{props.children}</div>,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default NotesModal;
