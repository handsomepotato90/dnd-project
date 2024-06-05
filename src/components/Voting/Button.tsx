import React, { useContext } from "react";
import { LoginContext } from "../store/login-context";
import { useHttpClient } from "../hooks/http-hook";

import "./MainMonsterBox.css";
import styles from "./Voting.module.css";

interface ButtonTypes{
    onClick: Function,
    styleFloat: 'left' | 'right' | 'none',
    styleRadius: string, 
    name: string,
    votes: Array<string>, 
    number: number, 
    id: string,
    text: string,
    className: string
}

const Button: React.FC<ButtonTypes> = ({onClick, styleFloat, styleRadius, votes, number, id, text, className}) =>  {
  const login = useContext(LoginContext);
  const { sendRequest } = useHttpClient();

  const cName = votes.indexOf(login.userId) > -1 ? "grey" : className;

  const Vote = async () => {
    if (votes.indexOf(login.userId) > -1) {
    } else {
      onClick(text, login.userId);

      try {
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/voting",
          "POST",
          JSON.stringify({
            id: id,
            uid: login.userId,
            vote: text,
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
          float: `${styleFloat}`,
          borderRadius: `${styleRadius}`,
        }}
        className={`${styles.btn_add__style} ${cName}`}
      >
        <div>
          {" "}
          {text}: {number}
        </div>
      </button>
    </React.Fragment>
  );
}

export default Button;