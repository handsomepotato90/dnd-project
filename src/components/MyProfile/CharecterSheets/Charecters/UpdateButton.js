import { useState, useContext } from "react";
import ModalConfirmation from "../../../UI/ModalConfirmation";
import CS from "../../../store/CS-context";
import { LoginContext } from "../../../store/login-context";
import { useHttpClient } from "../../../hooks/http-hook";
import ButtonActionComponent from "./ButtonActionComponent";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import ModalSubmitSucces from "../../../UI/ModalSubmitSucces";

export default function UpdateButton() {
  const [iWantToSave, setIWantToSave] = useState(false);
  const { isLoading, sendRequest } = useHttpClient();
  const [success, setSuccess] = useState(false);

  const cs = useContext(CS);
  const user = useContext(LoginContext);
  const localId = JSON.parse(localStorage.getItem("charSheet"))._id;
  const resolveSave = async (val) => {
    if (val === true) {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            "/myProfile/CharecterSheets/Charecters/:id",
          "PATCH",
          JSON.stringify({
            xp: cs.xp,
            currHp: cs.currHp,
            tempHp: cs.tempHp,
            csId: localId,
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
        localStorage.setItem("charSheet", JSON.stringify(resData.charecter));
        setSuccess(true);
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
          title={"Update Charecter Sheet ?"}
          onClick={resolveSave}
        ></ModalConfirmation>
      )}
      {isLoading && <LoadingSpinner asOverlay />}
      {success && (
        <ModalSubmitSucces
          onClick={(val) => setSuccess(val)}
          title={"Update Successful"}
          text={`You've updated your charecter sheet successfully!`}
        ></ModalSubmitSucces>
      )}
      <ButtonActionComponent onClick={(val) => setIWantToSave(val)}>
        Update
      </ButtonActionComponent>
    </>
  );
}
