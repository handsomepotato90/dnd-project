import React, { ReactNode } from "react";
import styles from "./Friends.module.css";
import { SvgComponent } from "../../Navigation/Navigation";
import Reject from "../../../icons/reject.svg";
import Accept from "../../../icons/Add_user.svg";

interface UserHolderBoxProps {
  name: string;
  id?: string;
  sendReq?: boolean;
  remove?: boolean;
  invites?: boolean;
  add?: boolean;
  children?: ReactNode;
  onReturnUserInformation?: (name: string, id: string) => void;
}

const UserHolderBox: React.FC<UserHolderBoxProps> = (props) => {
  const onReturnUserInformation = () => {
    if (props.onReturnUserInformation) {
      props.onReturnUserInformation(props.name, props.id || '');
    }
  };

  return (
    <div className={styles.users_holding_div__style}>
      <span className={styles.users_name__style}>{props.name}</span>
      {props.sendReq && props.children}
      {props.remove && (
        <div onClick={onReturnUserInformation}>
          <SvgComponent Image={Reject} height="40" color="red" width="70" />
        </div>
      )}
      {props.invites && props.children}
      {props.add && (
        <div onClick={onReturnUserInformation}>
          <SvgComponent Image={Accept} height="40" color="red" width="70" />
        </div>
      )}
    </div>
  );
};


export default UserHolderBox;
