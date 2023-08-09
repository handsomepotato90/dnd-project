import { useState } from "react";
import NewsBox from "../../../UI/NewsBox";
import UserHolderBox from "../UserHolderBox";

export default function FriendList(props) {
  const [foundUsers, setfoundUsers] = useState([
    {
      name: "Ivan",
    },
    {
      name: "ge0rg1",
    },
  ]);
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
