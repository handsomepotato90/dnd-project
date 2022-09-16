import React from "react"
import ReactDOM from "react-dom"
import BackDrop from "./BackDrop"
import ErrorOfInput from "./ErrorOfInput"


export default function ModalError (props) {
   return(
       <React.Fragment>
           {ReactDOM.createPortal(<BackDrop onClick={ props.onClick}></BackDrop>,document.getElementById("backdrop-root"))}
           {ReactDOM.createPortal(<ErrorOfInput header={props.header} error ={props.error} show = {!!props.error} onClick={props.onClick}></ErrorOfInput>,document.getElementById("overlay-root"))}
       </React.Fragment>
   )
}