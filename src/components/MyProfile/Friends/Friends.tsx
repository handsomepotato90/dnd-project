import { useState, useContext, useEffect } from "react";
import ConteinerBox from "../../UI/ConteinerBox";
import SendFriendRequest from "./SendFriendRequest/SendFriendRequest";
import FriendRequest from "./FriendRequest/FriendRequest";
import FriendList from "./FriendList/FriendList";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import styles from "./Friends.module.css";

interface Friend {
  _id: string;
  name: string;
}

const Friends: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [friends, setFriends] = useState<Friend[][]>([]);
  const [openInvites, setOpenInvites] = useState<boolean>(false);
  const context = useContext(LoginContext);

  useEffect(() => {
    const fetchFriends = async () => {
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

        setFriends(resData);
      } catch (err) {
        // Handle error
      }
    };

    fetchFriends();
  }, [sendRequest, context.userId]);

  return (
    <ConteinerBox fromEnd={true}>
      <SendFriendRequest
        overflow={"overflow"}
        ids={context.userId}
        title={"Users :"}
      ></SendFriendRequest>
      <div className={styles.size}>
        <FriendList
          overflow={"overflow"}
          friends={friends.length > 0 ? friends[1] : []}
          title={"My Friends"}
        ></FriendList>
      </div>
      {openInvites && (
        <div className={styles.size}>
          <FriendRequest
            ids={context.userId}
            requests={friends.length > 0 ? friends[0] : []}
            title={"Friend Invites"}
          >
            <button className="button" onClick={() => setOpenInvites(false)}>
              Close Requests
            </button>
          </FriendRequest>
        </div>
      )}
      {!openInvites && (
        <div className="button" onClick={() => setOpenInvites(true)}>
          {" "}
          Invites
          <span>({friends.length !== 0 ? friends[0].length : 0})</span>
        </div>
      )}
    </ConteinerBox>
  );
};

export default Friends;
