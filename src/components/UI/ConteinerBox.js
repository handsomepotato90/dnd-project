import styles from "./ConteinerBox.module.css"

export default function ConteinerBox(props){
    return(
        <div className={styles.container_box__style}>
            {props.children}
        </div>
    )
}