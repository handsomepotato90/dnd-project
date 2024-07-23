import React, { useState } from "react";
import ModalConfirmation from "../../../UI/ModalConfirmation";
import { useHttpClient } from "../../../hooks/http-hook";
import ButtonActionComponent from "./ButtonActionComponent";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import useCharSheet from "./charecterSheetCurrent";

const SaveButton: React.FC = () => {
  const [iWantToSave, setIWantToSave] = useState<boolean>(false);
  const { isLoading, sendRequest } = useHttpClient();
  const charSheet = useCharSheet();
  const navigate = useNavigate();

  const triggerSave = async () => {
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          "/myProfile/CharecterSheets/Charecters",
        "POST",
        JSON.stringify(charSheet),
        {
          "Content-Type": "application/json",
        }
      );
      navigate("/myProfile/CharecterSheets");
    } catch (err) {}
  };

  const resolveSave = (val: boolean) => {
    if (val === true) {
      triggerSave();
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
};

export default SaveButton;
