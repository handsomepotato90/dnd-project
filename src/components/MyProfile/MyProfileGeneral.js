import ConteinerBox from "../UI/ConteinerBox";
import ChangePassword from "./ChangePassword";
import ChangeUserName from "./ChangeUserName";
import ChangeMail from "./ChangeMail";



export default function MyProfileGeneral() {
  return (
    <ConteinerBox>
      <ChangeUserName><h3>Change Username</h3></ChangeUserName>
      <ChangePassword><h3>Change Password</h3></ChangePassword>
      <ChangeMail><h3>Change E-Mail</h3></ChangeMail>
    </ConteinerBox>
  );
}
