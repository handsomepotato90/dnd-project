import { useState ,useEffect } from "react";
import NewsBox from "../../../UI/NewsBox";
import UserHolderBox from "../UserHolderBox";

export default function FriendList(props) {
  const [foundUsers, setfoundUsers] = useState([]);
  useEffect(() => {
    if (props.friends) {
      setfoundUsers(props.friends);
    }
  }, [props.friends]);
  return (
    <div>
      <span>My Friends</span>
      <NewsBox>
        {foundUsers.map((user, i) => (
          <UserHolderBox key={i} name={user.name}></UserHolderBox>
        ))}
      </NewsBox>
    </div>
  );
}
