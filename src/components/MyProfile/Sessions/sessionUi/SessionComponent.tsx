import { useState, useContext, useEffect } from "react";
import { useHttpClient } from "../../../hooks/http-hook";
import { LoginContext } from "../../../store/login-context";
import WsComments from "./WsComments";
import { Calendar } from "@natscale/react-calendar";
import Countdown from "react-countdown";
import ModalError from "../../../UI/ModalError";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import ModalConfirmation from "../../../UI/ModalConfirmation";
import { useNavigate } from "react-router-dom";
import Select,{SingleValue} from "react-select";
import CalendarReSize from "./CalendarReSize";
import {Data} from "../SessionVotingForFreeDays"

import styles from "./sessionUi.module.css";
import "@natscale/react-calendar/dist/main.css";

const hours = [
  { value: 1, label: "1:00" },
  { value: 2, label: "2:00" },
  { value: 3, label: "3:00" },
  { value: 4, label: "4:00" },
  { value: 5, label: "5:00" },
  { value: 6, label: "6:00" },
  { value: 7, label: "7:00" },
  { value: 8, label: "8:00" },
  { value: 9, label: "9:00" },
  { value: 10, label: "10:00" },
  { value: 11, label: "11:00" },
  { value: 12, label: "12:00" },
  { value: 13, label: "13:00" },
  { value: 14, label: "14:00" },
  { value: 15, label: "15:00" },
  { value: 16, label: "16:00" },
  { value: 17, label: "17:00" },
  { value: 18, label: "18:00" },
  { value: 19, label: "19:00" },
  { value: 20, label: "20:00" },
  { value: 21, label: "21:00" },
  { value: 22, label: "22:00" },
  { value: 23, label: "23:00" },
  { value: 24, label: "24:00" },
];
interface Value{
  value: number;
  label:string;
}

interface SessionComponentProps {
  userAlreadySelectedDates?: Date[];
  resData: Data
  selectedDatesFromDungonMaster?: string[];
  url: string;
  onClickSubmit: (selectedDates: Date[]|Date, scheduledHours?: number) => void;
  calendarButtonText: string;
  canCloseSession: boolean;
}

const SessionComponent: React.FC<SessionComponentProps> = (props) => {
  const [value, setValue] = useState<Date[]|Date>([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [intentionForClosing, setIntentionForClosing] = useState(false);
  const [intentionForDelete, setIntentionForDelete] = useState(false);
  const [scheduledHours, setScheduledHour] = useState<number>();

  const size = CalendarReSize();
  const auth = useContext(LoginContext);
  const navigate = useNavigate();

  const errorHandler = () => {
    clearError();
  };

  useEffect(() => {
    if (
      props.userAlreadySelectedDates &&
      props.userAlreadySelectedDates.length > 0
    ) {
      setValue(props.userAlreadySelectedDates);
    }
  }, [props.userAlreadySelectedDates]);

  const toTimeStamp = (time: string | string[] | undefined) => {
    if (!time) return [];
    
    const timeArray = Array.isArray(time) ? time : [time];
  
    const timestamp = timeArray.map(dateString => new Date(dateString).getTime());
    return timestamp;
  };

  const timeStamp = toTimeStamp(
    props.resData.status === "SCHEDULED"
      ? props.resData.scheduledFor
      : props.selectedDatesFromDungonMaster
  );

  const isDisabled = (date: Date) => {
    if (timeStamp.includes(date.getTime())) {
      return false;
    } else {
      return true;
    }
  };
  const submitVote = () => {

    props.onClickSubmit(value, scheduledHours);
  };

  const closeSession = async (answer: boolean) => {
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
  const deleteSession = async (answer: boolean) => {
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
  const scheduledHour = (newValue: SingleValue<Value>) => {
    if(newValue !== null && newValue !== undefined) {
      setScheduledHour(newValue.value);
    }
  };
  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
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
            size={size}
            fontSize={18}
            value={
              props.resData.status === "SCHEDULED"
                ? (props.resData.scheduledFor || []).map(dateString => new Date(dateString))
                : value
            }
            isMultiSelector={true}
            onChange={setValue}
          />
          <div className={`${styles.schedule_buttons__style}`}>
            {props.resData.status === "SCHEDULED" ||
            props.resData.status === "CLOSED" ? null : (
              <button
                style={{ width: "38%" }}
                className="button"
                onClick={submitVote}
              >
                {" "}
                {props.calendarButtonText}
              </button>
            )}
            {props.canCloseSession &&
              props.resData.status !== "SCHEDULED" &&
              props.resData.status !== "CLOSED" && (
                <Select
                  //  className={styles.search_bar__stayle}
                  options={hours}
                  name="hours"
                  onChange={scheduledHour}
                  menuPlacement={"auto"}
                  // onSelection={addUser}
                ></Select>
              )}
            {props.canCloseSession &&
              (props.resData.status === "CLOSED" ? (
                <button
                  style={{ width: "38%" }}
                  className="button"
                  onClick={checkIntentionForDelete}
                >
                  {" "}
                  Delete Session
                </button>
              ) : (
                <button
                  style={{ width: "38%" }}
                  className="button"
                  onClick={checkIntentionForClosing}
                >
                  {" "}
                  Close Session
                </button>
              ))}
          </div>
        </div>
      </div>

      <WsComments dbComments={props.resData.comments || []}></WsComments>
    </>
  );
}
export default SessionComponent; 