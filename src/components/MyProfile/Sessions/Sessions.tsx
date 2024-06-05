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
import CalendarReSize from "./sessionUi/CalendarReSize";

import styles from "./Sessions.module.css";
import "@natscale/react-calendar/dist/main.css";

interface Friend {
  _id: string;
  name: string;
}

interface Option {
  value: number;
  label: string;
}

const hours: Option[] = [
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

const Sessions: React.FC = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const context = useContext(LoginContext);
  const [value, setValue] = useState<Date[]>([]);
  const [dm, setDm] = useState<boolean>(false);
  const [host, setHost] = useState<boolean>(false);
  const [hoursChosen, setHoursForVoting] = useState<number | undefined>();
  const [friends, setFriends] = useState<Friend[]>([]);
  const [friendsForThisSession, setFriendsForThisSession] = useState<Friend[]>([]);
  const [friendsToSave, setFriendsToSave] = useState<string[]>([]);
  const [titleForSession, setTitleForSession] = useState<string>("");
  const [readyToSubmit, setReadyToSubmit] = useState<boolean>(false);
  const size = CalendarReSize();
  const navigate = useNavigate();

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
  }, [sendRequest, context.userId]);

  const titleSet = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleForSession(event.target.value);
  };

  const dmChecked = () => {
    setDm((prevCheck) => !prevCheck);
  };

  const hostChecked = () => {
    setHost((prevCheck) => !prevCheck);
  };

  const HoursForVoting = (value: Option) => {
    setHoursForVoting(value.value);
  };

  const removeUser = (user: Friend, id: string) => {
    setFriendsForThisSession(prevUsers =>
      prevUsers.filter(user => user._id !== id)
    );
  };

  const addUser = (user: string, id: string) => {
    if (!friendsForThisSession.find(item => item._id === id)) {
      setFriendsForThisSession(prevUsers => [...prevUsers, { name: user, _id: id }]);
      setFriendsToSave(prevIds => [...prevIds, id]);
    }
  };

  const isDisabled = useCallback((date: Date) => {
    return date < new Date();
  }, []);

  const sendDates = async (answer: boolean) => {
    if (answer) {
      try {
        setReadyToSubmit(false);
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/myProfile/Sessions/upload_session",
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
      {isLoading && <LoadingSpinner asOverlay />}
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={clearError}
        />
      )}
      {readyToSubmit && (
        <ModalConfirmation
          title="Are you sure you want to put this Session up for vote?"
          onClick={sendDates}
        />
      )}
      <div className={styles.calendar_and_other___style}>
        <input
          onChange={titleSet}
          value={titleForSession}
          placeholder="Here goes the Session title"
        />
        <div className={styles.check_box__style}>
          <span>Role:</span>
          <label>
            <input type="checkbox" checked={dm} onChange={dmChecked} />
            DM
          </label>
          <label>
            <input type="checkbox" checked={host} onChange={hostChecked} />
            Host
          </label>
        </div>
        <Select
          options={hours}
          name="hours"
          onChange={HoursForVoting}
        />
        <Calendar
          isDisabled={isDisabled}
          useDarkMode={true}
          size={size}
          fontSize={18}
          value={value}
          isMultiSelector={true}
          onChange={setValue}
        />
      </div>
      <div>
        <FriendList
          className={"black__background overflow flex_nowrap"}
          title={"My Friends"}
          remove={false}
          onSelection={addUser}
          friends={friends}
          add={true}
        />
        <FriendList
          className={"black__background overflow flex_nowrap"}
          title={"Selected to participate in the next session"}
          friends={friendsForThisSession}
          remove={true}
          onSelection={removeUser}
        />
        <button
          className={`button ${styles.upload_button__style}`}
          onClick={checkUserIntention}
        >
          Upload Session
        </button>
      </div>
    </ConteinerBox>
  );
}

export default Sessions;
