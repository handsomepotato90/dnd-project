import { useState, useEffect, useContext } from "react";
import ModalConfirmation from "../../../UI/ModalConfirmation";
import CS from "../../../store/CS-context";
import { LoginContext } from "../../../store/login-context";
import { useHttpClient } from "../../../hooks/http-hook";

import styles from "./Charecters.module.css";

export default function SaveButton() {
  const [iWantToSave, setIWantToSave] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const cs = useContext(CS);
  const user = useContext(LoginContext);

  const resolveSave = async (val) => {
    if (val === true) {
      try {
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            "/myProfile/CharecterSheets/Charecters",
          "POST",
          JSON.stringify({
            proficiency: cs.proficiency,
            stats: cs.stats,
            skills: cs.skillsProf,
            AC: cs.armorClass,
            defences: cs.defences,
            conditions: cs.conditions,
            weapons: cs.weapons,
            spell_mod: cs.spellMods,
            currency: cs.currency,
            attuned_items: cs.attunedItems,
            inventory: cs.inventory,
            characteristics: cs.characteristics,
            Background_appearance: cs.backNapp,
            notes: cs.notes,
            classes: cs.classes,
            speed: cs.speed,
            hp_max: cs.maxHp,
            meta: cs.meta,
            creator: user.userId,
            otherProff: cs.otherProficiency,
            spells: {
              "1st": {
                slots: cs.spells["1st"].slots,
                spell_ids: cs.spells["1st"].spell_ids,
              },
              "2nd": {
                slots: cs.spells["2nd"].slots,
                spell_ids: cs.spells["2nd"].spell_ids,
              },
              "3rd": {
                slots: cs.spells["3rd"].slots,
                spell_ids: cs.spells["3rd"].spell_ids,
              },
              "4th": {
                slots: cs.spells["4th"].slots,
                spell_ids: cs.spells["4th"].spell_ids,
              },
              "5th": {
                slots: cs.spells["5th"].slots,
                spell_ids: cs.spells["5th"].spell_ids,
              },
              "6th": {
                slots: cs.spells["6th"].slots,
                spell_ids: cs.spells["6th"].spell_ids,
              },
              "7th": {
                slots: cs.spells["7th"].slots,
                spell_ids: cs.spells["7th"].spell_ids,
              },
              "8th": {
                slots: cs.spells["8th"].slots,
                spell_ids: cs.spells["8th"].spell_ids,
              },
              "9th": {
                slots: cs.spells["9th"].slots,
                spell_ids: cs.spells["9th"].spell_ids,
              },
              Can: {
                slots: cs.spells["Can"].slots,
                spell_ids: cs.spells["Can"].spell_ids,
              },
            },
          }),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (err) {}
      setIWantToSave(false);
    }
    if (val === false) {
      setIWantToSave(false);
    }
  };

  return (
    <>
      {iWantToSave && (
        <ModalConfirmation
          title={"Save Charecter Sheet ?"}
          onClick={resolveSave}
        ></ModalConfirmation>
      )}
      <div className={styles.save_btn_holder_position}>
        <button
          onClick={() => setIWantToSave(true)}
          className={`red_text black__background ${styles.save_btn_position}`}
        >
          Save
        </button>
      </div>
    </>
  );
}
