import { useState, useContext, useRef } from "react";
import NewsBox from "../../../UI/NewsBox";
import { useHttpClient } from "../../../hooks/http-hook";
import MatchingUsers from "./MatchingUsers";

export default function SendFriendRequest() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [foundUsers, setfoundUsers] = useState([]);
  const text = useRef();
  let timer;

  const nameSearch = (event) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(async function () {
      console.log(text.current.value);
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/myProfile/Friends/search_users",
          "POST",
          JSON.stringify({
            user: text.current.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setfoundUsers(...resData);
      } catch (err) {}
    }, 1000);
  };
  console.log(foundUsers);
  return (
    <div>
      <input
        placeholder="Search"
        type="text"
        ref={text}
        onKeyUp={nameSearch}
      ></input>

      <NewsBox>
        {foundUsers.map((user, i) => (
          <MatchingUsers key={i} name={user.name}></MatchingUsers>
        ))}
      </NewsBox>
    </div>
  );
}
