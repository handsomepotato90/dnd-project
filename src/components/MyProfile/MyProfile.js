import React, { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../hooks/http-hook";
import { LoginContext } from "../store/login-context";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./MyProfile.module.css";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";
import ModalConfirmation from "../UI/ModalConfirmation";
import ModalSubmitSucces from "../UI/ModalSubmitSucces";
import ModalError from "../UI/ModalError";
import MonsterBattleBox from "../MyEncounters/MonsterBattleBox";
export default function MyProfile() {
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
          process.env.REACT_APP_BACKEND_URL + "/myProfile",
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
          process.env.REACT_APP_BACKEND_URL + `/myProfile/${creatureToDelete}`,
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
  const loadMore = () => {
    setLimit(limit + 10);
  };
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
      
      {/* <div className={styles.legend_main_box__style}>
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
        {myMonsters.length < 1 && (
          <EmptyPage message="You haven't created any creatures yet."></EmptyPage>
        )}
      </div> */}
      {/* {myMonsters.length > 1 && ( */}

        <input
          className={styles.search_bar__style}
          onKeyUp={nameSearch}
          placeholder="Search"
        ></input>
      {/* )} */}
      <div className={styles.monster_holder__style}>
        {myMonsters.map((monster, i) => (
          <MonsterBattleBox
            key={i}
            childrenTopAndBottom={true}
            battleSideBar={false}
            stats={monster}
            modalStats={true}
            width="250px"
            height="250px"
          >
            <span
              className={
                `${monster.timeforvoting > now
                  ? styles.grey
                  : monster.votes.number > 0 ||
                    monster.votes.number === undefined
                  ? styles.green
                  : styles.red} 
                  ${styles.voting_status__style}`
              }
            >
             { monster.timeforvoting > now
                  ? "Ongoing"
                  : monster.votes.number > 0 ||
                    monster.votes.number === undefined
                  ? "Accepted"
                  : "Rejected"}
            </span>
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
      </div>
      {myMonsters.length > 10 && (
        <>
          <section>
            <a href="/myProfile/?page=1">1</a>
            <a href="/myProfile/?page=2">2</a>
            <a href="/myProfile/?page=3">3</a>
          </section>
          <button
            className={`${styles.btn_load_more} button`}
            onClick={loadMore}
          >
            Load More
          </button>
        </>
      )}
    </>
  );
}
