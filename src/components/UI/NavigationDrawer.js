import React from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import "./NavigationDrawer.css";

export default function NavigationDrawer(props) {
  return (
    <React.Fragment>
      {/* {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick}></BackDrop>,
        document.getElementById("backdrop-root")
      )} */}
      {ReactDOM.createPortal(
        <div className={props.className}>
          <button className="close_btn__style" onClick={() => props.onClick(false)}>Close</button>
          {props.children}
        </div>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
