import styles from "./Friends.module.css";
import { SvgComponent } from "../../Navigation/Navigation";
import Reject from "../../../icons/reject.svg";
import Accept from "../../../icons/Add_user.svg";

export default function UserHolderBox(props) {
  const onReturnUserInformation = () => {
    props.onReturnUserInformation(props.name, props.id);
  };
 
  return (
    <div className={styles.users_holding_div__style}>
      <span className={styles.users_name__style}>{props.name}</span>
      {props.remove && (
        <div onClick={onReturnUserInformation}>
          <SvgComponent
            Image={Reject}
            height="40"
            color="red"
            width="70"
          ></SvgComponent>
        </div>
      )}
      {props.add && (
        <div onClick={onReturnUserInformation}>
          <SvgComponent
            Image={Accept}
            height="40"
            color="red"
            width="70"
          ></SvgComponent>
        </div>
      )}
    </div>
  );
}
