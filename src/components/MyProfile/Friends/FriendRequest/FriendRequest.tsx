import React, { useState, useEffect } from "react";
import NewsBox from "../../../UI/NewsBox";
import UserHolderBox from "../UserHolderBox";
import { SvgComponent } from "../../../Navigation/Navigation";
import Accept from "../../../../icons/check_mark_square.svg";
import Reject from "../../../../icons/reject.svg";
import styles from "../Friends.module.css";
import { useHttpClient } from "../../../hooks/http-hook";

interface Friend {
  _id: string;
  name: string;
}

interface Props {
  requests: Friend[];
  ids: string;
  title: string;
  children?: React.ReactNode;
}

const FriendRequest: React.FC<Props> = (props) => {
  const { sendRequest } = useHttpClient();
  const [foundUsers, setFoundUsers] = useState<Friend[]>([]);

  useEffect(() => {
    if (props.requests) {
      setFoundUsers(props.requests);
    }
  }, [props.requests]);

  const decision = async (
    res: "accept" | "reject",
    name: string,
    id: string
  ) => {
    setFoundUsers(foundUsers.filter((user) => user.name !== name));
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/myProfile/Friends/res_friend",
        "POST",
        JSON.stringify({
          decision: res,
          name: name,
          user: id,
          myId: props.ids,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {
      // Handle error
    }
  };

  return (
    <div>
      <div className={`${styles.decision_box__style} ${styles.space_between}`}>
        <span className={styles.span_title__style}>{props.title}</span>
        {props.children}
      </div>

      <NewsBox color={"#1f2125"}>
        {foundUsers.map((req, i) => (
          <UserHolderBox invites={true} key={i} name={req.name}>
            <div className={`${styles.decision_box__style}`}>
              <button
                className={`button ${styles.buttons__style}`}
                onClick={() => decision("accept", req.name, req._id)}
              >
                <SvgComponent
                  Image={Accept}
                  height="40"
                  color="red"
                  width="70"
                />
              </button>
              <button
                className={`button ${styles.buttons__style}`}
                onClick={() => decision("reject", req.name, req._id)}
              >
                <SvgComponent
                  Image={Reject}
                  height="40"
                  color="red"
                  width="70"
                />
              </button>
            </div>
          </UserHolderBox>
        ))}
      </NewsBox>
    </div>
  );
};

export default FriendRequest;
