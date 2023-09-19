import { useState } from "react";
import { SvgComponent } from "../../../Navigation/Navigation";
import Add from "../../../../icons/Add_user.svg";
import add_ready from "../../../../icons/add_ready.svg";
import sent from "../../../../icons/check_mark_square.svg";
import { useHttpClient } from "../../../hooks/http-hook";
import UserHolderBox from "../UserHolderBox";

export default function MatchingUsers(props) {
  const [hover, setHover] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const { sendRequest } = useHttpClient();

  const requestFriend = async () => {
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/myProfile/Friends/req_friend",
        "POST",
        JSON.stringify({
          name: props.name,
          myId: props.ids,
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
    <UserHolderBox sendReq={true} name={props.name}>
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
