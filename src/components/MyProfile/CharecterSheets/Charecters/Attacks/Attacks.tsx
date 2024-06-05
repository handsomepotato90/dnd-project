import { useState } from "react";
import styles from "./Attacks.module.css";
import Actions from "./Subtypes/Actions";
import Description from "./Subtypes/Description";
import Inventory from "./Subtypes/Inventory";
import Notes from "./Subtypes/Notes";
import Spells from "./Subtypes/Spells";
import NotesModal from "../../../../UI/NotesModal";

export default function Attacks() {
  const [activeTab, setActiveTab] = useState("actions");
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  const openNotesModal = () => {
    setIsNotesModalOpen(true);
  };

  const closeNotesModal = () => {
    setIsNotesModalOpen(false);
    setActiveTab("notes"); 
  };

  return (
    <div className={styles.attacks_big_box}>
      <div className={styles.attacks_navigation}>
        <div onClick={() => switchTab("actions")}>Actions</div>
        <div onClick={() => switchTab("spells")}>Spells</div>
        <div onClick={() => switchTab("inventory")}>Inventory</div>
        {/* <div onClick={() => switchTab("traits")}>Features & Traits</div> */}
        <div onClick={() => switchTab("description")}>Description</div>
        <div onClick={openNotesModal}>Notes</div>
      </div>
      <div>
        {activeTab === "actions" && <Actions />}
        {activeTab === "spells" && <Spells />}
        {activeTab === "inventory" && <Inventory />}
        {/* {activeTab === "traits" && <FeaturesNTraits />} */}
        {activeTab === "description" && <Description />}
        {isNotesModalOpen && (
          <NotesModal onClick={closeNotesModal}>
            <Notes />
          </NotesModal>
        )}
      </div>
    </div>
  );
}
