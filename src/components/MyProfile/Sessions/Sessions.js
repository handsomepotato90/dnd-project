import React, { useState, useEffect, useCallback, useContext } from "react";
import { Calendar } from "@natscale/react-calendar";
import FriendList from "../Friends/FriendList/FriendList";
import ConteinerBox from "../../UI/ConteinerBox";
import Select from "react-select";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";

import "@natscale/react-calendar/dist/main.css";
import checkboxStyle from "../../Login/Login.module.css";
// import "react-calendar/dist/Calendar.css";
const hours = [
  { value: 8, label: "8 Hours" },
  { value: 12, label: "12 Hours" },
  { value: 24, label: "1 Day" },
  { value: 48, label: "2 Days" },
  { value: 72, label: "3 Days" },
  { value: 96, label: "4 Days" },
  { value: 120, label: "5 Days" },
  { value: 144, label: "6 Days" },
  { value: 168, label: "1 Week" },
];

export default function Sessions() {
  const { sendRequest } = useHttpClient();
  const context = useContext(LoginContext);
  const [value, setValue] = useState([]);
  const [dm, setDm] = useState(false);
  const [host, setHost] = useState(false);
  const [hoursChosen, setHoursForVoting] = useState();
  const [friends, setFriends] = useState([]);
  const [friendsForThisSession, setFriendsForThisSession] = useState([]);
  const [titleForSession, setTitleForSession] = useState("");

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
    }
  };

  const isDisabled = useCallback((date) => {
    if (date < new Date()) {
      return true;
    }
  }, []);

  const sendDates = async () => {
    try {
      const resData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          "/myProfile/Sessions/upload_session",
        "POST",
        JSON.stringify({
          title: titleForSession,
          isDm: dm,
          isHost: host,
          hoursForVoting: hoursChosen,
          dates: value,
          userId: context.userId,
          invitedFriends: friendsForThisSession,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      setFriends([...resData]);
    } catch (err) {}
  };
  return (
    <ConteinerBox>
      <div>
        <input
          onChange={titleSet}
          value={titleForSession}
          placeholder="Here goes the Session title"
        ></input>
        <Calendar
          isDisabled={isDisabled}
          useDarkMode={true}
          size={500}
          fontSize={18}
          value={value}
          isMultiSelector={true}
          onChange={setValue}
        />
        <div>
          <span>I'm organizing this session as:</span>
          <label className={checkboxStyle.rememberMe__style}>
            <input type="checkbox" checked={dm} onChange={dmChecked}></input>
            DM
          </label>
          <label className={checkboxStyle.rememberMe__style}>
            <input
              type="checkbox"
              checked={host}
              onChange={hostChecked}
            ></input>
            Host
          </label>
          <Select
            //  className={styles.search_bar__stayle}
            options={hours}
            name="hours"
            onChange={HoursForVoting}
            onSelection={addUser}
          ></Select>
        </div>

        <button onClick={sendDates}>Upload Session</button>
      </div>
      <div>
        <FriendList
          title={"My Friends"}
          remove={false}
          onSelection={addUser}
          friends={friends}
          add={true}
        ></FriendList>
        <FriendList
          title={"Selected to participate in the next session"}
          friends={friendsForThisSession}
          remove={true}
          onSelection={removeUser}
        ></FriendList>
      </div>
    </ConteinerBox>
  );
}
