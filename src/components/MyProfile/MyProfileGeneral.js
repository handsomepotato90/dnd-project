import { useContext } from "react";
import ConteinerBox from "../UI/ConteinerBox";
import ChangePassword from "./ChangePassword";
import ChangeUserName from "./ChangeUserName";
import ChangeMail from "./ChangeMail";
import { LoginContext } from "../store/login-context";



export default function MyProfileGeneral() {
  const context = useContext(LoginContext);

  return (
    <ConteinerBox>
      <ChangeUserName ids ={context.userId}><h3>Change Username</h3></ChangeUserName>
      <ChangePassword ids ={context}><h3>Change Password</h3></ChangePassword>
      <ChangeMail ids ={context.userId}><h3>Change E-Mail</h3></ChangeMail>
    </ConteinerBox>
  );
}
