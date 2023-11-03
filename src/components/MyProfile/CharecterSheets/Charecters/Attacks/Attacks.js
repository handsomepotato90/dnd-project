import { useState } from "react";
import styles from "./Attacks.module.css";
import Actions from "./Subtypes/Actions";
import Description from "./Subtypes/Description";
import FeaturesNTraits from "./Subtypes/FeaturesNTraits";
import Inventory from "./Subtypes/Inventory";
import Notes from "./Subtypes/Notes";
import Spells from "./Subtypes/Spells";
import NotesModal from "../../../../UI/NotesModal";
export default function Attacks() {
  const [actions, setActions] = useState(true);
  const [spells, setSpells] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [traits, setTraits] = useState(false);
  const [description, setDescription] = useState(false);
  const [notes, setNotes] = useState(false);

  

  const switchActions = () => {
    setActions(true);
    setSpells(false);
    setInventory(false);
    setTraits(false);
    setDescription(false);
    setNotes(false);
  };
  const switchSpells = () => {
    setActions(false);
    setSpells(true);
    setInventory(false);
    setTraits(false);
    setDescription(false);
    setNotes(false);
  };
  const switchInventory = () => {
    setActions(false);
    setSpells(false);
    setInventory(true);
    setTraits(false);
    setDescription(false);
    setNotes(false);
  };
  const switchTraits = () => {
    setActions(false);
    setSpells(false);
    setInventory(false);
    setTraits(true);
    setDescription(false);
    setNotes(false);
  };
  const switchDescription = () => {
    setActions(false);
    setSpells(false);
    setInventory(false);
    setTraits(false);
    setDescription(true);
    setNotes(false);
  };
  const switchNotes = () => {
    setActions(false);
    setSpells(false);
    setInventory(false);
    setTraits(false);
    setDescription(false);
    setNotes(true);
  };

  return (
    <div className={styles.attacks_big_box}>
      <div className={styles.attacks_navigation}>
        <div onClick={switchActions}>Actions</div>
        <div onClick={switchSpells}>Spells</div>
        <div onClick={switchInventory}>Inventory</div>
        <div onClick={switchTraits}>Features & Traits</div>
        <div onClick={switchDescription}>Description</div>
        <div onClick={switchNotes}>Notes</div>
      </div>
      <div>
        {actions && <Actions></Actions>}
        {spells && <Spells></Spells>}
        {inventory && <Inventory></Inventory>}
        {traits && <FeaturesNTraits></FeaturesNTraits>}
        {description && <Description></Description>}
        {notes && <NotesModal onClick={(val) => setNotes(val)}><Notes></Notes></NotesModal>}
      </div>
    </div>
  );
}
