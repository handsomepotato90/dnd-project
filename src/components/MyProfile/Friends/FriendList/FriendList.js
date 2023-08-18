import { useState, useEffect } from "react";
import NewsBox from "../../../UI/NewsBox";
import UserHolderBox from "../UserHolderBox";

export default function FriendList(props) {
  const [foundUsers, setfoundUsers] = useState([]);
  useEffect(() => {
    if (props.friends) {
      setfoundUsers(props.friends);
    }
  }, [props.friends]);

  const returnUser = (user, id) => {
    // console.log(foundUsers);
    console.log(foundUsers);
    console.log(id);

    if (props.remove) {
      props.onSelection(user, id);
      // let users=[];
      // for (let index = 0; index < foundUsers.length; index++) {
      // if(foundUsers[index]._id !== id){
      //   users.push(foundUsers[index])
      // }
      // setfoundUsers([...users])
      // }
      // const indexOfRemovedUser = props.friends.findIndex(
      //   (element) => element._id === id
      // );
      // console.log(indexOfRemovedUser);
      // if (indexOfRemovedUser > -1) {
      //   setfoundUsers([...props.friends.splice(indexOfRemovedUser, 1)]);
      // }
    }
    if (props.add) {
      props.onSelection(user, id);
    }
  };

  return (
    <div>
      <span>{props.title}</span>
      <NewsBox>
        {foundUsers.map((user, i) => (
          <UserHolderBox
            key={i}
            name={user.name}
            id={user._id}
            onReturnUserInformation={returnUser}
            remove={props.remove}
            add={props.add}
          >
            {props.children}
          </UserHolderBox>
        ))}
      </NewsBox>
    </div>
  );
}
