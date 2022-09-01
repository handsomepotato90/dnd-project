import React from "react"
import ReactDOM from "react-dom"
import BackDrop from "./BackDrop"
import SuccessfulSubmission from "./SuccessfulSubmission"


export default function ModalBack (props) {
   return(
       <React.Fragment>
           {ReactDOM.createPortal(<BackDrop onClick={ props.onClick}></BackDrop>,document.getElementById("backdrop-root"))}
           {ReactDOM.createPortal(<SuccessfulSubmission onClick={props.onClick} monsterStats={props.monsterStats}></SuccessfulSubmission>,document.getElementById("overlay-root"))}
       </React.Fragment>
   )
}