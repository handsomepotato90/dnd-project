
import DieButtons from "./Buttons/DieButtons"
import StandartButtons from "./Buttons/StandartButtons"



import styles from "./CalculatorButtons.module.css"


export default function CalculatorButtons() {
  return(<div className={styles.calculator_buttons__general_div}>

     <DieButtons></DieButtons>
     <StandartButtons></StandartButtons>

  </div>);
}
