import React, { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import ConteinerBox from "../../UI/ConteinerBox";
import SessionComponent from "./sessionUi/SessionComponent";
import ModalError from "../../UI/ModalError";
import LoadingSpinner from "../../UI/LoadingSpinner";
import { useNavigate } from "react-router-dom";

export default function SessionVotingForFreeDays() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(LoginContext);
  const [resData, setResData] = useState([]);
  const [selectedByUser, setSelectedByUser] = useState([]);
  const [selectedDatesFromDungonMaster, setSelectedDatesFromDungonMaster] =
    useState([]);
  const navigate = useNavigate();
  const now = new Date().getTime();
  const errorHandler = () => {
    clearError(null);
  };
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
        setResData(resData);
        setSelectedDatesFromDungonMaster([...resData.dates]);
        if (resData.status === "scheduled") {
          setSelectedDatesFromDungonMaster([...resData.scheduledFor]);
        }
        for (let index = 0; index < resData.votes.length; index++) {
          const el = resData.votes[index];
          if (resData.votes[index].user === auth.userId) {
            let date = [];

  
            for (let index = 0; index < el.dates.length; index++) {
              const element = el.dates[index];
              date.push(new Date(element));
            }
            setSelectedByUser([...date]);
          }
        }
      } catch (err) {}
    };
    fetchFriends();
  }, []);
  const submitVote = async (value) => {
    if (resData.timeforvoting < now) {

      return;
    }
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/myProfile/Sessions/AllSessions/${url[1]}`,
        "PATCH",
        JSON.stringify({
          dates: value,
          username: auth.username,
          id: auth.userId,
          calendarId: url[1],
        }),
        {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "application/json",
        }
      );
      navigate(`/myProfile/Sessions/AllSessions/${url[1]}`);
    } catch (err) {}
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
      <SessionComponent
        resData={resData}
        selectedDatesFromDungonMaster={selectedDatesFromDungonMaster}
        userAlreadySelectedDates={selectedByUser}
        url={url[1]}
        calendarButtonText={"Submit"}
        onClickSubmit={submitVote}
      ></SessionComponent>
    </ConteinerBox>
  );
}
