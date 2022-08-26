import React,{useState} from "react";
import ImmunityesModal from "./ImmunityesModal";
import styles from "./BattleScreen.module.css";


export default function MonsterBattleBox(props)  {
    const [isShown, setIsShown] = useState(false);
    let hp = props.stats.hp.split(" ");
    const [health, healthHandler] = useState(hp[0]);
    const [calculate, calculateHanler] = useState(0);
  
    let ac = props.stats.AC.split(" ");
    const calculateThis = (event) => {
      calculateHanler(event.target.value);
    };
    const addNow = () =>{
      healthHandler(parseInt(health) + parseInt(calculate))
      calculateHanler(0)
    }
    const subtractNow = () =>{
      healthHandler(parseInt(health) - parseInt(calculate))
      calculateHanler(0)
  
    }
    const modifyHealt = (event) => {
      healthHandler(event.target.value);
    };
  
    return (
      <>
        <div
          className={styles.encounter_box__style}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && (
            <ImmunityesModal
              conI={props.stats.conImm}
              dmgI={props.stats.dmgImm}
              dmgR={props.stats.dmgRes}
              dmgV={props.stats.dmgVul}
            ></ImmunityesModal>
          )}
          <span className={styles.encounter_name__style}>{props.stats.name}</span>
          <img
            className={styles.image__style}
            src={props.stats.img}
            alt="monster"
          ></img>
          <div>
            <span className={styles.stat_text__style}>HP:</span>
            <input
              className={`${styles.stat_text__style} ${styles.input__style}`}
              value={health}
              onChange={modifyHealt}
            ></input>
            <button onClick={addNow} className={`${styles.subm_subt__style} ${styles.add}`}>
              +
            </button>
            <input
              onChange={calculateThis}
              className={`${styles.stat_text__style} ${styles.input__style}`}
              value={calculate}
            ></input>
            <button onClick={subtractNow} className={`${styles.subm_subt__style} ${styles.subtract}`}>
              -
            </button>
  
            <span className={styles.stat_text__style}>AC:</span>
            <span className={styles.stat_text__style}>{ac[0]}</span>
          </div>
        </div>
      </>
    );
  };
  