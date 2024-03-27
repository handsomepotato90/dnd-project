import { useState, useContext, useEffect } from "react";
import DeathSaving from "./DeathSaving";
import HealthContext from "../../../../../store/health_CSH-context";
import CS from "../../../../../store/CS-context";

import styles from "./HealthSystem.module.css";

export default function Health() {
  const [needToChangeMaxHp, setNeedToChangeMaxHp] = useState(false);
  const [checkCurrHp, setCheckCurrHp] = useState(false);
  const csh = useContext(HealthContext);
  const cs = useContext(CS);
  useEffect(() => {
    if (csh.currHp <= 0 && csh.maxHp > 0) {
      setCheckCurrHp(true);
    } else {
      setCheckCurrHp(false);
    }
  }, [csh.currHp, csh.maxHp]);

  useEffect(() => {
    cs.currentHpSetter(csh.currHp);
  }, [csh.currHp, cs]);

  useEffect(() => {
    csh.changeMaxHp(cs.maxHp);
  }, [cs.maxHp, csh]);

  useEffect(() => {
    csh.changeCurrenHp(cs.currHp, cs.maxHp);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={styles.health_managment}>
      {!checkCurrHp && (
        <>
          <div className={styles.health_text}>
            <span>Curr</span>
            <span>Max</span>
          </div>
          <div className={styles.health_value_style}>
            <span>{csh.currHp}</span>
            <span>/</span>
            {!needToChangeMaxHp ? (
              <span onClick={() => setNeedToChangeMaxHp(true)}>
                {csh.maxHp}
              </span>
            ) : (
              <input
                type="number"
                autoFocus={true}
                onChange={(e) => {
                  csh.changeMaxHp(e.target.value);
                  cs.maxHpSetter(e.target.value);
                  csh.changeCurrenHp(e.target.value);
                }}
                onBlur={() => setNeedToChangeMaxHp(false)}
              ></input>
            )}
          </div>
        </>
      )}
      {checkCurrHp && <DeathSaving></DeathSaving>}
    </div>
  );
}
