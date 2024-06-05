import React, { useContext } from "react";
import ConteinerBox from "../UI/ConteinerBox";
import ChangePassword from "./ChangePassword";
import ChangeUserName from "./ChangeUserName";
import ChangeMail from "./ChangeMail";
import { LoginContext } from "../store/login-context";

import "./MyProfile.css";

const MyProfileGeneral = () => {
  const context = useContext(LoginContext);

  return (
    <ConteinerBox >
      <ChangeUserName uname={context.username} ids={context.userId}>
        <span className="text_box__style">Change Username</span>
      </ChangeUserName>
      <ChangePassword ids={context}>
        <span className="text_box__style">Change Password</span>
      </ChangePassword>
      <ChangeMail ids={context.userId}>
        <span className="text_box__style">
          Change E-Mail <span className="red_text">(Coming soon)</span>
        </span>
      </ChangeMail>
    </ConteinerBox>
  );
}
export default MyProfileGeneral;