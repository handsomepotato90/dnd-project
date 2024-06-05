import NotesComponents from "./NotesComponents/NotesComponents";
import styles from "./Inventory.module.css";

export default function Notes() {
  return <div className={styles.general_notes}>
    <NotesComponents></NotesComponents>
  </div>;
}
