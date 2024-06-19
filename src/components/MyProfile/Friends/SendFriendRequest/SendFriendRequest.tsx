import { useState, useRef, FC } from "react";
import NewsBox from "../../../UI/NewsBox";
import { useHttpClient } from "../../../hooks/http-hook";
import MatchingUsers from "./MatchingUsers";

import styles from "../Friends.module.css";

interface SendFriendRequestProps {
  ids: string;
  title: string;
  overflow: string;
}

const SendFriendRequest: FC<SendFriendRequestProps> = (props) => {
  const { sendRequest } = useHttpClient();
  const [foundUsers, setFoundUsers] = useState<any[]>([]);
  const text = useRef<HTMLInputElement>(null);
  let timer: NodeJS.Timeout;

  const nameSearch = () => {
    if (text.current && text.current.value.trim() !== "") {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        try {
          const resData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL +
              "/myProfile/Friends/search_users",
            "POST",
            JSON.stringify({
              user: text.current!.value,
              myId: props.ids,
            }),
            {
              "Content-Type": "application/json",
            }
          );
          setFoundUsers([...resData]);
        } catch (err) {}
      }, 1000);
    }
  };

  return (
    <div className={styles.size}>
      <div className={styles.searchbox__style}>
        <span className={styles.span_title__style}> {props.title}</span>
        <input
          placeholder="Search"
          type="text"
          ref={text}
          onKeyUp={nameSearch}
        />
      </div>

      <NewsBox className={props.overflow} color={"#1f2125"}>
        {foundUsers.map((user, i) => (
          <MatchingUsers key={i} ids={props.ids} name={user.name} />
        ))}
      </NewsBox>
    </div>
  );
};

export default SendFriendRequest;
