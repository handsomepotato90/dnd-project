import React from "react";
import { Link } from "react-router-dom";
import ConteinerBox from "../../../UI/ConteinerBox";
import Countdown from "react-countdown";
import {Session} from "../AllSessionInvites"

import styles from "./sessionUi.module.css";

interface Props {
  sessionInfo: Session[];
  destination: string;
}

const AllSessionsBoxes: React.FC<Props> = ({ sessionInfo, destination }) => {
  const now = new Date().getTime();

  const userSubmitedSessionOrNot = (status: string) => {
    switch (status) {
      case "CLOSED":
        return styles.user_session__style;
      case "OPEN":
        return styles.invited_session__style;
      case "SCHEDULED":
        return styles.scheduled_session__style;
      default:
        return "";
    }
  };

  return (
    <>
      {sessionInfo.map((el, i) => (
        <ConteinerBox key={i}>
          <Link to={`/myProfile/Sessions/${destination}/${el._id}`}>
            <div
              className={`${styles.session_all__style} ${userSubmitedSessionOrNot(
                el.status
              )}`}
            >
              <span className={`${styles.text__inside__style}`}>
                {" "}
                <span
                  className={
                    el.status === "OPEN"
                      ? "green_text"
                      : el.status === "CLOSED"
                      ? "grey_text"
                      : "red_text"
                  }
                >
                  {el.status}
                  {el.scheduledFor.length > 0 && (
                    <span>
                      {" FOR: "}
                      {new Date(el.scheduledFor[0]).getDate()}/
                      {new Date(el.scheduledFor[0]).getMonth() + 1}
                    </span>
                  )}
                </span>
              </span>
              <span className={`${styles.text__inside__style} overflowing`}>
                {" "}
                {el.title}
              </span>
              <span className={`${styles.text__inside__style} overflowing`}>
                {el.creatorName}
              </span>
              <span className={`${styles.text__inside__style}`}>
                {el.timeforvoting <= now ||
                el.status === "SCHEDULED" ||
                el.status === "CLOSED" ? (
                  " Voting Finished"
                ) : (
                  <Countdown date={el.timeforvoting}></Countdown>
                )}
              </span>
            </div>
          </Link>
        </ConteinerBox>
      ))}
    </>
  );
};

export default AllSessionsBoxes;
