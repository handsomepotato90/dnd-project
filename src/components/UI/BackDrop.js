import styles from "./BackDrop.module.css"

 export default function BackDrop(props){
    return(

        <div onClick={() =>props.onClick(false)} className={styles.modal_style}>{props.children}</div>
    )
 }