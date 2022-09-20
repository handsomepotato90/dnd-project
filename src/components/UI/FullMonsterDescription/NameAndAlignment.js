import React from "react";


import styles from "./mainstyling.module.css"


export default function NameAndAlignment (props){
        return(
                <div className={styles.name_box}>
                        <div className={styles.name_styling}>{props.name.toUpperCase()}</div>
                        <div>{`${props.meta.size} ${props.meta.type}, ${props.meta.alignment}`}</div>
                </div>
        )
}