import React, { useState, useEffect, useCallback, useContext } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import { Link } from "react-router-dom";
import ConteinerBox from "../../UI/ConteinerBox";

export default function AllSessionInvites(props) {
  const [sessionInfo, setSessionInfo] = useState([]);
  const { sendRequest } = useHttpClient();
  const context = useContext(LoginContext);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/myProfile/Sessions/AllSessions",
          "POST",
          JSON.stringify({
            id: context.userId,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setSessionInfo([...resData]);
      } catch (err) {}
    };

    fetchFriends();
  }, [sendRequest]);

  return sessionInfo.map((el, i) => (
    <ConteinerBox>
      <Link key={i} to={`/myProfile/Sessions/AllSessions/${el._id}`}>
        <span>{el.title}</span>
        <span>{el.creatorName}</span>
      </Link>
    </ConteinerBox>
  ));
}
