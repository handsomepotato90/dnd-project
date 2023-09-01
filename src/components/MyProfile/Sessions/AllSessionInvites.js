import React, { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import ConteinerBox from "../../UI/ConteinerBox";
import AllSessionsBoxes from "./sessionUi/AllSessionsBoxes";
import ModalError from "../../UI/ModalError";
import LoadingSpinner from "../../UI/LoadingSpinner";

import styles from "./Sessions.module.css";

export default function AllSessionInvites(props) {
  const [sessionInfo, setSessionInfo] = useState([]);
  const [mySessions, setMySessions] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const context = useContext(LoginContext);
  const errorHandler = () => {
    clearError(null);
  };
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/myProfile/Sessions/AllSessions",
          "POST",
          JSON.stringify({
            id: context.userId,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setMySessions([...resData.mysessions]);
        setSessionInfo([...resData.sessions]);
      } catch (err) {}
    };

    fetchFriends();
  }, [sendRequest]);
  return (
    <div className={styles.all_sessions__style}>
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        ></ModalError>
      )}
      <ConteinerBox fromStart={true}>
        <span className={styles.box_name__style}>Sessions Started by you</span>
        <AllSessionsBoxes
          destination={"MySessions"}
          className={"red"}
          sessionInfo={mySessions}
        ></AllSessionsBoxes>
      </ConteinerBox>

      <ConteinerBox fromStart={true}>
        <span className={styles.box_name__style}>Invites</span>
        <AllSessionsBoxes
          destination={"AllSessions"}
          className={"green"}
          sessionInfo={sessionInfo}
        ></AllSessionsBoxes>
      </ConteinerBox>
      {isLoading && <LoadingSpinner as0verlay></LoadingSpinner>}
    </div>
  );
}
