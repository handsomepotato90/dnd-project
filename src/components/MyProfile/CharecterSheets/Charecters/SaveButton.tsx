import { useState, useContext } from "react";
import ModalConfirmation from "../../../UI/ModalConfirmation";
import CS from "../../../store/CS-context";
import { LoginContext } from "../../../store/login-context";
import { useHttpClient } from "../../../hooks/http-hook";
import ButtonActionComponent from "./ButtonActionComponent";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../UI/LoadingSpinner";

export default function SaveButton() {
  const [iWantToSave, setIWantToSave] = useState<boolean>(false);
  const { isLoading, sendRequest } = useHttpClient();
  const navigate = useNavigate();
  const cs = useContext(CS);
  const user = useContext(LoginContext);

  const resolveSave = async (val: boolean) => {
    if (val === true) {
      try {
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            "/myProfile/CharecterSheets/Charecters",
          "POST",
          JSON.stringify({
            xp: cs.xp,
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
            currHp: cs.currHp,
            hp_max: cs.maxHp,
            tempHp: cs.tempHp,
            meta: cs.meta,
            creator: user.userId,
            otherProff: cs.otherProficiency,
            inspiration: cs.inspiration,
            specialStat: cs.specialStat,
            specialName: cs.specialName,
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
        navigate("/myProfile/CharecterSheets");
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
      {isLoading && <LoadingSpinner asOverlay />}
      <ButtonActionComponent onClick={(val: boolean) => setIWantToSave(val)}>
        Save
      </ButtonActionComponent>
    </>
  );
}
