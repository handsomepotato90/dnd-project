import { useState, useEffect } from "react";
import NewsBox from "../../../UI/NewsBox";
import UserHolderBox from "../UserHolderBox";

import styles from "../Friends.module.css";
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
    }
    if (props.add) {
      props.onSelection(user, id);
    }
  };

  return (
    // <div>
    <>
      <span className={styles.span_title__style}>{props.title}</span>
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
    </>

    // </div>
  );
}
