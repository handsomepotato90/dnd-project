import { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import ConteinerBox from "../../UI/ConteinerBox";
import SessionComponent from "./sessionUi/SessionComponent";
import ModalError from "../../UI/ModalError";
import LoadingSpinner from "../../UI/LoadingSpinner";
import ModalConfirmation from "../../UI/ModalConfirmation";

interface Comment {
  user: string;
  comment: string;
  username: string;
}

interface Vote {
  dates: string[];
  user: string;
  username: string;
  _id: string;
}

export interface Data {
  comments: Comment[];
  creatorName: string;
  dates: string[];
  dmStatus: boolean;
  hostStatus: boolean;
  scheduledFor: string[];
  status: "OPEN" | "CLOSED" | "SCHEDULED";
  timeforvoting: number;
  title: string;
  votes: Vote[];
}

export default function SessionVotingForFreeDays() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(LoginContext);
  const [resData, setResData] = useState<Data | null>(null);
  const [selectedByUser, setSelectedByUser] = useState<Date[]>([]);
  const [intentionSubmitVote, setIntentionSubmitVote] = useState(false);
  const [votesByUser, setVotesByUser] = useState<Date[]|Date>([]);
  const [selectedDatesFromDungonMaster, setSelectedDatesFromDungonMaster] = useState<string[]>([]);

  const now = new Date().getTime();
  const errorHandler = () => {
    clearError();
  };
  const url = window.location.href.split("AllSessions/");
  
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const resData: Data = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            `/myProfile/Sessions/AllSessions/${url[1]}`,
          "GET",
          null,
          {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          }
        );
        setResData(resData);
        setSelectedDatesFromDungonMaster([...resData.dates]);
        if (resData.status === "SCHEDULED") {
          setSelectedDatesFromDungonMaster([...resData.scheduledFor]);
        }
        for (const el of resData.votes) {
          if (el.user === auth.userId) {
            const date = el.dates.map(dateStr => new Date(dateStr));
            setSelectedByUser([...date]);
          }
        }
      } catch (err) {}
    };
    if (!resData) {
      fetchFriends();
    }
  }, [sendRequest, auth.token, url, resData,auth.userId]);

  const submitVote = async () => {
    if (resData && resData.timeforvoting < now) {
      return;
    }
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/myProfile/Sessions/AllSessions/${url[1]}`,
        "PATCH",
        JSON.stringify({
          dates: votesByUser,
          username: auth.username,
          id: auth.userId,
          calendarId: url[1],
        }),
        {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
    window.location.reload();
  };
  
  const checkUserIntention = (value: Date[]|Date) => {
    setVotesByUser(value);
    setIntentionSubmitVote(true);
  };

  return (
    <ConteinerBox>
      {isLoading && <LoadingSpinner asOverlay />}
      {error && (
        <ModalError
          header="An Error Occurred"
          error={error}
          onClick={errorHandler}
        ></ModalError>
      )}
      {intentionSubmitVote && (
        <ModalConfirmation
          title="Are you sure about the date you put in? There is no turning back."
          onClick={submitVote}
        ></ModalConfirmation>
      )}
      {resData && (
        <SessionComponent
          resData={resData}
          selectedDatesFromDungonMaster={selectedDatesFromDungonMaster}
          userAlreadySelectedDates={selectedByUser}
          url={url[1]}
          calendarButtonText={"Submit"}
          onClickSubmit={checkUserIntention}
          canCloseSession={false}
        ></SessionComponent>
      )}
    </ConteinerBox>
  );
}
