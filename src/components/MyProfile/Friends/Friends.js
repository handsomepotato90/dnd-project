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
  const [openInvites, setopenInvites] = useState(false);
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
  console.log(friends);
  return (
    <ConteinerBox fromEnd={true}>
      <SendFriendRequest
        ids={context.userId}
        title={"Search users :"}
      ></SendFriendRequest>

      <FriendList friends={friends[1]} title={"My Friends"}></FriendList>
      {openInvites && (
        <div>
          <FriendRequest
            ids={context.userId}
            requests={friends[0]}
            title={"Friend Invites"}
          >
            <button className="button" onClick={() => setopenInvites(false)}>
              Close Requests
            </button>
          </FriendRequest>
        </div>
      )}
      {!openInvites && (
        <div className="button" onClick={() => setopenInvites(true)}>
          {" "}
          Invites
          <span>({friends.length !== 0 ? friends[0].length : 0})</span>
        </div>
      )}
    </ConteinerBox>
  );
}
