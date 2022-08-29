 import React from "react"
 import styles from "./ModalBack.module.css"
 export default function ModalBack(props){
    return(
        <div className={styles.modal_style}>{props.children}</div>
    )
 }