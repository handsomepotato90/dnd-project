import React, { useState, useContext, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Comments from "./Comments";
import { LoginContext } from "../../../store/login-context";
import { useHttpClient } from "../../../hooks/http-hook";

import styles from "./sessionUi.module.css";

export default function WsComments(props) {
  //   const [webSocketMessage, setWebSocketMessage] = useState([]);
  const [ckEditorText, setckEditorText] = useState("");
  const [propsState, setPropsState] = useState(props.dbComments);
  const [wsMessage, setWsMessage] = useState(propsState);
  const { sendRequest } = useHttpClient();
  const auth = useContext(LoginContext);
  useEffect(() => {
    setPropsState(props.dbComments);
  }, [props]);
  const ws_url = window.location.href.split("/");
  const ws_backend_url = process.env.REACT_APP_BACKEND_URL.replace(
    "http",
    "ws"
  );

  //   ############################################ Web Socket Connection #######################################
  const client = new W3CWebSocket(`${ws_backend_url}/${ws_url[6]}`);

  useEffect(() => {
    client.onopen = () => {};
    client.onmessage = (e) => {
      if (typeof e.data === "string") {
        const data = JSON.parse(e.data);
        setWsMessage([...wsMessage, data]);
      }
    };

    client.onerror = function () {};
  }, [client.onmessage, wsMessage]);

  //   #######################################################################################################

  const submitComment = async () => {
    // ############### Send WebSocket Message ###############
    if (ckEditorText.trim() === "") {
      return;
    }
    client.send(
      JSON.stringify({ comment: ckEditorText, username: auth.username })
    );
    // ######################################################
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
    } catch (err) {}
  };

  const textZoneChange = (event) => {
    setckEditorText(event.target.value);
  };
  return (
    <div className={`${styles.comment__big_box_holder} `}>
      <Comments
        className={"black__background overflow flex_nowrap"}
        thisUser={auth.username}
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
}
