import React, { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import ConteinerBox from "../../UI/ConteinerBox";
import SessionComponent from "./sessionUi/SessionComponent";
import ModalError from "../../UI/ModalError";
import LoadingSpinner from "../../UI/LoadingSpinner";
import ModalConfirmation from "../../UI/ModalConfirmation";
import { useNavigate } from "react-router-dom";
import { Data } from "./SessionVotingForFreeDays";

const MySessions: React.FC = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(LoginContext);
  const [resData, setResData] = useState<Data>();
  const [votesArray, setVotes] = useState<string[]>([]);
  const [intentionSubmitVote, setIntentionSubmitVote] = useState(false);
  const [dateerror, setdateerror] = useState(false);
  const [userInfoToSubmit, setUserInfoToSubmit] = useState<string[]>([]);
  const [hourforSession, setHoursforSession] = useState<number>();
  const navigate = useNavigate();

  const url = window.location.href.split("MySessions/");

  const errorHandler = () => {
    clearError();
  };
  const dateHandler = () => {
    setdateerror(false);
  };
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            `/myProfile/Sessions/MySessions/${url[1]}`,
          "GET",
          null,
          {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          }
        );
        setResData(resData);
        const pushToThisArray = [];
        for (let index = 0; index < resData.votes.length; index++) {
          pushToThisArray.push(...resData.votes[index].dates);
        }
        setVotes([...pushToThisArray]);
      } catch (err) {}
    };
    if(!resData) {
      fetchFriends();
    }
  }, [auth.token, sendRequest, resData, url]);

  const mode = (numbers: string[]) => {
    const counted: {[key: string]: number} = numbers.reduce((acc, curr) => {
      if (curr in acc) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, Object.create(null));
    const mode = Math.max(...Object.values(counted));
    return Object.keys(counted).filter((x) => counted[x] === mode);
  };
  
  const submitVote = async (answer: boolean) => {
    if (answer === true) {
      if (userInfoToSubmit.length > 1 || userInfoToSubmit.length === 0) {
        setdateerror(true);
        return;
      }
      try {
        setIntentionSubmitVote(false);

        await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            `/myProfile/Sessions/MySessions/${url[1]}`,
          "PATCH",
          JSON.stringify({
            dates: userInfoToSubmit,
            status: "SCHEDULED",
            username: auth.username,
            hours: hourforSession,
            id: auth.userId,
            calendarId: url[1],
          }),
          {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          }
        );
        navigate(`/myProfile/Sessions/AllSessions`);
      } catch (err) {}
    }
    setIntentionSubmitVote(false);
  };
  const chechUserIntention = (selectedDates: Date | Date[], hours?: number) => {
    setIntentionSubmitVote(true);
    setUserInfoToSubmit(Array.isArray(selectedDates) ? selectedDates.map(date => date.toString()) : [selectedDates.toString()]);
    setHoursforSession(hours);
  };
  
  return (
    <ConteinerBox>
      {isLoading &&<LoadingSpinner asOverlay />}
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        ></ModalError>
      )}
      {intentionSubmitVote && (
        <ModalConfirmation
          title="Are you shure about the date you put in ? There is no turning back."
          onClick={submitVote}
        ></ModalConfirmation>
      )}
      {dateerror && (
        <ModalError
          header="Please select only ONE date!"
          error=""
          onClick={dateHandler}
        ></ModalError>
      )}
     {resData && (
        <SessionComponent
          resData={resData}
          selectedDatesFromDungonMaster={mode(votesArray)}
          calendarButtonText={"Schedule Session"}
          canCloseSession={true}
          onClickSubmit={chechUserIntention}
          url={url[1]}
        />
      )}
    </ConteinerBox>
  );
}
export default MySessions;