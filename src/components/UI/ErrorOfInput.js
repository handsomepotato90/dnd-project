import styles from "./ErrorOfInput.module.css"
export default function ErrorOfInput(props){
    return(<div className={styles.error__style}>{props.children}</div>)
}