import Currency from "./InventoryComponents/Currency";
import AttunedItem from "./InventoryComponents/AttunedItem";

import styles from "./Inventory.module.css";
import OtherItems from "./InventoryComponents/OtherItems";
export default function Inventory() {
  return (
    <div className={styles.inventory_box_look}>
      <div className={styles.top_part_look}>
        <div>
          <Currency type={"PP"}></Currency>
          <Currency type={"GP"}></Currency>
          <Currency type={"EP"}></Currency>
          <Currency type={"SP"}></Currency>
          <Currency type={"CP"}></Currency>
        </div>
        <div>
          <span>Atunned Items</span>
          <AttunedItem></AttunedItem>
        </div>
      </div>
      <div className={styles.other_items_style}>
        <OtherItems></OtherItems>
      </div>
    </div>
  );
}
