import { useState, useContext, useEffect } from "react";
import ConteinerBox from "../../UI/ConteinerBox";
import SendFriendRequest from "./SendFriendRequest/SendFriendRequest";
import FriendRequest from "./FriendRequest/FriendRequest";
import FriendList from "./FriendList/FriendList";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";

export default function Friends() {
  const { sendRequest } = useHttpClient();
  const [friends, setFriends] = useState([]);
  const context = useContext(LoginContext);
  // console.log(friends);
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/myProfile/Friends",
          "POST",
          JSON.stringify({
            userId: context.userId,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setFriends([...resData]);
      } catch (err) {}
    };

    fetchMonsters();
  }, [sendRequest]);

  return (
    <ConteinerBox>
      <SendFriendRequest ids={context.userId}></SendFriendRequest>
      <FriendRequest ids={context.userId} requests={friends[0]}></FriendRequest>
      <FriendList friends={friends[1]}></FriendList>
    </ConteinerBox>
  );
}
