import React, { useEffect, useState } from "react";
import styles from "./BattleScreen.module.css";
import MonsterBattleBox from "./MonsterBattleBox";
import { useHttpClient } from "../hooks/http-hook";
import LoadingSpinner from "../UI/LoadingSpinner";
import ModalSubmitSucces from "../UI/ModalSubmitSucces";
import { useNavigate } from "react-router-dom";
import ModalError from "../UI/ModalError";
import ModalConfirmation from "../UI/ModalConfirmation";

export default function BattleScreen() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [fullStats, setStats] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [clickDelete,setDeleteClick] = useState(false);
  const url = window.location.href.split("battle_scr/");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          `http://localhost:5000/battle_scr/${url[1]}`
        );
        const control = [];
        resData.forEach((element) => {
          control.push(...element);
          setStats([...control]);
        });
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest]);

  const deleteEncounter = ()=>{
    setDeleteClick(true)
  }
  const startDelete = async (answer) => {
    if(answer === true){
      try {
        setDeleteClick(false)
        await sendRequest(`http://localhost:5000/battle_scr/${url[1]}`, "DELETE");
        setDeleted(true);
      } catch (err) {}
    }else{
      setDeleteClick(false)
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
     {clickDelete && <ModalConfirmation title="Are you shure that you whant to delete this Encounter?" onClick={startDelete} ></ModalConfirmation>}
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
        {fullStats.map((stats, i) => (
          <MonsterBattleBox key={i} stats={stats}></MonsterBattleBox>
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
