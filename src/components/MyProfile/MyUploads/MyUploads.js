import React, { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";
import ModalConfirmation from "../../UI/ModalConfirmation";
import ModalSubmitSucces from "../../UI/ModalSubmitSucces";
import ModalError from "../../UI/ModalError";
import MonsterBattleBox from "../../MyEncounters/MonsterBattleBox";
import ConteinerBox from "../../UI/ConteinerBox";

import styles from "./MyUploads.module.css";
import MonsterName from "../../Voting/MonsterName";

export default function MyUploads() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const login = useContext(LoginContext);
  const [searchCondition, setSearchCondition] = useState("");
  const [myMonsters, setMyMonsters] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [clickDelete, setDeleteClick] = useState(false);
  const [creatureToDelete, setCreatureToDelete] = useState("");
  const [limit, setLimit] = useState(20);
  const navigate = useNavigate();
  let timer;
  const now = new Date().getTime();
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/myProfile/MyUploads",
          "POST",
          JSON.stringify({
            user: login.userId,
            limit: limit,
            name: searchCondition,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setMyMonsters([...resData]);
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest, login.userId, limit, searchCondition]);

  const nameSearch = (event) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      setSearchCondition(event.target.value);
    }, 1000);
  };

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
          process.env.REACT_APP_BACKEND_URL +
            `/MyProfile/MyUploads/${creatureToDelete}`,
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
  console.log(myMonsters);
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

      <input
        className={styles.search_bar__style}
        onKeyUp={nameSearch}
        placeholder="Search"
      ></input>
      <ConteinerBox>
        {myMonsters.map((monster, i) => (
          <MonsterBattleBox
            key={i}
            childrenTopAndBottom={true}
            battleSideBar={false}
            stats={monster}
            modalStats={true}
            width="265px"
            height="250px"
          >
            <div className={styles.name_plate__style}>
              <MonsterName name={monster.name} />
              <span
                className={`${
                  monster.timeforvoting > now
                    ? "grey"
                    : monster.votes.number > 0 ||
                      monster.votes.number === undefined
                    ? "green"
                    : "red"
                } 
                  ${styles.voting_status__style}`}
              >
                {monster.timeforvoting > now
                  ? "Ongoing"
                  : monster.votes.number > 0 ||
                    monster.votes.number === undefined
                  ? "Accepted"
                  : "Rejected"}
              </span>
            </div>
            <div>
              <Edit id={monster._id}></Edit>
              <button
                className={`${styles.delete_btn__style} ${styles.edit_button__style} button`}
                onClick={() => deleteEncounter(monster._id)}
              >
                {" "}
                Delete
              </button>
            </div>
          </MonsterBattleBox>
        ))}
      </ConteinerBox>
    </>
  );
}
