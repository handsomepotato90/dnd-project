import React, { useState, useEffect } from "react";
import NewsBox from "../../../UI/NewsBox";
import UserHolderBox from "../UserHolderBox";

import styles from "../Friends.module.css";

interface User {
  _id: string;
  name: string;
}

interface Props {
  friends: User[];
  title: string;
  overflow?: string;
  remove?: boolean;
  add?: boolean;
  onSelection?: (name: string, id: string) => void; 
  children?: React.ReactNode;

}

const FriendList: React.FC<Props> = (props) => {
  const [foundUsers, setFoundUsers] = useState<User[]>([]);

  useEffect(() => {
    if (props.friends) {
      setFoundUsers(props.friends);
    }
  }, [props.friends]);

  const returnUser = (user: User, id: string) => {
    if (props.remove && props.onSelection) {
      props.onSelection(user.name, id);
    }
    if (props.add && props.onSelection) {
      props.onSelection(user.name, id);
    }
  };

  return (
    <>
      <span className={styles.span_title__style}>{props.title}</span>
      <NewsBox className={props.overflow}>
        {foundUsers.map((user, i) => (
          <UserHolderBox
            key={i}
            name={user.name}
            id={user._id}
            onReturnUserInformation={(name, id) => returnUser(user, id)}
            remove={props.remove}
            add={props.add}
          >
            {props.children}
          </UserHolderBox>
        ))}
      </NewsBox>
    </>
  );
};

export default FriendList;
