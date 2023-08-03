import React, { useEffect, useState, useContext } from "react";
import styles from "./BattleScreen.module.css";
import { LoginContext } from "../store/login-context";
import MonsterBattleBox from "./MonsterBattleBox";
import { useHttpClient } from "../hooks/http-hook";
import LoadingSpinner from "../UI/LoadingSpinner";
import ModalSubmitSucces from "../UI/ModalSubmitSucces";
import { useNavigate } from "react-router-dom";
import ModalError from "../UI/ModalError";
import ModalConfirmation from "../UI/ModalConfirmation";
import Initiative from "./EncounterUI/Initiative";

export default function BattleScreen() {
  const auth = useContext(LoginContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [deleted, setDeleted] = useState(false);
  const [clickDelete, setDeleteClick] = useState(false);
  const [all, setAll] = useState([]);
  const url = window.location.href.split("battle_scr/");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/battle_scr/${url[1]}`
        );
        const control = [];
        resData.monsters.forEach((element) => {
          control.push(...element);
        });
        const allParticipents = [...control, ...resData.players];
        for (let index = 0; index < allParticipents.length; index++) {
          allParticipents[index].initiative = 0;
        }
        setAll([...allParticipents]);
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest]);

  const deleteEncounter = () => {
    setDeleteClick(true);
  };

  const startDelete = async (answer) => {
    if (answer === true) {
      try {
        setDeleteClick(false);
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/battle_scr/${url[1]}`,
          "DELETE",
          null,
          { Authorization: "Bearer " + auth.token }
        );
        setDeleted(true);
      } catch (err) {}
    } else {
      setDeleteClick(false);
    }
  };

  const removeModal = () => {
    navigate("/");
  };

  const errorHandler = () => {
    clearError(null);
  };
  return (
    <>
      {clickDelete && (
        <ModalConfirmation
          title="Are you shure that you whant to delete this Encounter?"
          onClick={startDelete}
        ></ModalConfirmation>
      )}
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        ></ModalError>
      )}
      {deleted && (
        <ModalSubmitSucces
          onClick={removeModal}
          title="Encounter Deleted"
          text="Your encounter has been deleted successfully"
        />
      )}
      {isLoading && <LoadingSpinner asOverlay></LoadingSpinner>}
      <div className={styles.display__style}>
        {all.map((stats, i) => (
          <MonsterBattleBox
            key={i}
            stats={stats}
            width="250px"
            height="250px"
            battleSideBar={true}
          ></MonsterBattleBox>
        ))}
      </div>
      <div className={styles.delete_btn__holder}>
        <button
          className={`${styles.delete_btn__style} button`}
          onClick={deleteEncounter}
        >
          {" "}
          Delete Encounter
        </button>
      </div>
    </>
  );
}
