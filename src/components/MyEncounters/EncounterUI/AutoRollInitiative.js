import styles from "./EncounterUI.module.css"

export default function AutoRollInitiative(props){
    const dexterityModifire = parseInt(props.dexMod.replace(/[()]/g, ''), 10);
    const rollInitiative = () =>{
        const randomRoll = Math.floor(Math.random() * 20)
        props.onClick(randomRoll+ 1 + dexterityModifire )
    }
    return(
        <span className={`${styles.auto_roll_button__style}`} onClick={rollInitiative}>Auto Roll</span>
        )
}