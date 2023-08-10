import { useState,useEffect } from "react";
import NewsBox from "../../../UI/NewsBox";
import UserHolderBox from "../UserHolderBox";
import { SvgComponent } from "../../../Navigation/Navigation";
import Accept from "../../../../icons/check_mark_square.svg";
import Reject from "../../../../icons/reject.svg";
import styles from "../Friends.module.css";
import { useHttpClient } from "../../../hooks/http-hook";

export default function FriendRequest(props) {
  const { sendRequest } = useHttpClient();
  const [foundUsers, setfoundUsers] = useState([]);

  useEffect(() => {
    if (props.requests) {
      setfoundUsers(props.requests);
    }
  }, [props.requests]);

  const decision = async (res, name,id) => {
    setfoundUsers(foundUsers.filter((foundUsers) => foundUsers.name !== name));
    try {
      const resData = await sendRequest(
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
    } catch (err) {}

    
  };
  return (
    <div>
      <span>Friend Request</span>
      <NewsBox>
        {foundUsers.map((req, i) => (
          <UserHolderBox key={i} name={req.name}>
            <div className={`${styles.decision_box__style}`}>
              <div onClick={() => decision("accept", req.name, req._id)}>
                <SvgComponent
                  Image={Accept}
                  height="45"
                  width="40"
                ></SvgComponent>
              </div>
              <div onClick={() => decision("reject", req.name,req._id)}>
                <SvgComponent
                  Image={Reject}
                  height="45"
                  width="40"
                ></SvgComponent>
              </div>
            </div>
          </UserHolderBox>
        ))}
      </NewsBox>
    </div>
  );
}
