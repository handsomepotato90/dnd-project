import { useState, useEffect } from "react";
import ConteinerBox from "../../UI/ConteinerBox";
import SendFriendRequest from "./SendFriendRequest/SendFriendRequest";
import FriendRequest from "./FriendRequest/FriendRequest";
import FriendList from "./FriendList/FriendList";
import { useHttpClient } from "../../hooks/http-hook";

export default function Friends() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/myProfile/Friends"
        );
        setFriends(...resData);
      } catch (err) {}
    };

    fetchMonsters();
  }, [sendRequest]);

  return (
    <ConteinerBox>
      <SendFriendRequest></SendFriendRequest>
      <FriendRequest requests={friends.requests}></FriendRequest>
      <FriendList friends={friends.friends}></FriendList>
    </ConteinerBox>
  );
}
