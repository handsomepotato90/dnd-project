import React, { useContext } from "react";
import { LoginContext } from "../store/login-context";
import { useHttpClient } from "../hooks/http-hook";

import "./MainMonsterBox.css";
import styles from "./Voting.module.css";

export default function Button(props) {
  const login = useContext(LoginContext);

  const { sendRequest } = useHttpClient();
  const color =
    props.votes.indexOf(login.userId) > -1 ? "grey" : props.className;

  const cName = color;

  const Vote = async () => {
    if (props.votes.indexOf(login.userId) > -1) {
    } else {
      props.onClick(props.text, login.userId);

      try {
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/voting",
          "POST",
          JSON.stringify({
            id: props.id,
            uid: login.userId,
            vote: props.text,
          }),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (err) {}
    }
  };

  return (
    <React.Fragment>
      <button
        onClick={Vote}
        style={{
          float: `${props.styleFloat}`,
          borderRadius: `${props.styleRadius}`,
        }}
        className={`${styles.btn_add__style} ${cName}`}
      >
        <div>
          {" "}
          {props.text}: {props.number}
        </div>
      </button>
    </React.Fragment>
  );
}
