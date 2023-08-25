import React, { useState, useContext, useEffect } from "react";
import { useHttpClient } from "../../../hooks/http-hook";
import { LoginContext } from "../../../store/login-context";
import Comments from "./Comments";
import { Calendar } from "@natscale/react-calendar";
import Countdown from "react-countdown";
import ModalError from "../../../UI/ModalError";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import ModalConfirmation from "../../../UI/ModalConfirmation";

import styles from "./sessionUi.module.css";
import "@natscale/react-calendar/dist/main.css";

export default function SessionComponent(props) {
  const [value, setValue] = useState([]);
  const [ckEditorText, setckEditorText] = useState("");
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [intentionForClosing, setIntentionForClosing] = useState(false);
  const [intentionForDelete, setIntentionForDelete] = useState(false);
  const auth = useContext(LoginContext);
  const navigate = useNavigate();

  const url = window.location.href.split("/Sessions");

  const errorHandler = () => {
    clearError(null);
  };
  const textZoneChange = (event) => {
    setckEditorText(event.target.value);
  };

  useEffect(() => {
    if (
      props.userAlreadySelectedDates &&
      props.userAlreadySelectedDates.length > 0
    ) {
      setValue(props.userAlreadySelectedDates);
    }
  }, [props.userAlreadySelectedDates]);
  const toTimeStamp = (time) => {
    let timestamp = [];
    for (let index = 0; index < time.length; index++) {
      timestamp.push(new Date(time[index]).getTime());
    }
    return timestamp;
  };

  const timeStamp = toTimeStamp(
    props.resData.status === "SCHEDULED"
      ? props.resData.scheduledFor
      : props.selectedDatesFromDungonMaster
  );

  const isDisabled = (date) => {
    if (timeStamp.includes(date.getTime())) {
      return false;
    } else {
      return true;
    }
  };
  const submitVote = () => {
    props.onClickSubmit(value);
  };
  const submitComment = async () => {
    if (ckEditorText.trim() === "") {
      return;
    }
    if (props.resData.comments === undefined) {
      props.resData["comments"] = [
        {
          comment: ckEditorText,
          username: auth.username,
        },
      ];
    } else {
      props.resData.comments.push({
        comment: ckEditorText,
        username: auth.username,
      });
    }

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/myProfile/Sessions/AllSessions/comment`,
        "POST",
        JSON.stringify({
          title: ckEditorText,
          username: auth.username,
          id: auth.userId,
          calendarId: props.url,
        }),
        {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "application/json",
        }
      );
      setckEditorText("");
      navigate(`/myProfile/Sessions${url[1]}`);
    } catch (err) {}
  };
  const closeSession = async (answer) => {
    if (answer === false) {
      setIntentionForClosing(false);
      return;
    }
    try {
      setIntentionForClosing(false);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/myProfile/Sessions/MySessions/${props.url}`,
        "POST",
        JSON.stringify({
          calendarId: props.url,
          status: "CLOSED",
        }),
        {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "application/json",
        }
      );
      navigate(`/myProfile/Sessions/AllSessions`);
    } catch (err) {}
  };
  const deleteSession = async (answer) => {
    if (answer === false) {
      setIntentionForDelete(false);
      return;
    }
    try {
      setIntentionForDelete(false);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/myProfile/Sessions/MySessions/${props.url}`,
        "DELETE",
        JSON.stringify({
          calendarId: props.url,
        }),
        {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
    navigate(`/myProfile/Sessions/AllSessions`);
  };
  const checkIntentionForClosing = () => {
    setIntentionForClosing(true);
  };

  const checkIntentionForDelete = () => {
    setIntentionForDelete(true);
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
      {intentionForClosing && (
        <ModalConfirmation
          title="Are you shure that you want to CLOSE this session."
          onClick={closeSession}
        ></ModalConfirmation>
      )}
      {intentionForDelete && (
        <ModalConfirmation
          title="Are you shure that you want to DELETE this session."
          onClick={deleteSession}
        ></ModalConfirmation>
      )}
      <div>
        <div className={styles.info_about_session__style}>
          {props.resData.timeforvoting && (
            <span className={styles.countdown__style}>
              <Countdown date={props.resData.timeforvoting}></Countdown>
            </span>
          )}
          <span className={styles.organiser__span__style}>
            Invited by : {props.resData.dmStatus && "DM"}
            {props.resData.dmStatus && props.resData.hostStatus && " and a "}
            {props.resData.hostStatus && "HOST"}
            <span className={styles.organiser__span__style}>
              {props.resData.creatorName}
            </span>
          </span>
        </div>
        <div className={`${styles.info_about_session__style}`}>
          <Calendar
            isDisabled={isDisabled}
            useDarkMode={true}
            size={500}
            fontSize={18}
            value={
              props.resData.status === "SCHEDULED"
                ? [new Date(props.resData.scheduledFor)]
                : value
            }
            isMultiSelector={true}
            onChange={setValue}
          />
          <div className={`${styles.schedule_buttons__style}`}>
            {props.resData.status === "SCHEDULED" ||
            props.resData.status === "CLOSED" ? null : (
              <button className="button" onClick={submitVote}>
                {" "}
                {props.calendarButtonText}
              </button>
            )}

            {props.canCloseSession &&
              (props.resData.status === "CLOSED" ? (
                <button className="button" onClick={checkIntentionForDelete}>
                  {" "}
                  Delete Session
                </button>
              ) : (
                <button className="button" onClick={checkIntentionForClosing}>
                  {" "}
                  Close Session
                </button>
              ))}
          </div>
        </div>
      </div>

      <div>
        <Comments
          className={"black__background overflow flex_nowrap"}
          thisUser={auth.username}
          comments={props.resData.comments}
        ></Comments>

        <div className={`${styles.comment__input__style} `}>
          <input
            onChange={textZoneChange}
            placeholder="Aa"
            value={ckEditorText}
          ></input>
          <button className="button" onClick={submitComment}>
            {" "}
            Comment
          </button>
        </div>
      </div>
    </>
  );
}
