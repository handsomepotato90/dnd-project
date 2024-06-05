import React, { useState, useContext } from "react";
import CS from "../../../../../../store/CS-context";

import styles from "./InventoryComponents.module.css";

const AttunedItem: React.FC = () => {
  const [firstItem, setFirstItem] = useState("");
  const [secondItem, setSecondItem] = useState("");
  const [thirdItem, setThirdItem] = useState("");
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const cs = useContext(CS);

  const setFirstAttuned = () => {
    cs.attuneItem('first',firstItem)
    setFirst(false);
  };
  const setSecondAttuned = () => {
    cs.attuneItem('second',secondItem)
    setSecond(false);
  };
  const setThirdAttuned = () => {
    cs.attuneItem('third',thirdItem)
    setThird(false);
  };
  return (
    <div className={styles.attunment_general}>
      {!first ? (
        <span
          className={styles.attuned_items_style}
          onClick={() => setFirst(true)}
        >
          {cs.attunedItems['first']}
        </span>
      ) : (
        <input
          className={styles.attuned_items_style}
          autoFocus={true}
          onBlur={setFirstAttuned}
          value={firstItem}
          onChange={(e) => {
            setFirstItem(e.target.value);
          }}
        ></input>
      )}
      {!second ? (
        <span
          className={styles.attuned_items_style}
          onClick={() => setSecond(true)}
        >
          {cs.attunedItems['second']}
        </span>
      ) : (
        <input
          className={styles.attuned_items_style}
          autoFocus={true}
          value={secondItem}
          onBlur={setSecondAttuned}
          onChange={(e) => {
            setSecondItem(e.target.value);
          }}
        ></input>
      )}
      {!third ? (
        <span
          className={styles.attuned_items_style}
          onClick={() => setThird(true)}
        >
          {cs.attunedItems['third']}
        </span>
      ) : (
        <input
          className={styles.attuned_items_style}
          autoFocus={true}
          value={thirdItem}
          onBlur={setThirdAttuned}
          onChange={(e) => {
            setThirdItem(e.target.value);
          }}
        ></input>
      )}
    </div>
  );
}

export default AttunedItem;
