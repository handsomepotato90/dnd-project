import { useState, useEffect } from "react";
import ModalConfirmation from "../../../UI/ModalConfirmation";
import { useHttpClient } from "../../../hooks/http-hook";
import ButtonActionComponent from "./ButtonActionComponent";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import ModalSubmitSucces from "../../../UI/ModalSubmitSucces";
import { useNavigate } from "react-router-dom";
import useCharSheet from "./charecterSheetCurrent";
import checkForObjectEquality from "./checkForObjectEquality";

const UpdateButton = () => {
  const [iWantToSave, setIWantToSave] = useState(false);
  const { isLoading, sendRequest } = useHttpClient();
  const [success, setSuccess] = useState<boolean | undefined>(false);
  const charSheet = useCharSheet();
  const navigate = useNavigate();

  const localId = JSON.parse(localStorage.getItem("charSheet") ?? "")._id;

  const triggerUpdate = async () => {
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          "/myProfile/CharecterSheets/Charecters/:id",
        "PATCH",
        JSON.stringify({ ...charSheet, csId: localId }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
  };

  const resolveUpdate = async (val: boolean) => {
    if (val === true) {
      triggerUpdate();
      setSuccess(true);
      navigate("/myProfile/CharecterSheets");
      setIWantToSave(false);
    }
    if (val === false) {
      setIWantToSave(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!checkForObjectEquality(charSheet)) {
        triggerUpdate();
        localStorage.removeItem("charSheet");
        localStorage.setItem(
          "charSheet",
          JSON.stringify({ ...charSheet, csId: localId })
        );
      } else {
        clearInterval(interval);
      }
    }, 1 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [charSheet]);

  return (
    <>
      {iWantToSave && (
        <ModalConfirmation
          title={"Update Charecter Sheet ?"}
          onClick={resolveUpdate}
        ></ModalConfirmation>
      )}
      {isLoading && <LoadingSpinner asOverlay />}
      {success && (
        <ModalSubmitSucces
          onClick={(val?: boolean) => setSuccess(val)}
          title={"Update Successful"}
          text={`You've updated your charecter sheet successfully!`}
        ></ModalSubmitSucces>
      )}
      <ButtonActionComponent onClick={(val) => setIWantToSave(val)}>
        Update
      </ButtonActionComponent>
    </>
  );
};
export default UpdateButton;
