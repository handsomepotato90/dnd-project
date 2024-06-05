import React from "react";
import NotesComponents from "./NotesComponents/NotesComponents";
import styles from "./Inventory.module.css";

const Notes: React.FC = () => {
  return (
    <div className={styles.general_notes}>
      <NotesComponents></NotesComponents>
    </div>
  );
};

export default Notes;
