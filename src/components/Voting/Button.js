import React, { useContext } from "react";
import { LoginContext } from "../store/login-context";
import { useHttpClient } from "../hooks/http-hook";
import "./MainMonsterBox.css";

export default function Button(props) {
  const login = useContext(LoginContext);
  // console.log(props.votes);

  const { sendRequest } = useHttpClient();
  const color = props.votes.indexOf(login.userId) > -1 ? "grey" : props.className;

  const cName = "button_style " + color;

  const Vote = async () => {
    if (props.votes.indexOf(login.userId) > -1) {
    } else {
      props.onClick(props.text, login.userId);

      try {
        await sendRequest(
          "http://localhost:5000/voting",
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
      <div>{props.number}</div>
      <button onClick={Vote} className={cName}>
        {props.text}
      </button>
    </React.Fragment>
  );
}
