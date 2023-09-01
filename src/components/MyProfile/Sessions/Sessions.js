import React, { useState, useEffect, useCallback, useContext } from "react";
import { Calendar } from "@natscale/react-calendar";
import FriendList from "../Friends/FriendList/FriendList";
import ConteinerBox from "../../UI/ConteinerBox";
import Select from "react-select";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import ModalError from "../../UI/ModalError";
import LoadingSpinner from "../../UI/LoadingSpinner";
import ModalConfirmation from "../../UI/ModalConfirmation";
import { useNavigate } from "react-router-dom";

import styles from "./Sessions.module.css";
import "@natscale/react-calendar/dist/main.css";

const hours = [
  { value: 24, label: "1 Day" },
  { value: 48, label: "2 Days" },
  { value: 72, label: "3 Days" },
  { value: 96, label: "4 Days" },
  { value: 120, label: "5 Days" },
  { value: 144, label: "6 Days" },
  { value: 168, label: "1 Week" },
  { value: 336, label: "2 Week" },
  { value: 504, label: "3 Week" },
  { value: 672, label: "1 Month" },
];

export default function Sessions() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const context = useContext(LoginContext);
  const [value, setValue] = useState([]);
  const [dm, setDm] = useState(false);
  const [host, setHost] = useState(false);
  const [hoursChosen, setHoursForVoting] = useState();
  const [friends, setFriends] = useState([]);
  const [friendsForThisSession, setFriendsForThisSession] = useState([]);
  const [friendsToSave, setFriendsToSave] = useState([]);
  const [titleForSession, setTitleForSession] = useState("");
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const navigate = useNavigate();
  const errorHandler = () => {
    clearError(null);
  };
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/myProfile/Sessions",
          "POST",
          JSON.stringify({
            userId: context.userId,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setFriends([...resData]);
      } catch (err) {}
    };

    fetchFriends();
  }, [sendRequest]);
  const titleSet = (event) => {
    setTitleForSession(event.target.value);
  };
  const dmChecked = () => {
    setDm((prevCheck) => !prevCheck);
  };
  const hostChecked = () => {
    setHost((prevCheck) => !prevCheck);
  };
  const HoursForVoting = (value) => {
    setHoursForVoting(value.value);
  };
  const removeUser = (user, id) => {
    let users = [];
    for (let index = 0; index < friendsForThisSession.length; index++) {
      if (friendsForThisSession[index]._id !== id) {
        users.push(friendsForThisSession[index]);
      }
      setFriendsForThisSession([...users]);
    }
  };
  const addUser = (user, id) => {
    if (!friendsForThisSession.find((item) => item._id === id)) {
      setFriendsForThisSession([
        ...friendsForThisSession,
        { name: user, _id: id },
      ]);
      setFriendsToSave([...friendsToSave, id]);
    }
  };

  const isDisabled = useCallback((date) => {
    if (date < new Date()) {
      return true;
    }
  }, []);

  const sendDates = async (answer) => {
    if (answer === true) {
      try {
        setReadyToSubmit(false);
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            "/myProfile/Sessions/upload_session",
          "POST",
          JSON.stringify({
            title: titleForSession,
            isDm: dm,
            isHost: host,
            status: "OPEN",
            hoursForVoting: hoursChosen,
            dates: value,
            userId: context.userId,
            invitedFriends: friendsToSave,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        navigate("/myProfile/Sessions/AllSessions");
      } catch (err) {}
    }
    setReadyToSubmit(false);
  };
  const checkUserIntention = () => {
    setReadyToSubmit(true);
  };
  return (
    <ConteinerBox>
      {isLoading && <LoadingSpinner as0verlay></LoadingSpinner>}
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        ></ModalError>
      )}
      {readyToSubmit && (
        <ModalConfirmation
          title="Are you shure you whant to put this Session up for vote?"
          onClick={sendDates}
        ></ModalConfirmation>
      )}
      <div className={styles.calendar_and_other___style}>
        <input
          onChange={titleSet}
          value={titleForSession}
          placeholder="Here goes the Session title"
        ></input>
        <div className={styles.check_box__style}>
          <span>My Role:</span>
          <label>
            <input type="checkbox" checked={dm} onChange={dmChecked}></input>
            DM
          </label>
          <label>
            <input
              type="checkbox"
              checked={host}
              onChange={hostChecked}
            ></input>
            Host
          </label>
        </div>
        <Select
          //  className={styles.search_bar__stayle}
          options={hours}
          name="hours"
          onChange={HoursForVoting}
          onSelection={addUser}
        ></Select>
        <Calendar
          isDisabled={isDisabled}
          useDarkMode={true}
          size={500}
          fontSize={18}
          value={value}
          isMultiSelector={true}
          onChange={setValue}
        />

        <button
          className={`button ${styles.upload_button__style}`}
          onClick={checkUserIntention}
        >
          Upload Session
        </button>
      </div>
      <div>
        <FriendList
          className={"black__background overflow flex_nowrap"}
          title={"My Friends"}
          remove={false}
          onSelection={addUser}
          friends={friends}
          add={true}
        ></FriendList>
        <FriendList
          className={"black__background overflow flex_nowrap"}
          title={"Selected to participate in the next session"}
          friends={friendsForThisSession}
          remove={true}
          onSelection={removeUser}
        ></FriendList>
      </div>
    </ConteinerBox>
  );
}
