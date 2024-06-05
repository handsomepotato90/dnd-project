import React, { useState, useContext } from "react";
import CS from "../../../../../../store/CS-context";

import styles from "./InventoryComponents.module.css";

const OtherItems: React.FC = () => {
  const cs = useContext(CS);
  const [inventoryItems, setInventoryItems] = useState(cs.inventory);
  const inventorySave = () => {
    cs.otherInventory(inventoryItems);
  };
  return (
    <textarea
      onBlur={inventorySave}
      onChange={(e) => {
        setInventoryItems(e.target.value);
      }}
      className={styles.text_area_style}
    >{inventoryItems}</textarea>
  );
}

export default OtherItems;
