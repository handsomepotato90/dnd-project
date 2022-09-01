 import React from "react"
 import ReactDOM from "react-dom"
import FullMonsterDescription from "./FullMonsterDescription/FullMonsterDescription"
import BackDrop from "./BackDrop"



 export default function ModalBack (props) {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={ props.onClick}></BackDrop>,document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<FullMonsterDescription onClick={props.onClick} monsterStats={props.monsterStats}></FullMonsterDescription>,document.getElementById("overlay-root"))}
        </React.Fragment>
    )
 }