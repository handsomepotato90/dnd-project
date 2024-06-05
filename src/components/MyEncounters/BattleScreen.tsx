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
import ConteinerBox from "../UI/ConteinerBox";

import MonsterStats from "../types/MonsterStatsTypes";

const BattleScreen: React.FC = () => {
  const auth = useContext(LoginContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [deleted, setDeleted] = useState(false);
  const [clickDelete, setDeleteClick] = useState(false);
  const [all, setAll] = useState<MonsterStats[]>([]);
  const url = window.location.href.split("battle_scr/");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/battle_scr/${url[1]}`
        );
        const participants = [
          ...resData.monsters.flat().map((monster: MonsterStats) => ({
            ...monster,
            initiative: 0,
          })),
          ...resData.players.map((player: MonsterStats) => ({
            ...player,
            initiative: 0,
          })),
        ];

        setAll(participants);
      } catch (err) {}
    };

    fetchMonsters();
  }, [sendRequest]);

  const deleteEncounter = () => {
    setDeleteClick(true);
  };

  const startDelete = async (answer: boolean) => {
    if (answer === true) {
      try {
        setDeleteClick(false);
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/battle_scr/${url[1]}`,
          "DELETE",
          null,
          {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          }
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
    clearError();
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
      <ConteinerBox>
        {all.map((stats, i) => (
          <MonsterBattleBox
            key={i}
            stats={stats}
            width="250px"
            height="250px"
            battleSideBar={true}
            childrenTopAndBottom={false}
            modalStats={false}
          ></MonsterBattleBox>
        ))}
      </ConteinerBox>
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
};
export default BattleScreen;