import React from "react"
import ReactDOM from "react-dom"
import BackDrop from "./BackDrop"



export default function NotesModal (props) {
   return(
       <React.Fragment>
           {ReactDOM.createPortal(<BackDrop onClick={ props.onClick}></BackDrop>,document.getElementById("backdrop-root"))}
           {ReactDOM.createPortal(<div>{props.children}</div>,document.getElementById("overlay-root"))}
       </React.Fragment>
   )
}