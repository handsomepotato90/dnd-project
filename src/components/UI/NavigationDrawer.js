import React from "react"
import ReactDOM from "react-dom"
import BackDrop from "./BackDrop"
import  "./NavigationDrawer.css"


export default function NavigationDrawer (props) {
   return(
       <React.Fragment>
           {ReactDOM.createPortal(<BackDrop onClick={props.onClick}></BackDrop>,document.getElementById("backdrop-root"))}
           {ReactDOM.createPortal(<div onClick={ ()=>props.onClick(false)} className="burger__style">{props.children}</div>,document.getElementById("overlay-root"))}
       </React.Fragment>
   )
}