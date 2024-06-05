import React, { useState, useContext, useEffect, useMemo } from "react";
import { w3cwebsocket as W3CWebSocket} from "websocket";
import { IMessageEvent } from "websocket";
import Comments from "./Comments";
import { LoginContext } from "../../../store/login-context";
import { useHttpClient } from "../../../hooks/http-hook";

import styles from "./sessionUi.module.css";

export interface Comment {
  username: string;
  comment: string;
}

interface Props {
  dbComments: Comment[];
}

const WsComments: React.FC<Props> = (props) => {
  const [ckEditorText, setckEditorText] = useState<string>("");
  const [propsState, setPropsState] = useState<Comment[]>(props.dbComments);
  const [wsMessage, setWsMessage] = useState<Comment[]>(propsState);
  const { sendRequest } = useHttpClient();
  const auth = useContext(LoginContext);

  useEffect(() => {
    setPropsState(props.dbComments);
  }, [props]);

  const ws_url = window.location.href.split("/");
  const ws_backend_url = process.env.REACT_APP_BACKEND_URL!.replace("http", "ws");
  const client = useMemo(() => new W3CWebSocket(`${ws_backend_url}/${ws_url[6]}`), [ws_backend_url, ws_url]);

  useEffect(() => {
    client.onmessage = (e: IMessageEvent) => {
      if (typeof e.data === "string") {
        const data = JSON.parse(e.data);
        setWsMessage((prevWsMessages) => [...prevWsMessages, data]);
      }
    };
  }, [client]);

  const submitComment = async () => {
    if (ckEditorText.trim() === "") {
      return;
    }
    client.send(JSON.stringify({ comment: ckEditorText, username: auth.username }));
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +
          `/myProfile/Sessions/AllSessions/comment`,
        "POST",
        JSON.stringify({
          title: ckEditorText,
          username: auth.username,
          id: auth.userId,
          calendarId: ws_url[6],
        }),
        {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "application/json",
        }
      );
      setckEditorText("");
    } catch (err) {
      console.error(err);
    }
  };

  const textZoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setckEditorText(event.target.value);
  };

  return (
    <div className={`${styles.comment__big_box_holder} `}>
      <Comments
        className={"black__background overflow flex_nowrap"}
        thisUser={auth.username || ''} // Providing a default value in case auth.username is null
        comments={propsState}
        wscomments={wsMessage}
      ></Comments>

      <div className={`${styles.comment__input__style} `}>
        <input
          onChange={textZoneChange}
          placeholder="Aa"
          value={ckEditorText}
        ></input>
        <button className="button" onClick={submitComment}>
          {" "}
          Comment
        </button>
      </div>
    </div>
  );
};

export default WsComments;
