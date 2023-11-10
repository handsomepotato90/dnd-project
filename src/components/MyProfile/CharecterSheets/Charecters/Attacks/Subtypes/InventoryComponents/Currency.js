import { useState, useContext } from "react";
import CS from "../../../../../../store/CS-context";

import styles from "./InventoryComponents.module.css";

export default function Currency(props) {
  const cs = useContext(CS);
  const [modCurrency, setModCurrency] = useState(false);
  const [newValue, setNewValue] = useState(cs.currency[props.type]);

  const contextNewValue = () => {
    cs.currencyValue(props.type, newValue);
    setModCurrency(false);
  };
  return (
    <div className={styles.currency_comp}>
      <span className={styles.currency_type}>{props.type}</span>
      {!modCurrency ? (
        <span
          className={styles.currency_value}
          onClick={() => setModCurrency(true)}
        >
          {cs.currency[props.type]}
        </span>
      ) : (
        <input
          type="number"
          className={styles.currency_set_value}
          autoFocus={true}
          onBlur={contextNewValue}
          onChange={(e) => setNewValue(e.target.value)}
          value={newValue}
        ></input>
      )}
    </div>
  );
}
