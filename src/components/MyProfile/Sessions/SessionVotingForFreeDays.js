import React, { useState, useEffect, useCallback, useContext } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";

export default function SessionVotingForFreeDays() {
  const { sendRequest } = useHttpClient();
  const auth = useContext(LoginContext);

  const url = window.location.href.split("AllSessions/");
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            `/myProfile/Sessions/AllSessions/${url[1]}`,
          "GET",
          null,
          { Authorization: "Bearer " + auth.token }
        );
        console.log(resData);
      } catch (err) {}
    };
    fetchFriends();
  }, [sendRequest]);
  const selectedDatesFromDungonMaster = [
    1692306000000, 1692392400000, 1692997200000, 1692910800000, 1692824400000,
    1692219600000,
  ];

  const toTimeStamp = (time) => {
    let timestamp = [];
    for (let index = 0; index < time.length; index++) {
      timestamp.push(new Date(time[index]).getTime());
    }
    return timestamp;
  };

  const timeStamp = toTimeStamp(selectedDatesFromDungonMaster);

  //   console.log(timeStamp);
  const isDisabled = useCallback((date) => {
    if (timeStamp.includes(date.getTime())) {
      return false;
    } else {
      return true;
    }
  }, []);
  return;
}
