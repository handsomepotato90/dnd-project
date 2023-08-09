import { useState } from "react";
import styles from "../Friends.module.css";
import { SvgComponent } from "../../../Navigation/Navigation";
import Add from "../../../../icons/Add_user.svg";
import add_ready from "../../../../icons/add_ready.svg";
import sent from "../../../../icons/check_mark_square.svg";
import { useHttpClient } from "../../../hooks/http-hook";
import UserHolderBox from "../UserHolderBox";

export default function MatchingUsers(props) {
  const [hover, setHover] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const requestFriend = async () => {
    try {
      const resData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/myProfile/Friends/req_friend",
        "POST",
        JSON.stringify({
          name: props.name,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
    setRequestSent(true);
  };
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  return (
    <UserHolderBox name={props.name}>
      <div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={requestFriend}
      >
        {requestSent ? (
          <SvgComponent Image={sent} height="45" width="70"></SvgComponent>
        ) : !hover ? (
          <SvgComponent Image={Add} height="45" width="70"></SvgComponent>
        ) : (
          <SvgComponent Image={add_ready} height="45" width="70"></SvgComponent>
        )}
      </div>
    </UserHolderBox>
  );
}
