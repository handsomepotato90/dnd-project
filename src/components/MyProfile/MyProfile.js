import React, { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../hooks/http-hook";
import { LoginContext } from "../store/login-context";
import MainMonsterBox from "../Voting/MainMonsterBox";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./MyProfile.module.css";
import { useNavigate } from "react-router-dom";
import Legend from "./Legend";
import Edit from "./Edit";
import ModalConfirmation from "../UI/ModalConfirmation";
import ModalSubmitSucces from "../UI/ModalSubmitSucces";
import ModalError from "../UI/ModalError";
export default function MyProfile() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const login = useContext(LoginContext);
  const [myMonsters, setMyMonsters] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [clickDelete, setDeleteClick] = useState(false);
  const [creatureToDelete, setCreatureToDelete] = useState("");
  const [limit,setLimit] = useState(20);
  const navigate = useNavigate();

  const now = new Date().getTime();
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          "http://localhost:5000/myProfile",
          "POST",
          JSON.stringify({
            user: login.userId,
            limit:limit,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setMyMonsters([...resData]);
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest, login.userId,limit]);
  const errorHandler = () => {
    clearError(null);
  };
  const deleteEncounter = (creatureId) => {
    setDeleteClick(true);
    setCreatureToDelete(creatureId);
  };
  const startDelete = async (answer) => {
    if (answer === true) {
      try {
        setDeleteClick(false);
        await sendRequest(
          `http://localhost:5000/myProfile/${creatureToDelete}`,
          "DELETE",
          null,
          { Authorization: "Bearer " + login.token }
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
  const loadMore = () =>{
    setLimit(limit+10)
  }
  return (
    <>
      {isLoading && <LoadingSpinner as0verlay></LoadingSpinner>}
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        ></ModalError>
      )}
      {clickDelete && (
        <ModalConfirmation
          title="Are you shure you whant to delete this Creature?"
          onClick={startDelete}
        ></ModalConfirmation>
      )}
      {deleted && (
        <ModalSubmitSucces
          onClick={removeModal}
          title="Creature Deleted"
          text="Your creature has been deleted successfully"
        />
      )}
      <div className={styles.legend_main_box__style}>
        <Legend
          id="red"
          className={`${styles.legend__style} ${styles.red}`}
          text="Rejected by the community. Some edits might be in order."
        ></Legend>
        <Legend
          id="green"
          className={`${styles.legend__style} ${styles.green}`}
          text="Accepted by the community."
        ></Legend>
        <Legend
          id="grey"
          className={`${styles.legend__style} ${styles.grey}`}
          text="Ongoing voting"
        ></Legend>
      </div>
      {myMonsters.map((monster, i) => (
        <MainMonsterBox
          key={i}
          className={
            monster.timeforvoting > now
              ? styles.grey
              : monster.votes.number > 0 || monster.votes.number === undefined
              ? styles.green
              : styles.red
          }
          monsterStats={monster}
        >
          <Edit id={monster._id}></Edit>
          <button
            className={`${styles.delete_btn__style} ${styles.edit_button__style} button`}
            onClick={() => deleteEncounter(monster._id)}
          >
            {" "}
            Delete
          </button>
        </MainMonsterBox>
      ))}
      <button className={`${styles.btn_load_more} button`} onClick={loadMore}>Load More</button>
    </>
  );
}
